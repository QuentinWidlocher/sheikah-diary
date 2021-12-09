import { Entry, Picture, Prisma } from '@prisma/client'
import { pictures } from '~/utils/storage'

export type EntryInList = Pick<Entry, 'title' | 'createdAt' | 'slug'> & {
  thumbnailUrl?: string
}

export type EntryInListFromDb = Pick<
  Entry,
  'slug' | 'title' | 'createdAt' | 'slug'
> & {
  pictures: Pick<Picture, 'thumbnail'>[]
}

export const prismaEntryInListSelect = Prisma.validator<Prisma.EntrySelect>()({
  title: true,
  slug: true,
  createdAt: true,
  pictures: {
    select: {
      thumbnail: true,
    },
  },
})

export async function computePictureLink(
  entry: EntryInListFromDb,
): Promise<EntryInList> {
  return {
    ...entry,
    thumbnailUrl: entry.pictures?.[0]?.thumbnail
      ? (await pictures.getPublicUrl(entry.pictures?.[0]?.thumbnail)
          .publicURL) ?? undefined
      : undefined,
  }
}
