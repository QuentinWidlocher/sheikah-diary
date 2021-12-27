import { useMatches } from 'remix'

export default function useCurrentRoute(): string | undefined {
	let matches = useMatches()
	return matches[matches.length - 1]?.pathname
}
