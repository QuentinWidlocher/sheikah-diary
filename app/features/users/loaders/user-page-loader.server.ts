import { User } from '@prisma/client'
import { LoaderFunction, redirect } from 'remix'
import { serialize } from 'superjson'
import { db } from '~/utils/db.server'

export type UserPageLoaderPayload = Pick<User, 'id' | 'username'>

export let userPageLoader: LoaderFunction = async ({ request, params }) => {
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

	let payload: UserPageLoaderPayload = foundUserFromDb

	return serialize(payload)
}
