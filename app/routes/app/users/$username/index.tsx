import { User } from '@prisma/client'
import {
  Form,
  LinksFunction,
  LoaderFunction,
  redirect,
  useLoaderData,
} from 'remix'
import { deserialize, serialize } from 'superjson'
import { stylesheet as entryCardStylesheet } from '~/features/entries/components/entry-card'
import EntryList from '~/features/entries/components/entry-list'
import {
  computeEntryInListFields,
  EntryInList,
  EntryInListFromDb,
  prismaEntryInListSelect,
} from '~/features/entries/types/entry-in-list'
import entriesStylesheet from '~/styles/entries.css'
import { db } from '~/utils/db.server.'
import { getUser } from '~/utils/session.server'

const itemsPerPage = 20

export let links: LinksFunction = () => [
  entryCardStylesheet,
  { rel: 'stylesheet', href: entriesStylesheet },
]

type UserPageDataFromDb = Pick<User, 'username'> & {
  entries: EntryInListFromDb[]
  _count: { entries: number }
}

type UserPageData = Pick<User, 'username'> & {
  entries: EntryInList[]
  page: number
  total: number
  currentUser: User | null
}

export let loader: LoaderFunction = async ({ params, request }) => {
  if (!params.username) {
    return redirect('/app/entries')
  }

  let url = new URL(request.url)
  let page = url.searchParams.get('p')
  let pageNumber = page && Number(page) > 0 ? Number(page) - 1 : 0

  let foundUserFromDb = await db.user.findFirst({
    select: {
      id: true,
      username: true,
    },
    where: {
      username: params.username,
    },
  })

  console.log('🚀 ~ file: index.tsx ~ line 68 ~ letloader:LoaderFunction= ~ foundUserFromDb', foundUserFromDb)

  if (!foundUserFromDb) {
    return redirect('/app/entries')
  }

  let entries = await db.entry.findMany({
    select: {
      ...prismaEntryInListSelect
    },
    take: itemsPerPage,
    skip: itemsPerPage * pageNumber,
    where: {
      userId: foundUserFromDb.id
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  let total = await db.entry.count({
    where: {
      userId: foundUserFromDb.id
    }
  })

  let foundUser: UserPageData = {
    ...foundUserFromDb,
    entries: await Promise.all(
      entries.map(await computeEntryInListFields),
    ),
    page: pageNumber + 1,
    total,
    currentUser: await getUser(request),
  }

  return serialize(foundUser)
}

export default function UserPage() {
  let { username, entries, page, total, currentUser } = deserialize<
    UserPageData
  >(useLoaderData())

  return (
    <article className="flex flex-col w-full">
      <div className="mt-10 flex mx-auto items-center">
        <h1 className="text-xl filter drop-shadow-primary text-primary-500">
          Posts by <strong>{username}</strong>
        </h1>
        {currentUser?.username == username ? (
          <Form className="ml-10" action="/logout" method="post">
            <input
              type="hidden"
              name="redirectTo"
              readOnly
              value="/app/entries"
            />
            <button className="danger" type="submit">
              Logout
            </button>
          </Form>
        ) : null}
      </div>

      <EntryList
        entries={entries}
        page={page}
        total={total}
        itemsPerPage={itemsPerPage}
      />
    </article>
  )
}
