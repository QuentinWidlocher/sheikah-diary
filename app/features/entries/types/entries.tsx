import { Entry, Picture } from '@prisma/client'

export type EntryInList = Pick<Entry, 'title' | 'createdAt'> & {
  link: string
  thumbnailUrl?: string
}

export type NewEntry = Omit<Entry, 'id' | 'createdAt' | 'updatedAt'>

export type SimpleEntry = Pick<
  Entry,
  'slug' | 'title' | 'content' | 'createdAt' | 'userId'
> & {
  pictures: Pick<Picture, 'file' | 'preview'>[]
}

export const prismaSelectSimpleEntry = {
  slug: true,
  title: true,
  content: true,
  createdAt: true,
  userId: true,
  pictures: {
    select: {
      file: true,
      preview: true,
    },
  },
}
