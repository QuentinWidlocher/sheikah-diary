import { User } from '@prisma/client'
import { useEffect, useState } from 'react'
import { FiEdit3, FiTrash } from 'react-icons/fi'
import {
  Link,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
  ShouldReloadFunction,
  useLoaderData,
  useTransition,
} from 'remix'
import { deserialize, serialize } from 'superjson'
import { z } from 'zod'
import HeartIcon from '~/components/heart-icon'
import SheikahLogo from '~/components/sheika-logo'
import { deleteAction } from '~/features/entries/api/delete.server'
import CommentTextArea from '~/features/entries/components/comment-text-area'
import Comments from '~/features/entries/components/comments'
import EntryDeleteModal from '~/features/entries/components/entry-delete-modal'
import HeartButton from '~/features/entries/components/heart-button'
import {
  EntryInPage,
  getPrismaSelectEntryInPage,
} from '~/features/entries/types/entries'
import entryStylesheet from '~/styles/entry.css'
import formsStylesheet from '~/styles/forms.css'
import { displayDateTime } from '~/utils/date.utils'
import { db } from '~/utils/db.server.'
import { getUser } from '~/utils/session.server'
import { pictures } from '~/utils/storage'

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

export let unstable_shouldReload: ShouldReloadFunction = ({ submission }) =>
  submission?.method != 'PUT'

export let loader: LoaderFunction = async ({ params, request }) => {
  let slug = z.string().parse(params?.slug)

  let entry = await db.entry.findFirst({
    select: getPrismaSelectEntryInPage(),
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

  return serialize({ entry: result, user: await getUser(request) })
}

export let action = deleteAction

export default function EntriesByIdPage() {
  let {
    entry: {
      id,
      userId,
      slug,
      title,
      content,
      createdAt,
      pictures,
      comments,
      likedBy,
      _count: { likedBy: likedByCount },
    },
    user,
  }: {
    entry: EntryInPage
    user: User | null
  } = deserialize(useLoaderData())

  const [showDeleteModal, setShowDeleteModal] = useState(false)

  // Original value of the like the user gave. Useful to compute numbers of like later
  const userHasLiked = user ? likedBy.some((l) => l.id == user?.id) : false

  // number of likes from the db, minus the user like
  const likes = userHasLiked ? likedByCount - 1 || 0 : likedByCount

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
            <div className="flex justify-center w-full p-5">
              <HeartButton
                slug={slug}
                originalLikes={likes}
                originalUserHasLiked={userHasLiked}
              />
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
