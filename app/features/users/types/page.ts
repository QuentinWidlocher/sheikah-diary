import { EntryInList } from '~/features/entries/types/entry-in-list'

export type UserEntriesPageData = {
	entries: EntryInList[]
	page: number
	total: number
	itemsPerPage: number
}
