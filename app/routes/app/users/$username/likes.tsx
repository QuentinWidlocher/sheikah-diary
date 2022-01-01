import { LinksFunction, useLoaderData } from 'remix'
import { deserialize } from 'superjson'
import { stylesheet as entryCardStylesheet } from '~/features/entries/components/entry-card'
import EntryList from '~/features/entries/components/entry-list'
import {
	userLikesPageLoader,
	UserLikesPageLoaderPayload,
} from '~/features/users/loaders/user-likes-page-loader.server'
import entriesStylesheet from '~/styles/entries.css'

export let links: LinksFunction = () => [
	entryCardStylesheet,
	{ rel: 'stylesheet', href: entriesStylesheet },
]

export let loader = userLikesPageLoader

export default function UserLikesRoute() {
	let { totalItems, itemsPerPage, page, items } =
		deserialize<UserLikesPageLoaderPayload>(useLoaderData())

	return (
		<EntryList
			entries={items}
			total={totalItems}
			page={page}
			itemsPerPage={itemsPerPage}
		/>
	)
}
