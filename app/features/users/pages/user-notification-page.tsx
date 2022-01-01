import { Notification } from '@prisma/client'
import NotificationComponent from '../components/notification'

interface UserNotificationsPageProps {
	notifs: Notification[]
}

export default function UserNotificationsPage({
	notifs,
}: UserNotificationsPageProps) {
	if (notifs?.length > 0) {
		return (
			<ul className="mx-auto">
				{notifs.map(notif => (
					<li key={notif.id} className="p-5 text-primary-500 font-bold">
						<NotificationComponent notif={notif} />
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
