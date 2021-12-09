import { Entry } from '@prisma/client'

export type NewEntry = Omit<Entry, 'id' | 'createdAt' | 'updatedAt'>
