import { Form, LinksFunction, useLoaderData } from 'remix'
import { deserialize } from 'superjson'
import { stylesheet as entryCardStylesheet } from '~/features/entries/components/entry-card'
import EntryList from '~/features/entries/components/entry-list'
import { userEntriesPageLoader } from '~/features/users/api/entries-page.server'
import { UserEntriesPageData } from '~/features/users/types/page'
import entriesStylesheet from '~/styles/entries.css'

export let links: LinksFunction = () => [
	entryCardStylesheet,
	{ rel: 'stylesheet', href: entriesStylesheet },
]

export let loader = userEntriesPageLoader

export default function UserPage() {
	let { entries, page, total, itemsPerPage } = deserialize<UserEntriesPageData>(
		useLoaderData(),
	)

	return (
		<EntryList
			entries={entries}
			page={page}
			total={total}
			itemsPerPage={itemsPerPage}
		/>
	)
}
