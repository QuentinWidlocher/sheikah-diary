import { LinksFunction, MetaFunction, useLoaderData } from 'remix'
import { deserialize } from 'superjson'
import { stylesheet as entryCardStylesheet } from '~/features/entries/components/entry-card'
import {
	entryListLoader,
	EntryListLoaderPayload,
} from '~/features/entries/loaders/entry-list-loader.server'
import EntryListPage from '~/features/entries/pages/entry-list-page'
import useCurrentUser from '~/hooks/useCurrentUser'

export let links: LinksFunction = () => [entryCardStylesheet]

export let meta: MetaFunction = () => {
	return {
		title: 'Entries | Sheikah Diary',
	}
}

export let loader = entryListLoader

export default function EntryListRoute() {
	let { page, totalItems, items, itemsPerPage } =
		deserialize<EntryListLoaderPayload>(useLoaderData())

	let currentUser = useCurrentUser()

	return (
		<EntryListPage
			page={page}
			totalItems={totalItems}
			entries={items}
			itemsPerPage={itemsPerPage}
			currentUser={currentUser}
		/>
	)
}
