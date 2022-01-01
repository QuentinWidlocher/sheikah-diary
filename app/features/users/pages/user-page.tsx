import { User } from '@prisma/client'
import { FiLogOut } from 'react-icons/fi'
import { HiCamera, HiBell, HiHeart } from 'react-icons/hi'
import { Form, NavLink, Outlet } from 'remix'

interface UserPageProps {
	user: Pick<User, 'id' | 'username'>
	currentUser: User
}

function getNavLinkClassName({ isActive }: { isActive: boolean }) {
	let result = `sheika button flex-col !space-x-0 space-y-3`

	if (!isActive) {
		result += ' opacity-50'
	}

	return result
}

export default function UserPage({ user, currentUser }: UserPageProps) {
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
						<li className="flex-1">
							<NavLink className={getNavLinkClassName} to="likes">
								<span>Likes</span>
								<HiHeart size="1.9rem" />
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
