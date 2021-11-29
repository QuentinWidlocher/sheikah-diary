import { ActionFunction, redirect } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db'
import { base64ImageValidTypeRegex, saveImage } from '~/utils/file.utils.server'
import { slugify } from '~/utils/string.utils'
import { NewEntry } from '../types/entries'

let formValidator = z.object({
  title: z.string().nonempty({ message: 'The title is required' }),
  content: z.string().optional().default(''),
  mainPicture: z.literal('').or(
    z.string().regex(base64ImageValidTypeRegex, {
      message: 'Not a valid image format',
    }),
  ),
})

export type FormError = z.ZodFormattedError<z.infer<typeof formValidator>>

export let baseUpdateAction = async (
  request: Request,
  action: (data: z.infer<typeof formValidator>) => Promise<string>,
) => {
  // Idk why but await request.formData() justs freezes
  let formData = new URLSearchParams(await request.text())

  let parsedForm = formValidator.safeParse(
    Object.fromEntries(formData.entries()),
  )

  if (!parsedForm.success) {
    return parsedForm.error.format()
  }

  let slug = await action(parsedForm.data)

  return redirect(`/entries/${slug}`)
}

export let createAction: ActionFunction = async ({ request }) => {
  console.log('Request to create entry')
  return baseUpdateAction(request, async (form) => {
    let data: NewEntry = {
      title: form.title,
      content: form.content,
      slug: slugify(form.title),
    }

    let createdEntry = await db.entry.create({ data })

    if (form.mainPicture) {
      await saveImage(form.mainPicture, createdEntry.id)
    }

    return createdEntry.slug
  })
}

export let updateAction: ActionFunction = async ({ request }) => {
  console.log('Request to update entry')
  return baseUpdateAction(request, async (form) => {
    let data: NewEntry = {
      title: form.title,
      content: form.content,
      slug: slugify(form.title),
    }

    let updatedEntry = await db.entry.update({
      data,
      where: {
        slug: data.slug,
      },
    })

    if (form.mainPicture) {
      await saveImage(form.mainPicture, updatedEntry.id)
    }

    return updatedEntry.slug
  })
}
