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
import {
  prismaSelectSimpleEntry,
  SimpleEntry,
} from '~/features/entries/types/entries'
import { FiEdit3 } from 'react-icons/fi'

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: entryCardStylesheet },
]

export let meta: MetaFunction = ({ data }) => {
  let { title } = deserialize<SimpleEntry>(data)
  return {
    title: `${title} | Sheikah Diary`,
  }
}

export let loader: LoaderFunction = async ({ params }) => {
  let slug = z.string().parse(params?.slug)

  let entry = await db.entry.findFirst({
    select: prismaSelectSimpleEntry,
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
  let { slug, title, content, createdAt, pictures }: SimpleEntry = deserialize(
    useLoaderData(),
  )

  return (
    <article>
      <section className="flex flex-col">
        <h1 className="font-bold text-center">{title}</h1>
        {pictures?.[0] ? (
          <a href={pictures[0].file} target="_blank">
            <img
              src={pictures[0].preview}
              alt=""
              className="mx-auto w-full h-full border border-primary-500 text-primary-500"
            />
          </a>
        ) : (
          <SheikahLogo className="mx-auto w-full h-full border border-primary-500 text-primary-500" />
        )}
        <small className="text-center opacity-70">
          {displayDateTime(createdAt)}
        </small>
      </section>
      <section className="flex flex-col flex-1 pb-5">
        <fieldset>
          <legend>Description</legend>
          <p>{content}</p>
        </fieldset>
        <fieldset className="mt-auto">
          <legend>Actions</legend>
          <nav className="mt-3 flex justify-center">
            <Link className="button flex" to={'/entries/update/' + slug}>
              <FiEdit3 size="1.5rem" className="mr-3" />
              Update
            </Link>
          </nav>
        </fieldset>
      </section>
    </article>
  )
}
