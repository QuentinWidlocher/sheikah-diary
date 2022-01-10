import { renderToString } from 'react-dom/server'
import { RemixServer } from 'remix'
import type { EntryContext } from 'remix'
import dotenv from 'dotenv'
import { getFromCache, setToCache } from './utils/cache.server'

dotenv.config()

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) {
	let cached = getFromCache(request.url)

	let markup: string | null = null

	if (cached) {
		console.log('Serving from cache')
		markup = cached
	} else {
		console.log('Serving from server')
		markup = renderToString(
			<RemixServer context={remixContext} url={request.url} />,
		)

		setToCache(request.url, markup)
	}

	responseHeaders.set('Content-Type', 'text/html')

	return new Response('<!DOCTYPE html>' + markup, {
		status: responseStatusCode,
		headers: responseHeaders,
	})
}
