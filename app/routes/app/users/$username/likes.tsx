import { LinksFunction, LoaderFunction, useLoaderData } from 'remix'
import { deserialize, serialize } from 'superjson'
import EntryList from '~/features/entries/components/entry-list'
import {
	computeEntryInListFields,
	EntryInList,
	prismaEntryInListSelect,
} from '~/features/entries/types/entry-in-list'
import { db } from '~/utils/db.server'
import { Paginated, paginateLoader } from '~/utils/pagination.server'
import { requireUserId } from '~/utils/session.server'
import entriesStylesheet from '~/styles/entries.css'
import { stylesheet as entryCardStylesheet } from '~/features/entries/components/entry-card'

export let links: LinksFunction = () => [
	entryCardStylesheet,
	{ rel: 'stylesheet', href: entriesStylesheet },
]

export let loader: LoaderFunction = async ({ request, params }) => {
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

	return serialize(paginated)
}

export default function UserLikedPage() {
	let { totalItems, itemsPerPage, page, items } = deserialize<
		Paginated<EntryInList>
	>(useLoaderData())

	return (
		<EntryList
			entries={items}
			total={totalItems}
			page={page}
			itemsPerPage={itemsPerPage}
		/>
	)
}
