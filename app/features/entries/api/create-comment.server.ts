import { ActionFunction, redirect } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db.server.'
import { getUser } from '~/utils/session.server'

const formValidator = z.object({
  body: z.string().nonempty({ message: 'You cannot send an empty comment' }),
})

export let createCommentAction: ActionFunction = async ({
  request,
  params,
}) => {
  let currentPage = new URL(request.url).pathname

  let user = await getUser(request)

  if (!user) {
    return redirect(`/login?redirectTo=${currentPage}`)
  }

  let foundEntry = await db.entry.findFirst({
    where: {
      slug: params.slug,
    },
    select: {
      id: true,
    },
  })

  if (!foundEntry) {
    return redirect('/app/entries')
  }

  let formData = await request.formData()
  let parsedForm = formValidator.safeParse(
    Object.fromEntries(formData.entries()),
  )

  if (!parsedForm.success) {
    return parsedForm.error.format()
  }

  return db.comment.create({
    data: {
      body: parsedForm.data.body,
      entryId: foundEntry.id,
      userId: user.id,
    },
  })
}
