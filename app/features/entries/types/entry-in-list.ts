import { Entry, Picture, Prisma, User } from '@prisma/client'
import { getBase64FromUrl } from '~/utils/file.utils.server'
import { getImgProps } from '~/utils/image.utils'
import { cloudinary } from '~/utils/storage.server'

export type EntryInList = Pick<Entry, 'title' | 'slug'> & {
	thumbnailImgProps: ReturnType<typeof getImgProps> | undefined
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
	let placeholderB64: string | null = null

	if (entry.pictures?.[0]?.file) {
		let placeholderUrl = cloudinary.url(entry.pictures?.[0].file, {
			width: 50,
			crop: 'fill',
			aspect_ratio: 1,
			effect: 'blur:500',
		})

		placeholderB64 = await getBase64FromUrl(placeholderUrl)
	}

	return {
		...entry,
		createdBy: entry.user?.username,
		thumbnailImgProps: entry.pictures?.[0]?.file
			? getImgProps(entry.pictures?.[0].file, {
					widths: [280, 560, 840, 1100, 1650, 2500, 2100, 3100],
					sizes: [
						'(max-width:767px) 100vw',
						'(min-width:768px) and (max-width:1023px) 30vw',
						'(min-width:1024px) and (max-width:1620px) 40vw',
						'1100px',
					],
					transformations: {
						crop: 'fill',
						aspect_ratio: 1,
					},
			  })
			: undefined,
		placeholderUrl: placeholderB64 ?? undefined,
	}
}
