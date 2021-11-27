import { Entry } from '@prisma/client'
import { LinksFunction, LoaderFunction, useLoaderData } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db'
import { deserialize, serialize } from 'superjson'
import { displayDateTime } from '~/utils/date.utils'
import EntryCard from '~/features/entries/components/entry-card.browser'
import SheikahLogo from '~/components/sheika-logo'
import entryCardStylesheet from '~/styles/entry.css'

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: entryCardStylesheet },
]

type SimpleEntry = Pick<Entry, 'title' | 'content' | 'createdAt' | 'pictures'>

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
        <SheikahLogo className="mx-auto w-full h-full border border-primary-500 text-primary-500" />
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
