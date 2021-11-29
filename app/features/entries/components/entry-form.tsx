import { Transition } from '@remix-run/react/transition'
import { useRef, useState } from 'react'
import { FiImage } from 'react-icons/fi'
import ReactLoading from 'react-loading'
import { Form } from 'remix'
import FormField from '~/components/form-field'
import { toBase64 } from '~/utils/file.utils.browser'
import { FormError } from '../api/update'
import { SimpleEntry } from '../types/entries'

type EntryFormProps = {
  errors?: FormError
  transition: Transition
  submitLabel: { default: string; sending: string }
  action: string
  defaultValues?: SimpleEntry
  ButtonsSlot?: () => JSX.Element
}

export default function EntryForm({
  errors,
  transition,
  submitLabel,
  action,
  defaultValues,
  ButtonsSlot,
}: EntryFormProps) {
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
      <Form method="post" action={action}>
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
            <input
              type="text"
              name="title"
              defaultValue={defaultValues?.title}
            />
          </FormField>
          <FormField label="Content" error={errors?.content}>
            <textarea
              name="content"
              defaultValue={defaultValues?.content}
              rows={8}
            ></textarea>
          </FormField>
        </div>
        <div role="separator"></div>
        <div className="flex justify-end">
          {ButtonsSlot ? <ButtonsSlot /> : null}
          <button type="submit" disabled={!!transition.submission}>
            {transition.submission ? (
              <div className="flex space-x-3">
                <ReactLoading
                  type="spinningBubbles"
                  color="var(--primary-500)"
                  height="1.5rem"
                  width="1.5rem"
                />
                <span>{submitLabel.sending}</span>
              </div>
            ) : (
              submitLabel.default
            )}
          </button>
        </div>
      </Form>
    </div>
  )
}
