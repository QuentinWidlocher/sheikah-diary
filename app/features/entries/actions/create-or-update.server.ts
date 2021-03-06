import { Prisma } from '@prisma/client'
import { ActionFunction, redirect } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db.server'
import { base64ImageValidTypeRegex, saveImage } from '~/utils/file.utils.server'
import { requireUserId } from '~/utils/session.server'
import { slugify } from '~/utils/string.utils'
import { NewEntry } from '../types/entries'

let formValidator = z.object({
	title: z.string().nonempty({ message: 'The title is required' }),
	originalSlug: z.string().optional(),
	content: z.string().optional().default(''),
	mainPicture: z.literal('').or(
		z.string().regex(base64ImageValidTypeRegex, {
			message: 'Not a valid image format',
		}),
	),
})

export type FormError = z.ZodFormattedError<z.infer<typeof formValidator>>

async function getUniqueSlug(title: string) {
	let originalSlug = slugify(title)

	let entriesExistingWithSlug = await db.entry.count({
		where: {
			slug: {
				startsWith: originalSlug,
			},
		},
	})

	let result = originalSlug

	if (entriesExistingWithSlug > 0) {
		result = `${originalSlug}-${entriesExistingWithSlug + 1}`
		console.log(
			`Slug was going to be "${originalSlug}" but is instead "${result}"`,
		)
	}

	return result
}

export let baseUpdateAction = async (
	request: Request,
	action: (
		data: z.infer<typeof formValidator> & { userId: string },
	) => Promise<string>,
) => {
	let userId = await requireUserId(request)

	console.debug('Parsing form data (awaiting text value)')
	let text = await request.text()
	console.debug('Parsing form data (text value to search params)')
	// Idk why but await request.formData() justs freezes
	let formData = new URLSearchParams(text)
	console.debug('Parsed form data : ', formData.keys())

	let parsedForm = formValidator.safeParse(
		Object.fromEntries(formData.entries()),
	)

	if (!parsedForm.success) {
		return parsedForm.error.format()
	}

	try {
		let slug = await action({ ...parsedForm.data, userId })
		return redirect(`/app/entries/${slug}`)
	} catch (e) {
		console.error('Unable to save entry', e)
		return null
	}
}

export let createAction: ActionFunction = async ({ request }) => {
	console.log('Request to create entry')
	return baseUpdateAction(request, async form => {
		let data: Prisma.EntryCreateInput = {
			title: form.title,
			content: form.content,
			slug: await getUniqueSlug(form.title),
			user: {
				connect: {
					id: form.userId,
				},
			},
			// We automatically like the post we made, like on Reddit
			likedBy: {
				connect: {
					id: form.userId,
				},
			},
			// And we automatically receive notifications too
			watchedBy: {
				connect: {
					id: form.userId,
				},
			},
		}

		let createdEntry = await db.entry.create({ data })

		if (form.mainPicture) {
			await saveImage(form.mainPicture, createdEntry.id)
			console.log('File has been saved')
		}

		return createdEntry.slug
	})
}

export let updateAction: ActionFunction = async ({ request }) => {
	console.log('Request to update entry')
	return baseUpdateAction(request, async form => {
		if (!form.originalSlug) {
			throw Error('Cannot update entry without its original slug')
		}

		let data: NewEntry = {
			title: form.title,
			content: form.content,
			slug: await getUniqueSlug(form.title),
			userId: form.userId,
		}

		let updatedEntry = await db.entry.update({
			data,
			where: {
				slug: form.originalSlug,
			},
		})

		if (form.mainPicture) {
			// Delete all pictures linked to entry
			let { count: deleteCount } = await db.picture.deleteMany({
				where: {
					entryId: updatedEntry.id,
				},
			})

			console.debug(
				`Deleted ${deleteCount} picture${deleteCount > 1 && 's'} linked to entry ${
					updatedEntry.id
				}`,
			)

			await saveImage(form.mainPicture, updatedEntry.id)
			console.log('File has been saved')
		}

		return updatedEntry.slug
	})
}
