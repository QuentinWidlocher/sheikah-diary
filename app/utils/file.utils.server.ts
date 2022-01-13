import { db } from './db.server'
import { cloudinary } from './storage.server'
import fetch from 'node-fetch'
import {
	getEntryInListPlaceholderTransformation,
	getEntryInListTransformations,
} from '~/features/entries/types/entry-in-list'
import {
	getEntryInPagePlaceholderTransformation,
	getEntryInPageTransformations,
} from '~/features/entries/types/entry-in-page'

export const base64ImageValidTypeRegex = /^data:image\/(\w*);base64,/
export const base64GetExtRegex = /^data:image\/(.*);base64,/

export async function saveImage(base64: string, entryId: string) {
	console.log('Saving image for entry', entryId)

	let entryInPageTransformations = getEntryInPageTransformations()
	let entryInListTransformations = getEntryInListTransformations()

	let file = await cloudinary.uploader.upload(base64, {
		invalidate: true,
		eager_async: true,
		eager: [
			entryInPageTransformations.src,
			...entryInPageTransformations.srcSet,
			entryInListTransformations.src,
			...entryInListTransformations.srcSet,
			getEntryInPagePlaceholderTransformation(),
			getEntryInListPlaceholderTransformation(),
		],
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
	let arrayBuffer = await fetch(url).then(d => d.arrayBuffer())
	let b64Data = Buffer.from(arrayBuffer).toString('base64')
	return `data:image/png;base64,${b64Data}`
}
