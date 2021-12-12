import { LoaderFunction, useLoaderData } from 'remix'
import { deserialize, serialize } from 'superjson'
import { db } from '~/utils/db.server.'
import { requireUserId } from '~/utils/session.server'
import { Notification } from '@prisma/client'

export let loader: LoaderFunction = async ({ request }) => {
	let userId = await requireUserId(request)

	let notifications = await db.notification.findMany({
		where: {
			userId,
		},
	})

	return serialize(notifications)
}

export default function UserNotificationsPage() {
	let notifs = deserialize<Notification[]>(useLoaderData())

	return (
		<ul>
			{notifs.map(notif => (
				<li>
					<h1>{notif.title}</h1>
					<p>{notif.content}</p>
				</li>
			))}
		</ul>
	)
}
