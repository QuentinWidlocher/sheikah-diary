import Redis from 'ioredis'

declare global {
	var __cache:
		| {
				[k: string]: string
		  }
		| undefined
}

let cache: {
	[k: string]: string | undefined
}

if (process.env.NODE_ENV === 'production') {
	cache = {}
} else {
	if (!global.__cache) {
		global.__cache = {}
	}
	cache = global.__cache
}

function urlFromKey(key: string): string | undefined {
	try {
		return new URL(key).pathname
	} catch (e) {
		return undefined
	}
}

export function getFromCache(key: string, parseUrl = true): string | undefined {
	let url = parseUrl ? urlFromKey(key) : key
	console.log('Getting from cache', url)
	if (url) {
		return cache[url]
	} else {
		return undefined
	}
}

export function setToCache(key: string, value: string, parseUrl = true): void {
	let url = parseUrl ? urlFromKey(key) : key
	console.log('Setting to cache', url)
	if (url) {
		cache[url] = value
	}
}

export function clearCache(): void {
	cache = {}
}

export function resetEntrySlug(slug: string): void {
	resetCache(`/app/entries/${slug}`, false)
}

export function resetCache(key: string, parseUrl = true): void {
	let url = parseUrl ? urlFromKey(key) : key
	console.log('Resetting url in cache', url)
	if (url) {
		cache[url] = undefined
	}
}
