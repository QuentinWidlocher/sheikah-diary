import { LinksFunction, useLoaderData } from 'remix'
import { deserialize } from 'superjson'
import { stylesheet as entryCardStylesheet } from '~/features/entries/components/entry-card'
import EntryList from '~/features/entries/components/entry-list'
import { EntryInList } from '~/features/entries/types/entry-in-list'
import { userEntriesPageLoader } from '~/features/users/api/entries-page.server'
import { UserEntriesPageData } from '~/features/users/types/page'
import entriesStylesheet from '~/styles/entries.css'
import { Paginated } from '~/utils/pagination.server'

export let links: LinksFunction = () => [
	entryCardStylesheet,
	{ rel: 'stylesheet', href: entriesStylesheet },
]

export let loader = userEntriesPageLoader

export default function UserPage() {
	let { items, page, totalItems, itemsPerPage } = deserialize<
		Paginated<EntryInList>
	>(useLoaderData())

	return (
		<EntryList
			entries={items}
			page={page}
			total={totalItems}
			itemsPerPage={itemsPerPage}
		/>
	)
}
