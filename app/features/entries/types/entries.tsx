import { Entry } from '@prisma/client'

export type EntryInList = Pick<Entry, 'title' | 'createdAt'> & {
  link: string
  previewUrl?: string
}

export type NewEntry = Omit<Entry, 'id' | 'createdAt' | 'updatedAt'>
