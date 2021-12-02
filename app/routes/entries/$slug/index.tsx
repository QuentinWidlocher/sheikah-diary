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
import { db } from '~/utils/db.server.'
import { deserialize, serialize } from 'superjson'
import { displayDateTime } from '~/utils/date.utils'
import entryStylesheet from '~/styles/entry.css'
import formsStylesheet from '~/styles/forms.css'
import SheikahLogo from '~/components/sheika-logo'
import HeartIcon from '~/components/heart-icon'
import {
  prismaSelectEntryInPage,
  EntryInPage,
} from '~/features/entries/types/entries'
import { FiEdit3, FiTrash } from 'react-icons/fi'
import EntryDeleteModal from '~/features/entries/components/entry-delete-modal'
import { useState } from 'react'
import { deleteAction } from '~/features/entries/api/delete.server'
import { pictures } from '~/utils/storage'
import { getUser } from '~/utils/session.server'
import { Prisma, User } from '@prisma/client'
import Comments from '~/features/entries/components/comments'
import CommentTextArea from '~/features/entries/components/comment-text-area'

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: entryStylesheet },
  { rel: 'stylesheet', href: formsStylesheet },
]

export let meta: MetaFunction = ({ data }) => {
  let {
    entry: { title = '' },
  } = deserialize<{ entry: EntryInPage }>(data)
  return {
    title: `${title} | Sheikah Diary`,
  }
}

export let loader: LoaderFunction = async ({ params, request }) => {
  let slug = z.string().parse(params?.slug)

  let entry = await db.entry.findFirst({
    select: prismaSelectEntryInPage,
    where: {
      slug,
    },
  })

  if (entry == null) {
    return redirect('/entries')
  }

  let result: EntryInPage = {
    ...entry,
    pictures: await Promise.all(
      entry.pictures.map(async (p) => ({
        file: (await pictures.getPublicUrl(p.file).publicURL) ?? '',
        preview:
          (await pictures.getPublicUrl(p.preview).publicURL) ?? 'undefined',
      })),
    ),
  }

  let user = await getUser(request, Prisma.validator<Prisma.UserInclude>()({
    likes: {
      include: {
        _count: {
          select: {

          }
        }
      },
      where: {
        slug: entry.slug
      }
    }
  }))

  return serialize({ entry: result, user })
}

export let action = deleteAction

export default function EntriesByIdPage() {
  let {
    entry: { id, userId, slug, title, content, createdAt, pictures, comments, _count: { likedBy: likes } },
    user,
  }: {
    entry: EntryInPage,
    user: User | null
  } = deserialize(useLoaderData())

  const [showDeleteModal, setShowDeleteModal] = useState(false)

  let transition = useTransition()

  return (
    <article>
      <div className="column">
        <section className="flex flex-col">
          <div className="flex justify-center space-x-5">
            <h1 className="font-bold text-center">{title}</h1>
          </div>
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
          {content ? (
            <fieldset className="mb-auto">
              <legend>Description</legend>
              <p>{content}</p>
            </fieldset>
          ) : null}
          {!user || user?.id != userId ? null : (
            <fieldset className="mt-3">
              <legend>Actions</legend>
              <nav className="mt-3 flex justify-center space-x-5">
                <Link
                  className="button flex"
                  to={'/entries/' + slug + '/update'}
                >
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
          )}
        </section>
      </div>
      <div className="column">
        <section>
          <fieldset>
            <legend>Hearts</legend>
            <div className="flex flex-col items-center w-full p-5">
              <HeartIcon className="text-danger-500 w-8 h-8" />
              <span>{likes}</span>
            </div>
          </fieldset>
        </section>
        <section>
          <fieldset className="w-full">
            <legend>Comments ({comments.length})</legend>
            {user ? <CommentTextArea slug={slug} /> : null}
            <Comments entry={{ comments, slug, id }} />
          </fieldset>
        </section>
      </div>
      <EntryDeleteModal
        entryId={id}
        transition={transition}
        show={showDeleteModal}
        onCancel={() => setShowDeleteModal(false)}
      />
    </article>
  )
}
