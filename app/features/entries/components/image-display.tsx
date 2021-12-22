import { useState } from 'react'
import SheikahLogo from '~/components/sheika-logo'
import { EntryInPage } from '../types/entry-in-page'

interface ImageDisplayProps {
	pictures: EntryInPage['pictures']
}

export default function ImageDisplay({ pictures }: ImageDisplayProps) {
	if (!pictures || pictures.length <= 0) {
		return (
			<SheikahLogo className="mx-auto w-full h-full border border-primary-500 text-primary-500" />
		)
	}

	const [fullscreen, setFullscreen] = useState(false)

	return (
		<>
			<button onClick={() => setFullscreen(true)}>
				<img
					src={pictures[0].preview}
					alt=""
					className="mx-auto w-full max-w-2xl h-full border border-primary-500 text-primary-500"
				/>
			</button>
			{fullscreen ? (
				<div
					onClick={() => setFullscreen(false)}
					className="fixed z-20 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 p-12 object-contain">
					<img src={pictures[0].file} alt="" className="mx-auto h-full" />
				</div>
			) : null}
		</>
	)
}
