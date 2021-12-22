import { User } from '@prisma/client'
import { FiLogOut } from 'react-icons/fi'
import { HiBell, HiCamera } from 'react-icons/hi'
import {
	Form,
	LoaderFunction,
	NavLink,
	Outlet,
	redirect,
	useLoaderData,
} from 'remix'
import { deserialize, serialize } from 'superjson'
import { db } from '~/utils/db.server'
import { getUser } from '~/utils/session.server'

export let loader: LoaderFunction = async ({ request, params }) => {
	if (!params.username) {
		return redirect('/app/entries')
	}

	let foundUserFromDb = await db.user.findFirst({
		select: {
			id: true,
			username: true,
		},
		where: {
			username: params.username,
		},
	})

	if (!foundUserFromDb) {
		return redirect('/app/entries')
	}

	return serialize({
		user: foundUserFromDb,
		currentUser: await getUser(request),
	})
}

function getNavLinkClassName({ isActive }: { isActive: boolean }) {
	let result = `sheika button flex-col !space-x-0 space-y-3`

	if (!isActive) {
		result += ' opacity-50'
	}

	return result
}

export default function UserPage() {
	let { user, currentUser } = deserialize<{
		user: Pick<User, 'id' | 'username'>
		currentUser?: Pick<User, 'username'>
	}>(useLoaderData())

	return (
		<article className="flex flex-col w-full">
			<div className="mt-10 flex mx-auto items-center">
				<h1 className="text-xl font-bold filter drop-shadow-primary text-primary-500">
					{user.username}
				</h1>
				{currentUser?.username == user.username ? (
					<Form className="ml-10" action="/logout" method="post">
						<input type="hidden" name="redirectTo" readOnly value="/app/entries" />
						<button className="sheika button danger" type="submit">
							<FiLogOut />
							<span>Logout</span>
						</button>
					</Form>
				) : null}
			</div>

			{currentUser && currentUser.username == user.username ? (
				<nav className="flex flex-col mx-auto my-10">
					<ul className="flex space-x-5">
						<li className="flex-1">
							<NavLink className={getNavLinkClassName} to="entries">
								<span>Entries</span>
								<HiCamera size="1.9rem" />
							</NavLink>
						</li>
						<li className="flex-1">
							<NavLink className={getNavLinkClassName} to="notifications">
								<span>Notifications</span>
								<HiBell size="1.9rem" />
							</NavLink>
						</li>
					</ul>
					<hr className="!my-1" />
				</nav>
			) : null}
			<Outlet />
		</article>
	)
}
