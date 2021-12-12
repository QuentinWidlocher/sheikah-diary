import { User } from '@prisma/client'
import { FiBell, FiLogOut } from 'react-icons/fi'
import { HiBell, HiCamera } from 'react-icons/hi'
import {
	Form,
	Link,
	LoaderFunction,
	Outlet,
	redirect,
	useLoaderData,
} from 'remix'
import { deserialize, serialize } from 'superjson'
import { SuperJSONResult } from 'superjson/dist/types'
import { db } from '~/utils/db.server.'
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
						<button className="danger" type="submit">
							<FiLogOut />
							<span>Logout</span>
						</button>
					</Form>
				) : null}
			</div>

			<nav className="flex flex-col mx-auto mt-5">
				<ul className="flex space-x-5">
					<li className="flex-1">
						<Link className="button flex-col !space-x-0 space-y-3" to="entries">
							<span>Entries</span>
							<HiCamera size="1.9rem" />
						</Link>
					</li>
					<li className="flex-1">
						<Link className="button flex-col !space-x-0 space-y-3" to="notifications">
							<span>Notifications</span>
							<HiBell size="1.9rem" />
						</Link>
					</li>
				</ul>
				<hr className="!mt-1" />
			</nav>
			<Outlet />
		</article>
	)
}
