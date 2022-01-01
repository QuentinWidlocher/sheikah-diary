import { LoaderFunction, redirect } from 'remix'
import { serialize } from 'superjson'
import { z } from 'zod'
import { db } from '~/utils/db.server'
import {
	EntryInPageFromDb,
	getPrismaSelectEntryInPage,
	EntryInPage,
	computeEntryInPageFields,
} from '../types/entry-in-page'

export const entryLoader: LoaderFunction = async ({ params }) => {
	let slug = z.string().parse(params?.slug)

	let entry: EntryInPageFromDb | null = await db.entry.findFirst({
		select: getPrismaSelectEntryInPage(),
		where: {
			slug,
		},
	})

	if (entry == null) {
		return redirect('/app/entries')
	}

	let result: EntryInPage = await computeEntryInPageFields(entry)

	return serialize(result)
}
