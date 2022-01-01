import { useLoaderData } from 'remix'
import { deserialize } from 'superjson'
import { userNotificationsPageAction } from '~/features/users/actions/user-notifications-page-action.server'
import {
	userNotificationsPageLoader,
	UserNotificationsPageLoaderPayload,
} from '~/features/users/loaders/user-notifications-page-loader.server'
import UserNotificationsPage from '~/features/users/pages/user-notification-page'

export let loader = userNotificationsPageLoader

export let action = userNotificationsPageAction

export default function UserNotificationsRoute() {
	let notifs = deserialize<UserNotificationsPageLoaderPayload>(useLoaderData())

	return <UserNotificationsPage notifs={notifs} />
}
