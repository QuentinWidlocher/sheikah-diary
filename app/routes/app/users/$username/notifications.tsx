import {
	ActionFunction,
	Form,
	redirect,
	LoaderFunction,
	useLoaderData,
	Link,
} from 'remix'
import { deserialize, serialize } from 'superjson'
import { db } from '~/utils/db.server'
import { requireUserId } from '~/utils/session.server'
import { Notification } from '@prisma/client'
import { displayDateTime } from '~/utils/date.utils'
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import { parseFormData } from '../../../../../prisma/formdata.utils.server'
import { z } from 'zod'

export let loader: LoaderFunction = async ({ request }) => {
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

	return serialize(notifications)
}

let validator = z.object({
	id: z.string().uuid(),
	redirectTo: z.string().optional(),
})

export let action: ActionFunction = async ({ request }) => {
	let { id, redirectTo } = await parseFormData(request, validator)

	console.log(
		'Request to mark notification',
		id,
		'as seen and redirect to',
		redirectTo,
	)

	await db.notification.update({
		data: {
			seenAt: new Date(),
		},
		where: {
			id,
		},
	})

	if (redirectTo) {
		return redirect(redirectTo)
	} else {
		return null
	}
}

function displayNotifTitle(notif: Notification) {
	// By default we jst display the title
	let title = <h1>{notif.title}</h1>

	// There is an action only if the title can be clicked
	if (notif.link) {
		if (notif.seenAt) {
			// If the notif has already been seen, we just make a link to redirect
			title = (
				<Link to={notif.link}>
					<h1>{notif.title}</h1>
				</Link>
			)
		} else {
			// If the notif is stil new, click will update the seenAt AND redirect to the link
			title = (
				<Form method="post">
					<input type="hidden" name="redirectTo" readOnly value={notif.link} />
					<input type="hidden" name="id" readOnly value={notif.id} />
					<button className="no-style">
						<h1 className="font-bold">{notif.title}</h1>
					</button>
				</Form>
			)
		}
	}

	return title
}

function displayNotif(notif: Notification) {
	return (
		<>
			<div className="flex items-center text-2xl space-x-3">
				{notif.seenAt ? (
					<FiCheckCircle className="mx-4"></FiCheckCircle>
				) : (
					<Form method="post">
						<button>
							<FiAlertCircle></FiAlertCircle>
							<input type="hidden" name="id" readOnly value={notif.id} />
						</button>
					</Form>
				)}
				<div
					className={
						'flex flex-col ' + (!notif.seenAt && 'filter drop-shadow-primary')
					}>
					{displayNotifTitle(notif)}
					<small className="text-sm">on {displayDateTime(notif.createdAt)}</small>
				</div>
			</div>
			<p className="italic ml-10 my-5">{notif.content}</p>
			<hr className="my-0" />
		</>
	)
}

export default function UserNotificationsPage() {
	let notifs = deserialize<Notification[]>(useLoaderData())

	if (notifs?.length > 0) {
		return (
			<ul className="mx-auto">
				{notifs.map(notif => (
					<li key={notif.id} className="p-5 text-primary-500 font-bold">
						{displayNotif(notif)}
					</li>
				))}
			</ul>
		)
	} else {
		return (
			<div className="mx-auto">
				<h1>No new notifications</h1>
			</div>
		)
	}
}
