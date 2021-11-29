import { Entry, Picture } from '@prisma/client'
import {
  Link,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
  useTransition,
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
import { FiEdit3, FiTrash } from 'react-icons/fi'
import EntryDeleteModal from '~/features/entries/components/entry-delete-modal'
import { useState } from 'react'
import { deleteAction } from '~/features/entries/api/delete'
import { pictures } from '~/utils/storage'

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
    select: { ...prismaSelectSimpleEntry, id: true },
    where: {
      slug,
    },
  })

  if (entry == null) {
    return redirect('/entries')
  }

  let result: SimpleEntry & { id: string } = {
    ...entry,
    pictures: await Promise.all(
      entry.pictures.map(async (p) => ({
        file: (await pictures.getPublicUrl(p.file).publicURL) ?? '',
        preview:
          (await pictures.getPublicUrl(p.preview).publicURL) ?? 'undefined',
      })),
    ),
  }

  return serialize(result)
}

export let action = deleteAction

export default function EntriesByIdPage() {
  let {
    id,
    slug,
    title,
    content,
    createdAt,
    pictures,
  }: SimpleEntry & { id: string } = deserialize(useLoaderData())

  const [showDeleteModal, setShowDeleteModal] = useState(false)

  let transition = useTransition()

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
          <nav className="mt-3 flex justify-center space-x-5">
            <Link className="button flex" to={'/entries/update/' + slug}>
              <FiEdit3 size="1.5rem" className="mr-3" />
              Update
            </Link>
            <button
              className="danger flex"
              onClick={() => setShowDeleteModal(true)}
            >
              <FiTrash size="1.5rem" className="mr-3" />
              Delete
            </button>
          </nav>
        </fieldset>
      </section>
      <EntryDeleteModal
        entryId={id}
        transition={transition}
        show={showDeleteModal}
        onCancel={() => setShowDeleteModal(false)}
      />
    </article>
  )
}
