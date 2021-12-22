import { Entry } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useFetcher } from 'remix'
import HeartIcon from '~/components/heart-icon'

type HeartButtonProps = {
	slug: Entry['slug']
	originalUserHasLiked: boolean
	originalLikes: number
	readonly?: boolean
}

// Optimistic like button, directly updates its value then update again if the server was not ok
export default function HeartButton({
	slug,
	originalUserHasLiked,
	originalLikes,
	readonly = true,
}: HeartButtonProps) {
	let fetcher = useFetcher()

	const [userHasLiked, setUserHasLiked] = useState(originalUserHasLiked)

	// Actual number of likes to display
	const [likes, setLikes] = useState(
		originalUserHasLiked ? originalLikes + 1 : originalLikes,
	)

	useEffect(() => {
		setLikes(userHasLiked ? originalLikes + 1 : originalLikes)
	}, [userHasLiked])

	useEffect(() => {
		if (
			userHasLiked != undefined &&
			fetcher.data &&
			userHasLiked != fetcher.data
		) {
			setUserHasLiked(fetcher.data)
		}
	}, [fetcher.data])

	useEffect(() => {
		if (userHasLiked != undefined && fetcher.state == 'submitting') {
			setUserHasLiked(!userHasLiked)
		}
	}, [fetcher.state])

	if (readonly) {
		return (
			<div className="flex flex-col items-center">
				<HeartIcon className="w-10 h-10 filter text-danger-500 drop-shadow-danger" />
				<span className="text-lg">{likes}</span>
			</div>
		)
	} else {
		return (
			<fetcher.Form method="put" action={`/app/entries/${slug}/like`}>
				<input
					type="hidden"
					name="alreadyLiked"
					readOnly
					value={userHasLiked ? 'true' : 'false'}
				/>
				<div className="flex flex-col items-center">
					<button type="submit">
						<HeartIcon
							className={`w-10 h-10 filter ${
								userHasLiked
									? 'text-danger-500 drop-shadow-danger hover:text-danger-300'
									: 'text-black drop-shadow-primary hover:text-danger-900'
							}`}
						/>
					</button>
					<span className="text-lg">{likes}</span>
				</div>
			</fetcher.Form>
		)
	}
}
