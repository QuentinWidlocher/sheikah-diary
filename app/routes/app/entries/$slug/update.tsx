import { LinksFunction, useLoaderData, useTransition } from 'remix'
import { deserialize } from 'superjson'
import { updateAction } from '~/features/entries/actions/create-or-update.server'
import {
	entryUpdateLoader,
	EntryUpdateLoaderPayload,
} from '~/features/entries/loaders/entry-update-loader.server'
import EntryUpdatePage from '~/features/entries/pages/entry-update-page'
import formStylesheet from '~/styles/forms.css'

export let links: LinksFunction = () => [
	{ rel: 'stylesheet', href: formStylesheet },
]

export let loader = entryUpdateLoader

export let action = updateAction

export default function EntryUpdateRoute() {
	let defaultValues = deserialize<EntryUpdateLoaderPayload>(useLoaderData())
	let transition = useTransition()

	return (
		<EntryUpdatePage transition={transition} defaultValues={defaultValues} />
	)
}
