import { Notification } from '@prisma/client'
import { FiCheckCircle } from 'react-icons/fi'
import { Form } from 'remix'
import NotificationComponent from '../components/notification'

interface UserNotificationsPageProps {
	notifs: Notification[]
}

export default function UserNotificationsPage({
	notifs,
}: UserNotificationsPageProps) {
	if (notifs?.length > 0) {
		let unseenNotifs = notifs.some(n => n.seenAt == undefined)

		return (
			<>
				{unseenNotifs ? (
					<Form action="mark-all-read" method="post">
						<button className="sheika button mx-auto my-3" type="submit">
							<FiCheckCircle className="mr-4"></FiCheckCircle>
							Mark all read
						</button>
					</Form>
				) : null}
				<ul className="mx-auto">
					{notifs.map(notif => (
						<li key={notif.id} className="p-5 text-primary-500 font-bold">
							<NotificationComponent notif={notif} />
						</li>
					))}
				</ul>
			</>
		)
	} else {
		return (
			<div className="mx-auto">
				<h1>No new notifications</h1>
			</div>
		)
	}
}
