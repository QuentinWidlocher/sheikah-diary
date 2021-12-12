import { Entry, NotificationType } from '@prisma/client'
import { ActionFunction, redirect } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db.server.'
import { getUser } from '~/utils/session.server'

const formValidator = z.object({
	body: z.string().nonempty({ message: 'You cannot send an empty comment' }),
})

export let createCommentAction: ActionFunction = async ({
	request,
	params,
}) => {
	let currentPage = new URL(request.url).pathname

	let user = await getUser(request)

	if (!user) {
		return redirect(`/login?redirectTo=${currentPage}`)
	}

	let foundEntry = await db.entry.findFirst({
		where: {
			slug: params.slug,
		},
		select: {
			id: true,
			title: true,
		},
	})

	if (!foundEntry || !params.slug) {
		return redirect('/app/entries')
	}

	let formData = await request.formData()
	let parsedForm = formValidator.safeParse(
		Object.fromEntries(formData.entries()),
	)

	if (!parsedForm.success) {
		return parsedForm.error.format()
	}

	createNotifications(
		{
			id: foundEntry.id,
			title: foundEntry.title,
			slug: params.slug,
		},
		parsedForm.data.body,
	).then(() => console.log('createnotif'))

	console.log('return')
	return db.comment.create({
		data: {
			body: parsedForm.data.body,
			entryId: foundEntry.id,
			userId: user.id,
		},
	})
}

async function createNotifications(
	entry: Pick<Entry, 'id' | 'slug' | 'title'>,
	comment: string,
) {
	let usersWatchingThisEntry = await db.user.findMany({
		select: {
			id: true,
		},
		where: {
			watches: {
				some: {
					id: entry.id,
				},
			},
		},
	})

	console.log(
		'Creating a notification on entry',
		entry.slug,
		'for users',
		usersWatchingThisEntry.map(e => e.id),
	)

	await db.notification.createMany({
		data: usersWatchingThisEntry.map(user => ({
			userId: user.id,
			title: `Someone commented on ${entry.title}`,
			content: comment,
			link: `/app/entries/${entry.slug}`,
			type: NotificationType.COMMENT,
		})),
	})
}
