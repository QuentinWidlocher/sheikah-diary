import { Entry } from '@prisma/client'
import {
  ErrorBoundaryComponent,
  Link,
  LoaderFunction,
  useLoaderData,
} from 'remix'
import EntryCard from '~/features/entries/components/entry-card.browser'
import { EntryInList } from '~/features/entries/types/entries'
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
  let entries = useLoaderData<EntryInList[]>().map((entry, i) => ({
    ...entry,
    previewUrl: i % 2 == 0 ? 'https://picsum.photos/500' : undefined,
    createdAt: new Date(entry.createdAt),
  }))

  return (
    <div className="m-20">
      <ul className="mx-5 md:mx-24 lg:mx-52 flex space-x-5">
        {entries.map((entry) => (
          <li className="w-1/3" key={entry.link}>
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
