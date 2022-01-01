import { LoaderFunction } from 'remix'
import { serialize } from 'superjson'
import { db } from '~/utils/db.server'
import { requireUserId } from '~/utils/session.server'
import { Notification } from '@prisma/client'

export type UserNotificationsPageLoaderPayload = Notification[]

export let userNotificationsPageLoader: LoaderFunction = async ({
	request,
}) => {
	let userId = await requireUserId(request)

	let notifications = await db.notification.findMany({
		where: {
			userId,
		},
		orderBy: {
			createdAt: 'desc',
		},
		take: 10,
	})

	let payload: UserNotificationsPageLoaderPayload = notifications

	return serialize(payload)
}
