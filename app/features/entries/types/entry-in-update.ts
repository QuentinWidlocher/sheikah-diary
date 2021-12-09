import { Entry, Prisma } from '@prisma/client'

export type EntryInUpdate = Pick<Entry, 'title' | 'content' | 'slug'>

export function getPrismaSelectEntryInUpdate() {
  return Prisma.validator<Prisma.EntrySelect>()({
    slug: true,
    title: true,
    content: true,
  })
}
