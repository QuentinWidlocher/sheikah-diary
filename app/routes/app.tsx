import { Notification, User } from '@prisma/client'
import { FiArrowLeft, FiPlus } from 'react-icons/fi'
import {
	Link,
	LinksFunction,
	LoaderFunction,
	Outlet,
	useLoaderData,
	useMatches,
} from 'remix'
import AppLayout from '~/components/app-layout'
import entriesStylesheet from '~/styles/entries.css'
import { getUser } from '~/utils/session.server'

export let links: LinksFunction = () => [
	{ rel: 'stylesheet', href: entriesStylesheet },
]

export let loader: LoaderFunction = async ({ request }) => {
	let currentUser = await getUser(request, {
		notifications: true,
	})

	if (!currentUser) {
		return null
	}

	let newNotif = (currentUser.notifications as Notification[]).some(
		n => !n.seenAt,
	)

	return {
		currentUser,
		newNotif,
	}
}

// We just display the pages for now, we use this file to link the stylesheet
export default function AppPage() {
	let loader = useLoaderData<{ currentUser: User; newNotif: boolean } | null>()
	let matches = useMatches()
	let currentRoute = matches[matches.length - 1].pathname

	return (
		<AppLayout
			header={
				<>
					{currentRoute != '/app/entries' ? (
						<Link to="/app/entries" className="sheika button mr-auto">
							<FiArrowLeft size="1.5rem" />
							<span>Back to the entries</span>
						</Link>
					) : null}
					{loader?.currentUser ? (
						<Link
							className="sheika button ml-auto relative"
							to={`/app/users/${loader.currentUser.username}/notifications`}>
							{loader.currentUser.username}
							{loader.newNotif ? (
								<div className="absolute bottom-3 right-2 rounded-full bg-danger-500 w-2 h-2"></div>
							) : null}
						</Link>
					) : (
						<Link
							className="sheika button ml-auto"
							to={`/login?redirectTo=${currentRoute}`}>
							Login
						</Link>
					)}
				</>
			}
			main={<Outlet />}
			footer={
				!loader?.currentUser ? null : (
					<Link to="/app/entries/new" className="sheika button ml-auto">
						<FiPlus size="1.5rem" />
						<span>Add an entry</span>
					</Link>
				)
			}
		/>
	)
}
