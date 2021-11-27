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

export let links: LinksFunction = () => [
  { rel: 'stylesheet', href: formStylesheet },
]

let formValidator = z.object({
  title: z.string().nonempty({ message: 'The title is required' }),
  content: z.string().optional().default(''),
})

type FormError = z.ZodFormattedError<z.infer<typeof formValidator>>

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData()
  let parsedForm = formValidator.safeParse(
    Object.fromEntries(formData.entries()),
  )

  if (!parsedForm.success) {
    return parsedForm.error.format()
  }

  let data: NewEntry = {
    ...parsedForm.data,
    slug: slugify(parsedForm.data.title),
  }

  let createdEntry = await db.entry.create({ data })

  return redirect(`/entries/${createdEntry.slug}`)
}

export default function NewEntryPage() {
  let errors = useActionData<FormError>()
  let transition = useTransition()

  return (
    <div className="mt-16 px-3 md:mx-auto w-full md:w-3/4 lg:w-1/2">
      <Form method="post">
        <div className="-mx-3">
          <FormField label="Title" error={errors?.title}>
            <input type="text" name="title" />
          </FormField>
          <FormField label="Content" error={errors?.content}>
            <textarea name="content" rows={20}></textarea>
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
