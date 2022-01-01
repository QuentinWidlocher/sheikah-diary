import { LoaderFunction } from 'remix'
import { serialize } from 'superjson'
import { db } from '~/utils/db.server'
import { Paginated, paginateLoader } from '~/utils/pagination.server'
import {
	EntryInListFromDb,
	prismaEntryInListSelect,
	EntryInList,
	computeEntryInListFields,
} from '../types/entry-in-list'

export type EntryListLoaderPayload = Paginated<EntryInList>

export const entryListLoader: LoaderFunction = async ({ request }) => {
	let { items, page, totalItems, itemsPerPage } =
		await paginateLoader<EntryInListFromDb>({
			request,
			getItems: (page, itemsPerPage) =>
				db.entry.findMany({
					select: prismaEntryInListSelect,
					take: itemsPerPage,
					skip: itemsPerPage * page,
					orderBy: {
						createdAt: 'desc',
					},
				}),
			getTotal: () => db.entry.count(),
		})

	let entries: EntryInList[] = await Promise.all(
		items.map(await computeEntryInListFields),
	)

	let payload: EntryListLoaderPayload = {
		items: entries,
		page,
		totalItems,
		itemsPerPage,
	}

	return serialize(payload)
}
