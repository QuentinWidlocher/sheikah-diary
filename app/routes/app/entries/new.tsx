import {
	LinksFunction,
	MetaFunction,
	useActionData,
	useTransition,
} from 'remix'
import {
	createAction,
	FormError,
} from '~/features/entries/actions/create-or-update.server'
import EntryForm from '~/features/entries/components/entry-form'
import formStylesheet from '~/styles/forms.css'

export let links: LinksFunction = () => [
	{ rel: 'stylesheet', href: formStylesheet },
]

export let meta: MetaFunction = () => {
	return {
		title: 'New Entry | Sheikah Diary',
	}
}

export let action = createAction

export default function NewEntryRoute() {
	let errors = useActionData<FormError>()
	let transition = useTransition()

	return (
		<EntryForm
			errors={errors}
			transition={transition}
			submitLabel={{ default: 'Create entry', sending: 'Creating entry' }}
			action="/app/entries/new"
		/>
	)
}
