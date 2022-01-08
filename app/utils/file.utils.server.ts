import { db } from './db.server'
import { cloudinary } from './storage.server'
import fetch from 'node-fetch'

export const base64ImageValidTypeRegex = /^data:image\/(\w*);base64,/
export const base64GetExtRegex = /^data:image\/(.*);base64,/

export async function saveImage(base64: string, entryId: string) {
	console.log('Saving image for entry', entryId)

	let file = await cloudinary.uploader.upload(base64, {
		public_id: entryId,
		unique_filename: true,
	})

	console.debug('The file has been uploaded')

	return db.picture.create({
		data: {
			file: file.public_id,
			entryId,
		},
	})
}

export async function getBase64FromUrl(url: string): Promise<string> {
	let data = await fetch(url)
	let arrayBuffer = await data.arrayBuffer()
	let b64Data = Buffer.from(arrayBuffer).toString('base64')
	let b64 = `data:image/png;base64,${b64Data}`
	return b64
}
