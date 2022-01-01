import {
	LinksFunction,
	MetaFunction,
	ShouldReloadFunction,
	useLoaderData,
	useTransition,
} from 'remix'
import { deserialize } from 'superjson'
import { deleteAction } from '~/features/entries/actions/delete-entry.server'
import { entryLoader } from '~/features/entries/loaders/entry-page-loader.server'
import EntriesByIdPage from '~/features/entries/pages/entry-page'
import { EntryInPage } from '~/features/entries/types/entry-in-page'
import useCurrentUser from '~/hooks/useCurrentUser'
import entryStylesheet from '~/styles/entry.css'
import formsStylesheet from '~/styles/forms.css'

export let links: LinksFunction = () => [
	{ rel: 'stylesheet', href: entryStylesheet },
	{ rel: 'stylesheet', href: formsStylesheet },
]

export let meta: MetaFunction = ({ data }) => {
	let entry = deserialize<EntryInPage>(data)

	return {
		title: `${entry.title} | Sheikah Diary`,
	}
}

// The like action does a put and handle the ui itself, no need to reload
export let unstable_shouldReload: ShouldReloadFunction = ({ submission }) =>
	submission?.method != 'PUT'

export let loader = entryLoader

export let action = deleteAction

export default function EntriesByIdRoute() {
	let entry: EntryInPage = deserialize(useLoaderData())
	let currentUser = useCurrentUser()
	let transition = useTransition()

	return (
		<EntriesByIdPage
			entry={entry}
			currentUser={currentUser}
			transition={transition}
		/>
	)
}
