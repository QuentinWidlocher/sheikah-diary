import { Entry, Picture, Prisma, User, Comment } from '@prisma/client'

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
