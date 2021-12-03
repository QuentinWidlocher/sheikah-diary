import { Comment, Entry, Picture, Prisma, User } from '@prisma/client'

export type EntryInList = Pick<Entry, 'title' | 'createdAt'> & {
  link: string
  thumbnailUrl?: string
}

export type NewEntry = Omit<Entry, 'id' | 'createdAt' | 'updatedAt'>

export type EntryInPage = Pick<
  Entry,
  'id' | 'slug' | 'title' | 'content' | 'createdAt'
> & {
  user: Pick<User, 'id' | 'username'>
  pictures: Pick<Picture, 'file' | 'preview'>[]
  comments: (Pick<Comment, 'id' | 'body' | 'createdAt'> & { user: User })[]
  likedBy: { id: User['id'] }[]
  _count: { likedBy: number }
}

export type EntryInUpdate = Pick<Entry, 'title' | 'content' | 'slug'>

export function getPrismaSelectEntryInUpdate() {
  return Prisma.validator<Prisma.EntrySelect>()({
    slug: true,
    title: true,
    content: true,
  })
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
