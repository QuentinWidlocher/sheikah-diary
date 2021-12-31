import { useState } from 'react'
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
import { deleteAction } from '~/features/entries/api/delete.server'
import CommentTextArea from '~/features/entries/components/comment-text-area'
import Comments from '~/features/entries/components/comments'
import EntryDeleteModal from '~/features/entries/components/entry-delete-modal'
import HeartButton from '~/features/entries/components/heart-button'
import ImageDisplay from '~/features/entries/components/image-display'
import {
	EntryInPage,
	getPrismaSelectEntryInPage,
} from '~/features/entries/types/entry-in-page'
import useCurrentUser from '~/hooks/useCurrentUser'
import entryStylesheet from '~/styles/entry.css'
import formsStylesheet from '~/styles/forms.css'
import { displayDateTime } from '~/utils/date.utils'
import { db } from '~/utils/db.server'
import { cloudinary } from '~/utils/storage.server'

export let links: LinksFunction = () => [
	{ rel: 'stylesheet', href: entryStylesheet },
	{ rel: 'stylesheet', href: formsStylesheet },
]

export let meta: MetaFunction = ({ data }) => {
	let entry = deserialize<EntryInPage>(data)

	return {
		title: `${entry.title} | Sheikah Diary`,
	}
}

// The like action does a put and handle the ui itself, no need to reload
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
		return redirect('/app/entries')
	}

	let result: EntryInPage = {
		...entry,
		pictures: entry.pictures.map(p => ({
			file: cloudinary.url(p.file) ?? '',
			preview:
				cloudinary.url(p.file, { width: 1000, height: 1000, crop: 'limit' }) ?? '',
		})),
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
		user,
		pictures,
		comments,
		likedBy,
		_count: { likedBy: likedByCount },
	}: EntryInPage = deserialize(useLoaderData())

	let currentUser = useCurrentUser()

	const [showDeleteModal, setShowDeleteModal] = useState(false)

	// Original value of the like the user gave. Useful to compute numbers of like later
	const userHasLiked = currentUser
		? likedBy.some(l => l.id == currentUser?.id)
		: false

	// number of likes from the db, minus the user like
	const likes = userHasLiked ? likedByCount - 1 || 0 : likedByCount

	let transition = useTransition()

	return (
		<article>
			{pictures.map(pic => (
				<link rel="preload" as="image" href={pic.file} key={pic.file} />
			))}
			<div className="column">
				<section className="flex flex-col">
					<div className="flex justify-center space-x-1 mb-3">
						<h1 className="font-bold">{title}</h1>
						<h2>
							by{' '}
							<Link
								className="underline underline-offset-2 hover:underline-offset-4"
								to={`/app/users/${user.username}`}>
								{user.username}
							</Link>
						</h2>
					</div>
					<ImageDisplay pictures={pictures} />
					<small className="text-center opacity-70">
						{displayDateTime(createdAt)}
					</small>
				</section>
				{!content && currentUser?.id != user.id ? null : (
					<section className="flex flex-col mb-5">
						{content ? (
							<fieldset className="mt-3 pb-10 mb-auto">
								<legend>Description</legend>
								<p>{content}</p>
							</fieldset>
						) : null}
						{!currentUser || currentUser?.id != user.id ? null : (
							<fieldset className="mt-3">
								<legend>Actions</legend>
								<nav className="mt-3 flex justify-center space-x-5">
									<Link
										className="sheika button flex"
										to={'/app/entries/' + slug + '/update'}>
										<FiEdit3 size="1.5rem" className="mr-3" />
										Update
									</Link>
									<button
										className="sheika button danger flex"
										onClick={() => setShowDeleteModal(true)}>
										<FiTrash size="1.5rem" className="mr-3" />
										Delete
									</button>
								</nav>
							</fieldset>
						)}
					</section>
				)}
			</div>
			<div className="column">
				<section>
					<fieldset>
						<legend>Hearts</legend>
						<div className="flex justify-center w-full p-5">
							<HeartButton
								readonly={!currentUser}
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
						{currentUser ? <CommentTextArea slug={slug} /> : null}
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
