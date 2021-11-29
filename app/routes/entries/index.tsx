import { Entry } from '@prisma/client'
import {
  ErrorBoundaryComponent,
  Link,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from 'remix'
import { deserialize, serialize } from 'superjson'
import EntryCard from '~/features/entries/components/entry-card.browser'
import { EntryInList } from '~/features/entries/types/entries'
import { db } from '~/utils/db'
import entryCardStylesheet from '~/styles/entry-card.css'
import { deleteAction } from '~/features/entries/api/delete'
import { pictures } from '~/utils/storage'
import SheikahLogo from '~/components/sheika-logo'
import { FiPlus } from 'react-icons/fi'

const itemsPerPage = 10

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: entryCardStylesheet },
]

export let meta: MetaFunction = () => {
  return {
    title: 'Entries | Sheikah Diary',
  }
}

export let loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url)
  let page = url.searchParams.get('p')
  let pageNumber = page && Number(page) > 0 ? Number(page) - 1 : 0

  let total = await db.entry.count()

  let data = await db.entry.findMany({
    select: {
      title: true,
      slug: true,
      createdAt: true,
      pictures: true,
      _count: true,
    },
    take: itemsPerPage,
    skip: itemsPerPage * pageNumber,
    orderBy: {
      createdAt: 'desc',
    },
  })

  let entries: EntryInList[] = await Promise.all(
    data.map(async (entry) => ({
      ...entry,
      link: `/entries/${entry.slug}`,
      thumbnailUrl: entry.pictures?.[0]?.thumbnail
        ? (await pictures.getPublicUrl(entry.pictures?.[0]?.thumbnail)
            .publicURL) ?? undefined
        : undefined,
    })),
  )

  return serialize({ page: pageNumber + 1, total, entries })
}

export default function EntriesIndexPage() {
  let { page, total, entries } = deserialize<{
    page: number
    total: number
    entries: EntryInList[]
  }>(useLoaderData())

  if (total > 0) {
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
        <nav>
          <div className="w-full flex justify-center space-x-5">
            {page - 1 > 0 ? (
              <Link className="button" to={'?p=' + (page - 1)}>
                Previous page
              </Link>
            ) : null}
            {page + 1 <= total / itemsPerPage ? (
              <Link className="button" to={'?p=' + (page + 1)}>
                Next page
              </Link>
            ) : null}
          </div>

          <small className="block w-full text-center text-primary-500">
            Page {page} / {Math.ceil(total / itemsPerPage)}
          </small>
        </nav>
      </div>
    )
  } else {
    return (
      <div className="h-full w-full flex">
        <div className="m-auto flex flex-col text-primary-500">
          <SheikahLogo className="w-60 h-60 filter drop-shadow-primary" />
          <span className="font-bold text-2xl mx-auto text-shadow-primary">
            No entries yet
          </span>
          <Link to="/entries/new" className="button flex mx-auto mt-5">
            <FiPlus size="1.5rem" className="mr-3" />
            Add an entry
          </Link>
        </div>
      </div>
    )
  }
}
