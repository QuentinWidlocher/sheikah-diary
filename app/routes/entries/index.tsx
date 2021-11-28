import { Entry } from '@prisma/client'
import {
  ErrorBoundaryComponent,
  Link,
  LinksFunction,
  LoaderFunction,
  useLoaderData,
} from 'remix'
import { deserialize, serialize } from 'superjson'
import EntryCard from '~/features/entries/components/entry-card.browser'
import { EntryInList } from '~/features/entries/types/entries'
import { db } from '~/utils/db'
import entryCardStylesheet from '~/styles/entry-card.css'

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: entryCardStylesheet },
]

export let loader: LoaderFunction = async () => {
  let data = await db.entry.findMany({
    select: {
      title: true,
      slug: true,
      createdAt: true,
      pictures: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  let entries: EntryInList[] = data.map((entry) => ({
    ...entry,
    link: `/entries/${entry.slug}`,
    thumbnailUrl: entry.pictures?.[0]?.thumbnail
      ? `/pictures/${entry.pictures?.[0]?.thumbnail}`
      : undefined,
  }))

  return serialize(entries)
}

export default function EntriesIndexPage() {
  let entries = deserialize<EntryInList[]>(useLoaderData())

  return (
    <div className="md:p-10 lg:p-20">
      <ul className="md:px-10 lg:px-20 flex flex-wrap ">
        {entries.map((entry) => (
          <li
            className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-5"
            key={entry.link}
          >
            <Link to={entry.link} className="outline-none">
              <EntryCard entry={entry} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export let ErrorBoundary: ErrorBoundaryComponent = () => {
  return <span>erreur</span>
}
