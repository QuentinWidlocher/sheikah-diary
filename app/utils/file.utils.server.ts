import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'
import { db } from './db'

export const base64ImageValidTypeRegex = /^data:image\/(\w*);base64,/
export const base64GetExtRegex = /^data:image\/(.*);base64,/

let imagePath = path.join(__dirname, '..', 'public', 'pictures')

export function getFileInfos(base64: string, baseName: string): [base64: string, fileName: string, previewFileName: string, thumbnailFileName: string] {
  let base64Data = base64.split(';base64,').pop() ?? ''
  let fileExt = base64GetExtRegex.exec(base64)?.[1]

  return [base64Data, `${baseName}.${fileExt}`, `${baseName}-preview.${fileExt}`, `${baseName}-thumbnail.${fileExt}`]
}

export async function saveImage(base64: string, entryId: string) {

  let [base64Data, fileName, previewFileName, thumbnailFileName] = getFileInfos(base64, entryId)

  if (base64Data && fileName) {

    let fullPath = path.join(imagePath, fileName)
    let fullPreviewPath = path.join(imagePath, previewFileName)
    let fullThumbailPath = path.join(imagePath, thumbnailFileName)

    await fs.writeFile(
      fullPath,
      base64Data,
      {
        encoding: 'base64',
      },
    )

    await sharp(fullPath).resize(1280).toFile(fullPreviewPath)
    await sharp(fullPath).resize(500).toFile(fullThumbailPath)

    return db.picture.create({
      data: {
        file: fileName,
        preview: previewFileName,
        thumbnail: thumbnailFileName,
        entryId
      }
    })
  }

  throw new Error('Unable to save the picture')
}
