import { Link, LinksFunction, Outlet } from 'remix'
import { FiArrowLeft, FiPlus } from 'react-icons/fi'
import entriesStylesheet from '~/styles/entries.css'
import { deleteAction } from '~/features/entries/api/delete'

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: entriesStylesheet },
]

// We just display the pages for now, we use this file to link the stylesheet
export default function EntriesMainPage() {
  return (
    <div className="entries-layout">
      <header>
        <div className="bg-picture"></div>
        <nav className="flex">
          <Link to="/entries" className="button flex mr-auto">
            <FiArrowLeft size="1.5rem" className="mr-3" />
            Back to the entries
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
        <div className="bg-picture"></div>
      </main>
      <footer>
        <div className="bg-picture"></div>
        <nav className="flex">
          <Link to="/entries/new" className="button flex ml-auto">
            <FiPlus size="1.5rem" className="mr-3" />
            Add an entry
          </Link>
        </nav>
      </footer>
    </div>
  )
}
