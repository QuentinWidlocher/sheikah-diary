import { User } from '@prisma/client'
import { MetaFunction, useLoaderData } from 'remix'
import { deserialize } from 'superjson'
import {
	userPageLoader,
	UserPageLoaderPayload,
} from '~/features/users/loaders/user-page-loader.server'
import UserPage from '~/features/users/pages/user-page'
import useCurrentUser from '~/hooks/useCurrentUser'

export let meta: MetaFunction = ({ data }) => {
	let user = deserialize<Pick<User, 'id' | 'username'>>(data)
	return {
		title: `${user.username}'s Page | Sheikah Diary`,
	}
}

export let loader = userPageLoader

export default function UserRoute() {
	let user = deserialize<UserPageLoaderPayload>(useLoaderData())
	let currentUser = useCurrentUser()

	return <UserPage user={user} currentUser={currentUser} />
}
