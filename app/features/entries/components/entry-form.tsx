import { Transition } from '@remix-run/react/transition'
import { useRef, useState } from 'react'
import { FiImage } from 'react-icons/fi'
import ReactLoading from 'react-loading'
import { Form } from 'remix'
import FormField from '~/components/form-field'
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

async function getCanvasImageSizeInBytes(
  canvas: HTMLCanvasElement,
): Promise<number> {
  return new Promise((r) => {
    canvas.toBlob((b) => r(b?.size ?? 0))
  })
}

function loadImageToCanvas(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  width: number = image.width,
  height: number = image.height,
) {
  // Redimensionne le canvas virtuel aux dimension souhaitées
  canvas.width = width
  canvas.height = height

  // Affiche l'image sur le canvas
  canvas.getContext('2d')?.drawImage(image, 0, 0, width, height)
}

function getCappedDimensions(capSize: number, width: number, height: number) {
  let newWidth = width
  let newHeight = height

  if (width > capSize || (capSize && height)) {
    if (width > height) {
      newHeight = height * (capSize / width)
      newWidth = capSize
    } else {
      newWidth = width * (capSize / height)
      newHeight = capSize
    }
  }
  return [newWidth, newHeight]
}

export default function EntryForm({
  errors,
  transition,
  submitLabel,
  action,
  defaultValues,
  ButtonsSlot,
}: EntryFormProps) {
  const [mainPicture, setMainPicture] = useState<
    { b64: string; name: string } | undefined
  >(undefined)

  const [imageIsProcessing, setImageIsProcessing] = useState(false)

  const imageInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  async function dataToByteArray(files: FileList | null) {
    if (!canvasRef.current) {
      return
    }

    if (files?.[0]) {
      setImageIsProcessing(true)
      let b64 = await getBase64FromFile(files[0])
      setMainPicture({
        b64,
        name: files[0].name,
      })
      setImageIsProcessing(false)
    } else {
      canvasRef.current.width = 0
      canvasRef.current.height = 0
      setMainPicture(undefined)
    }
  }

  async function getBase64FromFile(file: File): Promise<string> {
    return new Promise(async (resolve, reject) => {
      let image = new Image()
      image.src = URL.createObjectURL(file)
      image.onload = async () => {
        // We first load the original image into the canvas
        loadImageToCanvas(canvasRef.current!, image)

        // Then we calculate the size in bytes
        let imageSizeInBytes = await getCanvasImageSizeInBytes(
          canvasRef.current!,
        )

        let [width, height] = [image.width, image.height]

        // While the file size is > 3Mb...
        while (imageSizeInBytes >= 3000000) {
          // We try with a smaller version of the picture
          ;[width, height] = getCappedDimensions(
            width * 0.8,
            image.width,
            image.height,
          )

          console.log(
            'Image too big (',
            imageSizeInBytes,
            'B), trying with a smaller version (',
            width,
            'x',
            height,
            ')',
          )

          loadImageToCanvas(canvasRef.current!, image, width, height)
          imageSizeInBytes = await getCanvasImageSizeInBytes(canvasRef.current!)
        }

        resolve(canvasRef.current!.toDataURL(file.type))
      }

      image.onerror = reject
    })
  }

  return (
    <div className="mt-16 px-3 md:mx-auto w-full md:w-3/4 lg:w-1/2">
      <Form method="post" action={action}>
        <div className="-mx-3">
          <FormField error={errors?.mainPicture}>
            <canvas
              className={`w-full mb-5 ${
                mainPicture && !imageIsProcessing ? '' : 'hidden'
              }`}
              ref={canvasRef}
            ></canvas>
            <input
              type="hidden"
              name="mainPicture"
              readOnly
              value={mainPicture?.b64}
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
              {imageIsProcessing ? (
                <ReactLoading
                  type="spinningBubbles"
                  className="mr-3"
                  color="var(--primary-500)"
                  height="1.5rem"
                  width="1.5rem"
                />
              ) : (
                <FiImage size="1.5rem" className="mr-3" />
              )}

              {mainPicture?.name ?? 'Change picture'}
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
          <button
            type="submit"
            disabled={!!transition.submission || imageIsProcessing}
          >
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
