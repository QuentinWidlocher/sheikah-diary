import { LinksFunction, Outlet } from 'remix'
import entriesStylesheet from '~/styles/entries.css'

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: entriesStylesheet },
]

// We just display the pages for now, we use this file to link the stylesheet
export default function EntriesMainPage() {
  return <Outlet />
}
