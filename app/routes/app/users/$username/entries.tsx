import { LinksFunction, useLoaderData } from 'remix'
import { deserialize } from 'superjson'
import { stylesheet as entryCardStylesheet } from '~/features/entries/components/entry-card'
import EntryList from '~/features/entries/components/entry-list'
import { EntryInList } from '~/features/entries/types/entry-in-list'
import {
	UserEntriesLoaderPayload,
	userEntriesPageLoader,
} from '~/features/users/loaders/user-entries-page-loader.server'
import { UserEntriesPageData } from '~/features/users/types/page'
import entriesStylesheet from '~/styles/entries.css'
import { Paginated } from '~/utils/pagination.server'

export let links: LinksFunction = () => [
	entryCardStylesheet,
	{ rel: 'stylesheet', href: entriesStylesheet },
]

export let loader = userEntriesPageLoader

export default function UserEntriesRoute() {
	let { items, page, totalItems, itemsPerPage } =
		deserialize<UserEntriesLoaderPayload>(useLoaderData())

	return (
		<EntryList
			entries={items}
			page={page}
			total={totalItems}
			itemsPerPage={itemsPerPage}
		/>
	)
}
