import { User } from '@prisma/client'
import { FiPlus } from 'react-icons/fi'
import {
	Link,
	LinksFunction,
	LoaderFunction,
	MetaFunction,
	useLoaderData,
} from 'remix'
import { deserialize, serialize } from 'superjson'
import SheikahLogo from '~/components/sheika-logo'
import { stylesheet as entryCardStylesheet } from '~/features/entries/components/entry-card'
import EntryList from '~/features/entries/components/entry-list'
import {
	computeEntryInListFields,
	EntryInList,
	EntryInListFromDb,
	prismaEntryInListSelect,
} from '~/features/entries/types/entry-in-list'
import useCurrentUser from '~/hooks/useCurrentUser'
import { db } from '~/utils/db.server'
import { getUser } from '~/utils/session.server'

const itemsPerPage = 20

export let links: LinksFunction = () => [entryCardStylesheet]

export let meta: MetaFunction = () => {
	return {
		title: 'Entries | Sheikah Diary',
	}
}

export let loader: LoaderFunction = async ({ request }) => {
	let url = new URL(request.url)
	let page = url.searchParams.get('p')
	let pageNumber = page && Number(page) > 0 ? Number(page) - 1 : 0

	let total = await db.entry.count()

	let data: EntryInListFromDb[] = await db.entry.findMany({
		select: prismaEntryInListSelect,
		take: itemsPerPage,
		skip: itemsPerPage * pageNumber,
		orderBy: {
			createdAt: 'desc',
		},
	})

	let entries: EntryInList[] = await Promise.all(
		data.map(await computeEntryInListFields),
	)

	return serialize({
		page: pageNumber + 1,
		total,
		entries,
	})
}

export default function EntriesIndexPage() {
	let { page, total, entries } = deserialize<{
		page: number
		total: number
		entries: EntryInList[]
	}>(useLoaderData())

	let currentUser = useCurrentUser()

	if (total > 0) {
		return (
			<EntryList
				entries={entries}
				page={page}
				total={total}
				itemsPerPage={itemsPerPage}
			/>
		)
	} else {
		return (
			<div className="h-full w-full flex">
				<div className="m-auto flex flex-col text-primary-500">
					<SheikahLogo className="w-60 h-60 filter drop-shadow-primary" />
					<span className="font-bold text-2xl mx-auto text-shadow-primary">
						No entries yet
					</span>
					{!currentUser ? null : (
						<Link to="/app/entries/new" className="sheika button flex mx-auto mt-5">
							<FiPlus size="1.5rem" className="mr-3" />
							Add an entry
						</Link>
					)}
				</div>
			</div>
		)
	}
}
