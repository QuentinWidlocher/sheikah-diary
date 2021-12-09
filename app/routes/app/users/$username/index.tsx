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
  computePictureLink,
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

  let foundUserFromDb: UserPageDataFromDb | null = await db.user.findFirst({
    select: {
      username: true,
      entries: {
        select: prismaEntryInListSelect,
        take: itemsPerPage,
        skip: itemsPerPage * pageNumber,
      },
      _count: {
        select: {
          entries: true,
        },
      },
    },
    where: {
      username: params.username,
    },
  })

  if (!foundUserFromDb) {
    return redirect('/app/entries')
  }

  let foundUser: UserPageData = {
    ...foundUserFromDb,
    entries: await Promise.all(
      foundUserFromDb.entries.map(await computePictureLink),
    ),
    page: pageNumber + 1,
    total: foundUserFromDb._count.entries,
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
