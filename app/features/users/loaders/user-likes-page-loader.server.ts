import { LoaderFunction } from 'remix'
import { serialize } from 'superjson'
import {
	computeEntryInListFields,
	EntryInList,
	prismaEntryInListSelect,
} from '~/features/entries/types/entry-in-list'
import { db } from '~/utils/db.server'
import { Paginated, paginateLoader } from '~/utils/pagination.server'
import { requireUserId } from '~/utils/session.server'

export type UserLikesPageLoaderPayload = Paginated<EntryInList>

export let userLikesPageLoader: LoaderFunction = async ({
	request,
	params,
}) => {
	let userId = await requireUserId(request)

	let getItems = async (pageNumber: number, itemsPerPage: number) => {
		let baseItems = await db.entry.findMany({
			select: prismaEntryInListSelect,
			take: itemsPerPage,
			skip: itemsPerPage * pageNumber,
			where: {
				likedBy: {
					some: {
						id: userId,
					},
				},
				userId: {
					not: userId,
				},
			},
		})

		return await Promise.all(baseItems.map(computeEntryInListFields))
	}

	let paginated = await paginateLoader<EntryInList>({
		request,
		getItems,
		getTotal: () =>
			db.entry.count({
				where: {
					userId,
				},
			}),
	})

	let payload: UserLikesPageLoaderPayload = paginated

	return serialize(payload)
}
