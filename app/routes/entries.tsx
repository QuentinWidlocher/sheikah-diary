import { User } from '@prisma/client'
import { FiArrowLeft, FiPlus } from 'react-icons/fi'
import {
  Form,
  Link,
  LinksFunction,
  LoaderFunction,
  Outlet,
  useLoaderData,
  useMatches,
} from 'remix'
import entriesStylesheet from '~/styles/entries.css'
import { getUser } from '~/utils/session.server'

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: entriesStylesheet },
]

export let loader: LoaderFunction = async ({ request }) => getUser(request)

// We just display the pages for now, we use this file to link the stylesheet
export default function EntriesMainPage() {
  let user = useLoaderData<User | null>()
  let matches = useMatches()
  let currentRoute = matches[matches.length - 1].pathname

  return (
    <div className="entries-layout">
      <header>
        <div className="bg-picture"></div>
        <nav className="flex">
          {currentRoute != '/entries/' ? (
            <Link to="/entries" className="button flex mr-auto">
              <FiArrowLeft size="1.5rem" className="mr-3" />
              Back to the entries
            </Link>
          ) : null}
          {user ? (
            <Form className="ml-auto" action="/logout" method="post">
              <input
                type="hidden"
                name="redirectTo"
                readOnly
                value={currentRoute}
              />
              <button type="submit">{user.username} (Logout)</button>
            </Form>
          ) : (
            <Link
              className="button ml-auto"
              to={`/login?redirectTo=${currentRoute}`}
            >
              Login
            </Link>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
        <div className="bg-picture"></div>
      </main>
      <footer>
        <div className="bg-picture"></div>
        <nav className="flex">
          {!user ? null : (
            <Link to="/entries/new" className="button flex ml-auto">
              <FiPlus size="1.5rem" className="mr-3" />
              Add an entry
            </Link>
          )}
        </nav>
      </footer>
    </div>
  )
}
