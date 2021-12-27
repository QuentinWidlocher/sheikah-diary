import { User } from '@prisma/client'
import { useMatches } from 'remix'

export default function useCurrentUser(): User {
	let matches = useMatches()

	let {
		data: { currentUser },
	} = matches.find(m => 'currentUser' in (m.data ?? {})) ?? {
		data: { currentUser: undefined },
	}

	return currentUser
}
