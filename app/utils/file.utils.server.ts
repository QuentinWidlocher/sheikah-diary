import { db } from './db.server'
import { cloudinary } from './storage.server'

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
