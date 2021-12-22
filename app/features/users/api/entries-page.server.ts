import { LoaderFunction, redirect } from 'remix'
import { serialize } from 'superjson'
import {
	computeEntryInListFields,
	prismaEntryInListSelect,
} from '~/features/entries/types/entry-in-list'
import { db } from '~/utils/db.server'
import { getUser } from '~/utils/session.server'
import { UserEntriesPageData } from '../types/page'

const itemsPerPage = 20

export let userEntriesPageLoader: LoaderFunction = async ({
	params,
	request,
}) => {
	if (!params.username) {
		return redirect('/app/entries')
	}

	let url = new URL(request.url)
	let page = url.searchParams.get('p')
	let pageNumber = page && Number(page) > 0 ? Number(page) - 1 : 0

	let foundUserFromDb = await db.user.findFirst({
		select: {
			id: true,
		},
		where: {
			username: params.username,
		},
	})

	if (!foundUserFromDb) {
		return redirect('/app/entries')
	}

	let entries = await db.entry.findMany({
		select: {
			...prismaEntryInListSelect,
		},
		take: itemsPerPage,
		skip: itemsPerPage * pageNumber,
		where: {
			userId: foundUserFromDb.id,
		},
		orderBy: {
			createdAt: 'desc',
		},
	})

	let total = await db.entry.count({
		where: {
			userId: foundUserFromDb.id,
		},
	})

	let foundUser: UserEntriesPageData = {
		entries: await Promise.all(entries.map(await computeEntryInListFields)),
		page: pageNumber + 1,
		total,
		itemsPerPage,
	}

	return serialize(foundUser)
}
