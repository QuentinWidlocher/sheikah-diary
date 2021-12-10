import { Entry, Picture, Prisma, User } from '@prisma/client'
import { pictures } from '~/utils/storage'

export type EntryInList = Pick<Entry, 'title' | 'slug'> & {
  thumbnailUrl?: string
  createdBy: string
}

export type EntryInListFromDb = Pick<
  Entry,
  'slug' | 'title' | 'slug'
> & {
  pictures: Pick<Picture, 'thumbnail'>[],
  user: Pick<User, 'username'>
}

export const prismaEntryInListSelect = Prisma.validator<Prisma.EntrySelect>()({
  title: true,
  slug: true,
  pictures: {
    select: {
      thumbnail: true,
    },
  },
  user: {
    select: {
      username: true
    }
  }
})

export async function computeEntryInListFields(
  entry: EntryInListFromDb,
): Promise<EntryInList> {
  return {
    ...entry,
    createdBy: entry.user?.username,
    thumbnailUrl: entry.pictures?.[0]?.thumbnail
      ? (await pictures.getPublicUrl(entry.pictures?.[0]?.thumbnail)
          .publicURL) ?? undefined
      : undefined,
  }
}
