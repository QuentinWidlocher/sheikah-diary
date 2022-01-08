import { Entry, Picture, Prisma, User, Comment } from '@prisma/client'
import { getBase64FromUrl } from '~/utils/file.utils.server'
import { getImgProps } from '~/utils/image.utils'
import { cloudinary } from '~/utils/storage.server'

export type EntryInPageFromDb = Pick<
	Entry,
	'id' | 'slug' | 'title' | 'content' | 'createdAt'
> & {
	user: Pick<User, 'id' | 'username'>
	pictures: Pick<Picture, 'file'>[]
	comments: (Pick<Comment, 'id' | 'body' | 'createdAt'> & { user: User })[]
	likedBy: { id: User['id'] }[]
	_count: { likedBy: number }
}

export type EntryInPage = Pick<
	Entry,
	'id' | 'slug' | 'title' | 'content' | 'createdAt'
> & {
	user: Pick<User, 'id' | 'username'>
	pictures: {
		file: string
		previewImgProps: ReturnType<typeof getImgProps>
		placeholder: string
	}[]
	comments: (Pick<Comment, 'id' | 'body' | 'createdAt'> & { user: User })[]
	likedBy: { id: User['id'] }[]
	_count: { likedBy: number }
}

export function getPrismaSelectEntryInPage() {
	return Prisma.validator<Prisma.EntrySelect>()({
		id: true,
		slug: true,
		title: true,
		content: true,
		createdAt: true,
		user: {
			select: {
				id: true,
				username: true,
			},
		},
		pictures: {
			select: {
				file: true,
			},
		},
		comments: {
			select: {
				id: true,
				body: true,
				user: true,
				createdAt: true,
			},
			orderBy: {
				createdAt: 'desc' as Prisma.SortOrder,
			},
		},
		likedBy: {
			select: {
				id: true,
			},
		},
		_count: {
			select: {
				likedBy: true,
			},
		},
	})
}

export async function computeEntryInPageFields(
	entry: EntryInPageFromDb,
): Promise<EntryInPage> {
	return {
		...entry,
		pictures: await Promise.all(
			entry.pictures.map(async p => {
				let placeholderUrl = cloudinary.url(p.file, {
					width: 50,
					height: 50,
					crop: 'limit',
					effect: 'blur:800',
				})

				let placeholderB64 = await getBase64FromUrl(placeholderUrl)

				return {
					file: cloudinary.url(p.file) ?? '',
					previewImgProps: getImgProps(p.file, {
						widths: [280, 560, 672, 710, 1100],
						sizes: ['(max-width:710px) 100vw', '1100px'],
					}),
					placeholder: placeholderB64,
				}
			}),
		),
	}
}
