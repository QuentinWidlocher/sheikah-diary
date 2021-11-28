import React, { useRef, useState } from 'react'
import {
  ActionFunction,
  Form,
  LinksFunction,
  MetaFunction,
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
import { base64ImageValidTypeRegex, saveImage } from '~/utils/file.utils.server'
import { toBase64 } from '~/utils/file.utils.browser'
import { FiImage } from 'react-icons/fi'

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: formStylesheet },
]

export let meta: MetaFunction = () => {
  return {
    title: 'New Entry | Sheikah Diary',
  }
}

let formValidator = z.object({
  title: z.string().nonempty({ message: 'The title is required' }),
  content: z.string().optional().default(''),
  mainPicture: z.literal('').or(
    z.string().regex(base64ImageValidTypeRegex, {
      message: 'Not a valid image format',
    }),
  ),
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

  if (parsedForm.data.mainPicture) {
    await saveImage(parsedForm.data.mainPicture, createdEntry.id)
  }

  return redirect(`/entries/${createdEntry.slug}`)
}

export default function NewEntryPage() {
  let errors = useActionData<FormError>()
  let transition = useTransition()

  const [mainPictureB64, setMainPictureB64] = useState<
    { b64: string; name: string } | undefined
  >(undefined)
  const imageInputRef = useRef<HTMLInputElement>(null)

  async function dataToByteArray(files: FileList | null) {
    if (files != null) {
      setMainPictureB64({ b64: await toBase64(files[0]), name: files[0].name })
    } else {
      setMainPictureB64(undefined)
    }
  }

  return (
    <div className="mt-16 px-3 md:mx-auto w-full md:w-3/4 lg:w-1/2">
      <Form method="post">
        <div className="-mx-3">
          <FormField error={errors?.mainPicture}>
            <input
              type="hidden"
              name="mainPicture"
              readOnly
              value={mainPictureB64?.b64}
            />
            <input
              ref={imageInputRef}
              hidden
              type="file"
              accept="image/*"
              onChange={(e) => dataToByteArray(e.target.files)}
            />
            <button
              type="button"
              className="flex justify-center mb-5"
              onClick={() => imageInputRef.current?.click()}
            >
              <FiImage size="1.5rem" className="mr-3" />
              {mainPictureB64?.name ?? 'Add a picture'}
            </button>
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
