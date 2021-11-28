import {
  ActionFunction,
  Form,
  LinksFunction,
  redirect,
  useActionData,
  useTransition,
} from 'remix'
import { z } from 'zod'
import FormField from '~/components/form-field'
import { NewEntry } from '~/features/entries/types/entries'
import formStylesheet from '~/styles/forms.css'
import { db } from '~/utils/db'
import { slugify } from '~/utils/string.utils'
import ReactLoading from 'react-loading'
import { useState } from 'react'
import { base64ImageValidTypeRegex, saveImage } from '~/utils/file.utils.server'
import { toBase64 } from '~/utils/file.utils.browser'
import { Response } from 'node-fetch'

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: formStylesheet },
]

let formValidator = z.object({
  title: z.string().nonempty({ message: 'The title is required' }),
  content: z.string().optional().default(''),
  mainPicture: z
    .string()
    .regex(base64ImageValidTypeRegex, { message: 'Not a valid image format' }),
})

type FormError = z.ZodFormattedError<z.infer<typeof formValidator>>

export let action: ActionFunction = async ({ request }) => {
  // Idk why but await request.formData() justs freezes
  let formData = new URLSearchParams(await request.text())

  let parsedForm = formValidator.safeParse(
    Object.fromEntries(formData.entries()),
  )

  if (!parsedForm.success) {
    return parsedForm.error.format()
  }

  let data: NewEntry = {
    title: parsedForm.data.title,
    content: parsedForm.data.content,
    slug: slugify(parsedForm.data.title),
  }

  let createdEntry = await db.entry.create({ data })

  await saveImage(parsedForm.data.mainPicture, createdEntry.id)

  return redirect(`/entries/${createdEntry.slug}`)
}

export default function NewEntryPage() {
  let errors = useActionData<FormError>()
  let transition = useTransition()

  const [mainPictureB64, setMainPictureB64] = useState('')

  async function dataToByteArray(files: FileList | null) {
    if (files != null) {
      let o = await toBase64(files[0])
      console.log(o)
      setMainPictureB64(o)
    } else {
      setMainPictureB64('')
    }
  }

  return (
    <div className="mt-16 px-3 md:mx-auto w-full md:w-3/4 lg:w-1/2">
      <Form method="post">
        <input
          type="hidden"
          name="mainPicture"
          readOnly
          value={mainPictureB64}
        />
        <div className="-mx-3">
          <FormField label="Main picture" error={errors?.mainPicture}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => dataToByteArray(e.target.files)}
            />
          </FormField>
          <FormField label="Title" error={errors?.title}>
            <input type="text" name="title" />
          </FormField>
          <FormField label="Content" error={errors?.content}>
            <textarea name="content" rows={10}></textarea>
          </FormField>
        </div>
        <div role="separator"></div>
        <button
          type="submit"
          className="float-right"
          disabled={!!transition.submission}
        >
          {transition.submission ? (
            <div className="flex space-x-3">
              <ReactLoading
                type="spinningBubbles"
                color="var(--primary-500)"
                height="1.5rem"
                width="1.5rem"
              />
              <span>Creating Post</span>
            </div>
          ) : (
            'Create Post'
          )}
        </button>
      </Form>
    </div>
  )
}
