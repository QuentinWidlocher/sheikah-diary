import { Entry } from '@prisma/client'

export type EntryInList = Pick<Entry, 'title' | 'createdAt'> & {
  link: string
}
