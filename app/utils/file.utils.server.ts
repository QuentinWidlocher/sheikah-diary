import { db } from './db.server'
import { cloudinary } from './storage.server'
import https from 'https'
import http from 'http'
import { URL } from 'url'

let httpClient: typeof http | typeof https

if (process.env.NODE_ENV == 'development') {
	httpClient = http
} else {
	httpClient = https
}

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

let b64Cache: { [k: string]: string } = {}

export async function getBase64FromUrl(url: string): Promise<string> {
	if (url in b64Cache) {
		return Promise.resolve(b64Cache[url])
	} else {
		return new Promise((resolve, reject) => {
			httpClient
				.get(url, resp => {
					resp.setEncoding('base64')
					let body = 'data:' + resp.headers['content-type'] + ';base64,'
					resp.on('data', data => {
						body += data
					})
					resp.on('end', () => {
						resolve(body)
					})
				})
				.on('error', e => {
					reject(e)
				})
		})
	}
}
