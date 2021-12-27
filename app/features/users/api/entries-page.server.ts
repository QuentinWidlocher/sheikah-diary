import { LoaderFunction, redirect } from 'remix'
import { serialize } from 'superjson'
import {
	computeEntryInListFields,
	EntryInList,
	EntryInListFromDb,
	prismaEntryInListSelect,
} from '~/features/entries/types/entry-in-list'
import { db } from '~/utils/db.server'
import { paginateLoader } from '~/utils/pagination.server'

export let userEntriesPageLoader: LoaderFunction = async ({
	params,
	request,
}) => {
	if (!params.username) {
		return redirect('/app/entries')
	}

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

	let getItems = async (pageNumber: number, itemsPerPage: number) => {
		let items: EntryInListFromDb[] = await db.entry.findMany({
			select: {
				...prismaEntryInListSelect,
			},
			take: itemsPerPage,
			skip: itemsPerPage * pageNumber,
			where: {
				userId: foundUserFromDb!.id,
			},
			orderBy: {
				createdAt: 'desc',
			},
		})

		return await Promise.all(items.map(await computeEntryInListFields))
	}

	let paginated = await paginateLoader<EntryInList>({
		request,
		getItems,
		getTotal: () =>
			db.entry.count({
				where: {
					userId: foundUserFromDb!.id,
				},
			}),
	})

	return serialize(paginated)
}
