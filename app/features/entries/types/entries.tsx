import { Entry, Picture, Comment, User, Prisma } from '@prisma/client'

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
  comments: (Pick<Comment, 'id' | 'body' | 'createdAt'> & { user: User })[]
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
}
