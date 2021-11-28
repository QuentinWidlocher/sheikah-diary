import { Entry, Picture } from '@prisma/client'
import {
  Link,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
} from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db'
import { deserialize, serialize } from 'superjson'
import { displayDateTime } from '~/utils/date.utils'
import entryCardStylesheet from '~/styles/entry.css'
import SheikahLogo from '~/components/sheika-logo'

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: entryCardStylesheet },
]

export let meta: MetaFunction = ({ data }) => {
  let { title } = deserialize<SimpleEntry>(data)
  return {
    title: `${title} | Sheikah Diary`,
  }
}

type SimpleEntry = Pick<Entry, 'title' | 'content' | 'createdAt'> & {
  pictures: Picture[]
}

export let loader: LoaderFunction = async ({ params }) => {
  let slug = z.string().parse(params?.slug)

  let entry = await db.entry.findFirst({
    select: {
      title: true,
      content: true,
      createdAt: true,
      pictures: true,
    },
    where: {
      slug,
    },
  })

  if (entry == null) {
    return redirect('/entries')
  }

  return serialize(entry)
}

export default function EntriesByIdPage() {
  let { title, content, createdAt, pictures }: SimpleEntry = deserialize(
    useLoaderData(),
  )

  return (
    <article>
      <section className="flex flex-col">
        <h1 className="font-bold text-center">{title}</h1>
        {pictures?.[0] ? (
          <Link to={'/pictures/' + pictures[0].file} target="_blank">
            <img
              src={'/pictures/' + pictures[0].preview}
              alt=""
              className="mx-auto w-full h-full border border-primary-500 text-primary-500"
            />
          </Link>
        ) : (
          <SheikahLogo className="mx-auto w-full h-full border border-primary-500 text-primary-500" />
        )}
        <small className="text-center opacity-70">
          {displayDateTime(createdAt)}
        </small>
      </section>
      <section>
        <fieldset>
          <legend>Description</legend>
          <p>{content}</p>
        </fieldset>
      </section>
    </article>
  )
}
