import { User } from '@prisma/client'
import { FiArrowLeft, FiPlus } from 'react-icons/fi'
import {
	Form,
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

export let loader: LoaderFunction = async ({ request }) => getUser(request)

// We just display the pages for now, we use this file to link the stylesheet
export default function AppPage() {
	let user = useLoaderData<User | null>()
	let matches = useMatches()
	let currentRoute = matches[matches.length - 1].pathname

	return (
		<AppLayout
			header={
				<>
					{currentRoute != '/app/entries/' ? (
						<Link to="/app/entries" className="button mr-auto">
							<FiArrowLeft size="1.5rem" />
							<span>Back to the entries</span>
						</Link>
					) : null}
					{user ? (
						<Link className="button ml-auto" to={`/app/users/${user.username}`}>
							{user.username}
						</Link>
					) : (
						<Link className="button ml-auto" to={`/login?redirectTo=${currentRoute}`}>
							Login
						</Link>
					)}
				</>
			}
			main={<Outlet />}
			footer={
				!user ? null : (
					<Link to="/app/entries/new" className="button ml-auto">
						<FiPlus size="1.5rem" />
						<span>Add an entry</span>
					</Link>
				)
			}
		/>
	)
}