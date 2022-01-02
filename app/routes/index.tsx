import { Link, MetaFunction } from 'remix'
import { version, repository, author } from '../../package.json'

export let meta: MetaFunction = () => {
	return {
		title: 'Sheikah Diary',
	}
}

export default function IndexPage() {
	return (
		<div className="w-full h-full bg-[url('/assets/main-bg.jpg')] bg-top">
			<div className="w-full h-full flex bg-gradient-to-l from-black/60">
				<div className="flex flex-col ml-auto py-10 px-5 md:px-10 lg:px-20 w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
					<h1 className="font-title text-6xl whitespace-nowrap">
						<span className="text-8xl tracking-[-2rem]">S</span>
						<span className="inline-block scale-x-75">HEIKAH</span> <br />
						<span className="text-8xl tracking-[-1.1rem]">D</span>
						<span className="inline-block scale-x-75">IARY</span>
					</h1>
					<h2>
						Open Source app to share picture from <br />
						<strong>The Legend of Zelda : Breath of the Wild</strong>
					</h2>
					<nav className="my-auto">
						<ul className="flex flex-col space-y-5 text-xl items-end">
							<li>
								<Link
									to="/app"
									className="opacity-60 hover:before:content-['>'] hover:opacity-100">
									Open the app
								</Link>
							</li>
							<li>
								<Link
									to="/login"
									className="opacity-60 hover:before:content-['>'] hover:opacity-100">
									Sign in
								</Link>
							</li>
							<li>
								<a
									className="opacity-60 hover:before:content-['>'] hover:opacity-100"
									href="https://github.com/QuentinWidlocher/sheikah-diary">
									See on GitHub
								</a>
							</li>
						</ul>
					</nav>
					<div className="text-right">
						<ul>
							<li className="opacity-60">Ver. {version}</li>
							<li>
								<a className="opacity-60 hover:opacity-100" href={repository.url}>
									See on GitHub
								</a>
							</li>
							<li>
								<span className="opacity-60">{new Date().getFullYear()} - </span>
								<a className="opacity-60 hover:opacity-100" href={author.url}>
									{author.name}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
