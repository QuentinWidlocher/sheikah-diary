import { Link } from 'remix'

export default function ErrorPage({
	message = 'There was an error...',
}: {
	message?: string
}) {
	return (
		<div className="bg-black text-white w-screen h-screen flex justify-center items-center">
			<div className="flex flex-col">
				<h1 className="font-title text-6xl text-center transform scale-x-75">
					<span className="text-8xl">G</span>AME <span className="text-8xl">O</span>
					VER
				</h1>
				<p className="mx-auto mt-2 mb-5">{message}</p>
				<Link className="ui button" to="/app/entries">
					Back to the entries
				</Link>
			</div>
		</div>
	)
}
