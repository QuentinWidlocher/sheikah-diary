import { LoaderFunction, redirect } from 'remix'
import { serialize } from 'superjson'
import { z } from 'zod'
import { db } from '~/utils/db.server'
import {
	EntryInUpdate,
	getPrismaSelectEntryInUpdate,
} from '../types/entry-in-update'

export type EntryUpdateLoaderPayload = EntryInUpdate

export const entryUpdateLoader: LoaderFunction = async ({ params }) => {
	let slug = z.string().parse(params?.slug)

	let entry: EntryInUpdate | null = await db.entry.findFirst({
		select: getPrismaSelectEntryInUpdate(),
		where: {
			slug,
		},
	})

	if (!entry) {
		return redirect('/app/entries')
	}

	let payload: EntryUpdateLoaderPayload = entry

	return serialize(payload)
}
