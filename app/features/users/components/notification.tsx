import { Notification } from '@prisma/client'
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { Link, Form } from 'remix'
import { displayDateTime } from '~/utils/date.utils'

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

export default function NotificationComponent({
	notif,
}: {
	notif: Notification
}) {
	return (
		<>
			<div className="flex items-center text-2xl space-x-3">
				{notif.seenAt ? (
					<FiCheckCircle className="mx-4"></FiCheckCircle>
				) : (
					<Form method="post">
						<button>
							<FiAlertCircle className="mx-4"></FiAlertCircle>
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
