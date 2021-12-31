import { ReactNode } from 'react'

type AppLayoutProps = {
	header: ReactNode
	main: ReactNode
	footer: ReactNode
}

export default function AppLayout({ header, footer, main }: AppLayoutProps) {
	return (
		<div className="entries-layout">
			<header>
				<div className="bg-picture"></div>
				<nav className="flex">{header}</nav>
			</header>
			<main>
				{main}
				<div className="bg-picture"></div>
			</main>
			<footer>
				<div className="bg-picture"></div>
				<nav className="flex">{footer}</nav>
			</footer>
		</div>
	)
}
