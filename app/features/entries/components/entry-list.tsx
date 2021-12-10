import { Link } from 'remix'
import { EntryInList } from '../types/entry-in-list'
import EntryCard from './entry-card'

type EntryListProps = {
  entries: EntryInList[]
  page: number
  total: number
  itemsPerPage: number
}

export default function EntryList({
  entries,
  page,
  total,
  itemsPerPage,
}: EntryListProps) {
  return (
    <div className="md:p-10 lg:p-20">
      <ul className="md:px-10 lg:px-20 flex flex-wrap">
        {entries.map((entry) => (
          <li
            className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-5"
            key={entry.slug}
          >
            <EntryCard entry={entry} />
          </li>
        ))}
      </ul>
      <nav>
        <div className="w-full flex justify-center space-x-5">
          {page - 1 > 0 ? (
            <Link prefetch="intent" className="button" to={'?p=' + (page - 1)}>
              Previous page
            </Link>
          ) : null}
          {page + 1 <= Math.ceil(total / itemsPerPage) ? (
            <Link prefetch="intent" className="button" to={'?p=' + (page + 1)}>
              Next page
            </Link>
          ) : null}
        </div>
        {total > itemsPerPage ? (
          <small className="block w-full text-center text-primary-500">
            Page {page} / {Math.ceil(total / itemsPerPage)}
          </small>
        ) : null}
      </nav>
    </div>
  )
}
