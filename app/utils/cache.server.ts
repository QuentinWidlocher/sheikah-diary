import { getUserId } from './session.server'

declare global {
	var __cache:
		| {
				[url: string]: {
					global: string | undefined
					[userId: string]: string | undefined
				}
		  }
		| undefined
}

let cache: {
	[url: string]: {
		global: string | undefined
		[userId: string]: string | undefined
	}
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

export async function getFromCache(
	key: string,
	parseUrl = true,
	specificToUserRequest: Request | undefined = undefined,
): Promise<string | undefined> {
	let url = parseUrl ? urlFromKey(key) : key
	let currentUserId = null

	if (specificToUserRequest) {
		currentUserId = await getUserId(specificToUserRequest)
	}

	console.log('Getting from cache', url, 'user', currentUserId)
	if (url) {
		if (cache[url] == null) {
			cache[url] = { global: undefined }
		}

		if (currentUserId) {
			return cache[url]?.[currentUserId]
		} else {
			return cache[url].global
		}
	} else {
		return undefined
	}
}

export async function setToCache(
	key: string,
	value: string,
	parseUrl = true,
	specificToUserRequest: Request | undefined = undefined,
): Promise<void> {
	let url = parseUrl ? urlFromKey(key) : key

	let currentUserId = null

	if (specificToUserRequest) {
		currentUserId = await getUserId(specificToUserRequest)
	}

	console.log('Setting to cache', url, 'user', currentUserId)
	if (url) {
		if (cache[url] == null) {
			cache[url] = { global: undefined }
		}

		if (currentUserId) {
			cache[url][currentUserId] = value
		} else {
			cache[url].global = value
		}
	}
}

export function clearCache(): void {
	cache = {}
}

export async function resetEntrySlug(
	slug: string,
	specificToUserRequest: Request | undefined = undefined,
): Promise<void> {
	return resetCache(`/app/entries/${slug}`, false, specificToUserRequest)
}

export async function resetCache(
	key: string,
	parseUrl = true,
	specificToUserRequest: Request | undefined = undefined,
): Promise<void> {
	let url = parseUrl ? urlFromKey(key) : key
	let currentUserId = null

	if (specificToUserRequest) {
		currentUserId = await getUserId(specificToUserRequest)
	}

	console.log('Resetting url in cache', url, 'user', currentUserId)

	if (url) {
		if (currentUserId) {
			cache[url][currentUserId] = undefined
		} else {
			cache[url] = { global: undefined }
		}
	}
}
