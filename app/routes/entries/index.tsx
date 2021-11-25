import { Entry } from '@prisma/client'
import {
  ErrorBoundaryComponent,
  Link,
  LoaderFunction,
  useLoaderData,
} from 'remix'
import EntryCard from '~/features/entries/components/entry-card.browser'
import { EntryInList } from '~/features/entries/types/entries'
import { displayDateTime } from '~/utils/date.utils'
import { db } from '~/utils/db'

export let loader: LoaderFunction = async (): Promise<EntryInList[]> => {
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

  return data.map((entry) => ({
    ...entry,
    link: `/entries/${entry.slug}`,
  }))
}

export default function EntriesIndexPage() {
  let entries = useLoaderData<EntryInList[]>().map((entry) => ({
    ...entry,
    createdAt: new Date(entry.createdAt),
  }))

  return (
    <div className="m-20">
      <ul className="mx-52 flex">
        {entries.map((entry) => (
          <li className="w-1/3" key={entry.link}>
            <Link to={entry.link}>
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
