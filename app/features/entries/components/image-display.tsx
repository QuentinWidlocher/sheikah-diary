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
					style={{
						backgroundImage: pictures[0].placeholder
							? `url('${pictures[0].placeholder}')`
							: undefined,
					}}
					className="bg-cover bg-center object-cover mx-auto w-full max-w-2xl h-full min-h-[20rem] border border-primary-500 text-primary-500 shadow-primary-full"
				/>
			</button>
			{fullscreen ? (
				<div
					onClick={() => setFullscreen(false)}
					className="fixed z-20 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 object-contain px-1 md:px-5 lg:px-10 xl:px-20">
					<div
						className="w-full h-full bg-contain bg-no-repeat bg-center"
						style={{
							backgroundImage: `url(${pictures[0].file})`,
						}}></div>
				</div>
			) : null}
		</>
	)
}
