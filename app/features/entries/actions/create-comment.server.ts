import { Entry, NotificationType, User } from '@prisma/client'
import { ActionFunction, redirect } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db.server'
import { getUser } from '~/utils/session.server'
import { safeParseFormData } from '../../../utils/formdata.utils.server'

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

	let parsedForm = await safeParseFormData(request, formValidator)

	if (!parsedForm.success) {
		return parsedForm.error.format()
	}

	// no await here because this can be executed later
	createNotifications(
		user,
		{
			id: foundEntry.id,
			title: foundEntry.title,
			slug: params.slug,
		},
		parsedForm.data.body,
	)

	return db.comment.create({
		data: {
			body: parsedForm.data.body,
			entryId: foundEntry.id,
			userId: user.id,
		},
	})
}

async function createNotifications(
	from: Pick<User, 'username'>,
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
			username: {
				not: {
					equals: from.username,
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

	// We create as much notifications as they are users "subscribed" to this entry
	await db.notification.createMany({
		data: usersWatchingThisEntry.map(user => ({
			userId: user.id,
			title: `${from.username} commented on ${entry.title}`,
			content: comment,
			link: `/app/entries/${entry.slug}`,
			type: NotificationType.COMMENT,
		})),
	})

	// We "subscribe" the poster to the entry so he can receive replies
	await db.user.update({
		where: {
			username: from.username,
		},
		data: {
			watches: {
				connect: {
					id: entry.id,
				},
			},
		},
	})
}
