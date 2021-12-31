import { Entry, Picture, Prisma, User } from '@prisma/client'
import { getBase64FromUrl } from '~/utils/file.utils.server'
import { cloudinary } from '~/utils/storage.server'

export type EntryInList = Pick<Entry, 'title' | 'slug'> & {
	thumbnailUrl?: string
	placeholderUrl?: string
	createdBy: string
}

export type EntryInListFromDb = Pick<Entry, 'slug' | 'title' | 'slug'> & {
	pictures: Pick<Picture, 'file'>[]
	user: Pick<User, 'username'>
}

export const prismaEntryInListSelect = Prisma.validator<Prisma.EntrySelect>()({
	title: true,
	slug: true,
	pictures: {
		select: {
			file: true,
		},
	},
	user: {
		select: {
			username: true,
		},
	},
})

export async function computeEntryInListFields(
	entry: EntryInListFromDb,
): Promise<EntryInList> {
	let placeholderB64: string | undefined

	if (entry.pictures?.[0]?.file) {
		let placeholderUrl = cloudinary.url(entry.pictures?.[0].file, {
			width: 50,
			height: 50,
			effect: 'blur:800',
		})

		placeholderB64 = await getBase64FromUrl(placeholderUrl)
	}

	return {
		...entry,
		createdBy: entry.user?.username,
		thumbnailUrl: entry.pictures?.[0]?.file
			? cloudinary.url(entry.pictures?.[0].file, {
					width: 500,
					height: 500,
					crop: 'limit',
			  })
			: undefined,
		placeholderUrl: placeholderB64,
	}
}
