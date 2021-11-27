import { Entry } from '@prisma/client'
import { LoaderFunction, useLoaderData } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db'
import { deserialize, parse, serialize } from 'superjson'
import { displayDateTime } from '~/utils/date.utils'

export let loader: LoaderFunction = async ({ params }) => {
  let slug = z.string().parse(params?.slug)

  let entry = await db.entry.findFirst({
    where: {
      slug,
    },
  })

  return serialize(entry)
}

export default function EntriesByIdPage() {
  let entry: Entry = deserialize(useLoaderData())

  return <span>{displayDateTime(entry.createdAt)}</span>
}
