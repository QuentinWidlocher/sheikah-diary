import { User } from '@prisma/client'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'remix'
import SheikahLogo from '~/components/sheika-logo'
import EntryList from '../components/entry-list'
import { EntryInList } from '../types/entry-in-list'

interface EntryListPageProps {
	page: number
	totalItems: number
	itemsPerPage: number
	entries: EntryInList[]
	currentUser: User
}

export default function EntryListPage({
	page,
	totalItems,
	itemsPerPage,
	entries,
	currentUser,
}: EntryListPageProps) {
	if (totalItems > 0) {
		return (
			<EntryList
				entries={entries}
				page={page}
				total={totalItems}
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
