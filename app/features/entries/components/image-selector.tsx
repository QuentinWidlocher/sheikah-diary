import { useEffect, useRef, useState } from 'react'
import { FiImage } from 'react-icons/fi'
import ReactLoading from 'react-loading'

type ImageToSend = { b64: string; name: string }

type ImageSelectorProps = {
  loadedImage?: ImageToSend
  onImageLoading: (isLoading: boolean) => void
  onImageLoaded: (image?: ImageToSend) => void
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

async function getBase64FromFile(
  file: File,
  canvas: HTMLCanvasElement,
): Promise<string> {
  return new Promise(async (resolve, reject) => {
    let image = new Image()
    image.src = URL.createObjectURL(file)
    image.onload = async () => {
      // We first load the original image into the canvas
      loadImageToCanvas(canvas, image)

      // Then we calculate the size in bytes
      let imageSizeInBytes = await getCanvasImageSizeInBytes(canvas)

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

        loadImageToCanvas(canvas, image, width, height)
        imageSizeInBytes = await getCanvasImageSizeInBytes(canvas)
      }

      resolve(canvas.toDataURL(file.type))
    }

    image.onerror = reject
  })
}

export default function ImageSelector({
  onImageLoaded,
  onImageLoading,
  loadedImage,
}: ImageSelectorProps) {
  const [imageIsProcessing, setImageIsProcessing] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    onImageLoading(imageIsProcessing)
  }, [imageIsProcessing])

  async function dataToByteArray(files: FileList | null) {
    if (!canvasRef.current) {
      return
    }

    if (files?.[0]) {
      setImageIsProcessing(true)
      let b64 = await getBase64FromFile(files[0], canvasRef.current)
      onImageLoaded({
        b64,
        name: files[0].name,
      })
      setImageIsProcessing(false)
    } else {
      canvasRef.current.width = 0
      canvasRef.current.height = 0
      onImageLoaded(undefined)
    }
  }

  return (
    <>
      <canvas
        className={`w-full mb-5 ${
          loadedImage && !imageIsProcessing ? '' : 'hidden'
        }`}
        ref={canvasRef}
      ></canvas>

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

        {loadedImage?.name ?? 'Change picture'}
      </button>
    </>
  )
}
