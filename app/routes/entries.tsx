import { Link } from 'react-router-dom'
import { LinksFunction, Outlet } from 'remix'
import entriesStylesheet from '~/styles/entries.css'

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: entriesStylesheet },
]

// We just display the pages for now, we use this file to link the stylesheet
export default function EntriesMainPage() {
  return (
    <div className="entries-layout">
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Link to="/entries/new" className="button float-right">
          Add an entry
        </Link>
      </footer>
    </div>
  )
}
