import { Transition } from '@remix-run/react/transition'
import { Link } from 'remix'
import EntryForm from '../components/entry-form'
import { EntryInUpdate } from '../types/entry-in-update'

interface EntryUpdatePageProps {
	transition: Transition
	defaultValues: EntryInUpdate
}

export default function EntryUpdatePage({
	transition,
	defaultValues,
}: EntryUpdatePageProps) {
	return (
		<EntryForm
			transition={transition}
			submitLabel={{ default: 'Update entry', sending: 'Updating entry' }}
			defaultValues={defaultValues}
			action={'/app/entries/' + defaultValues.slug + '/update'}
			ButtonsSlot={() => (
				<Link
					className="sheika button mr-3"
					to={'/app/entries/' + defaultValues.slug}>
					Cancel
				</Link>
			)}
		/>
	)
}
