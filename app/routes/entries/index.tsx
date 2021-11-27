import { Entry } from '@prisma/client'
import {
  ErrorBoundaryComponent,
  Link,
  LoaderFunction,
  useLoaderData,
} from 'remix'
import { deserialize, serialize } from 'superjson'
import EntryCard from '~/features/entries/components/entry-card.browser'
import { EntryInList } from '~/features/entries/types/entries'
import { db } from '~/utils/db'

export let loader: LoaderFunction = async () => {
  let data = await db.entry.findMany({
    select: {
      title: true,
      slug: true,
      createdAt: true,
    },
    take: 10,
    orderBy: {
      createdAt: 'asc',
    },
  })

  let entries = data.map((entry) => ({
    ...entry,
    link: `/entries/${entry.slug}`,
  }))

  return serialize(entries)
}

export default function EntriesIndexPage() {
  let entries = deserialize<EntryInList[]>(useLoaderData()).map((entry, i) => ({
    ...entry,
    previewUrl: i % 2 == 0 ? 'https://picsum.photos/1280/720' : undefined,
  }))

  return (
    <div className="m-5 md:m-10 lg:m-20">
      <ul className="mx-5 md:mx-10 lg:mx-20 flex flex-wrap space-y-10 md:space-y-0 md:space-x-10">
        {entries.map((entry) => (
          <li className="w-full md:w-1/3 lg:w-1/5" key={entry.link}>
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
