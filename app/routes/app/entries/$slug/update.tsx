import {
	Link,
	LinksFunction,
	LoaderFunction,
	redirect,
	useLoaderData,
	useTransition,
} from 'remix'
import { deserialize, serialize } from 'superjson'
import { z } from 'zod'
import { updateAction } from '~/features/entries/api/update.server'
import EntryForm from '~/features/entries/components/entry-form'
import {
	EntryInUpdate,
	getPrismaSelectEntryInUpdate,
} from '~/features/entries/types/entry-in-update'
import formStylesheet from '~/styles/forms.css'
import { db } from '~/utils/db.server'

export let links: LinksFunction = () => [
	{ rel: 'stylesheet', href: formStylesheet },
]

export let loader: LoaderFunction = async ({ params }) => {
	let slug = z.string().parse(params?.slug)

	let entry: EntryInUpdate | null = await db.entry.findFirst({
		select: getPrismaSelectEntryInUpdate(),
		where: {
			slug,
		},
	})

	if (!entry) {
		return redirect('/app/entries')
	}

	return serialize(entry)
}

export let action = updateAction

export default function EntryUpdateBySlug() {
	let defaultValues = deserialize<EntryInUpdate>(useLoaderData())
	let transition = useTransition()

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
