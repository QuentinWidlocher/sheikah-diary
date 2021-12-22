import * as React from 'react'
import {
	Links,
	LiveReload,
	LoaderFunction,
	Meta,
	MetaFunction,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch,
	useLocation,
} from 'remix'
import type { LinksFunction } from 'remix'

import globalStylesUrl from '~/styles/global.css'
import basicStylesUrl from '~/styles/basic.css'
import ErrorPage from './components/error-page'

/**
 * The `links` export is a function that returns an array of objects that map to
 * the attributes for an HTML `<link>` element. These will load `<link>` tags on
 * every route in the app, but individual routes can include their own links
 * that are automatically unloaded when a user navigates away from the route.
 *
 * https://remix.run/api/app#links
 */
export let links: LinksFunction = () => {
	return [
		{ rel: 'stylesheet', href: globalStylesUrl },
		{ rel: 'stylesheet', href: basicStylesUrl },
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossOrigin: 'anonymous',
		},
		{
			rel: 'stylesheet',
			href:
				'https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&family=Spectral:wght@800&display=swap',
			crossOrigin: 'anonymous',
		},
		{ rel: 'icon', href: '/favicon.png' },
		{ rel: 'icon', href: '/favicon.ico' },
		{ rel: 'icon', href: '/favicon.svg' },
		{
			rel: 'icon',
			href: '/favicon-dark.png',
			media: 'prefers-color-scheme: dark',
		},
		{
			rel: 'icon',
			href: '/favicon-dark.ico',
			media: 'prefers-color-scheme: dark',
		},
		{
			rel: 'icon',
			href: '/favicon-dark.svg',
			media: 'prefers-color-scheme: dark',
		},
		{ rel: 'manifest', href: '/manifest.json' },
	]
}

export let meta: MetaFunction = () => {
	return {
		'mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-capable': 'yes',
		'application-name': 'Sheika Diary',
		'apple-mobile-web-app-title': 'Sheika Diary',
		'theme-color': '#50463b',
		'msapplication-navbutton-color': '#50463b',
		'apple-mobile-web-app-status-bar-style': 'black-translucent',
		'msapplication-starturl': '/',
		viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
	}
}

/**
 * The root module's default export is a component that renders the current
 * route via the `<Outlet />` component. Think of this as the global layout
 * component for your app.
 */
export default function App() {
	return (
		<Document>
			<Layout>
				<Outlet />
			</Layout>
		</Document>
	)
}

function Document({
	children,
	title,
}: {
	children: React.ReactNode
	title?: string
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				{title ? <title>{title}</title> : null}
				<Meta />
				<Links />
			</head>
			<body style={{ backgroundColor: '#50463b' }}>
				{children}
				<RouteChangeAnnouncement />
				<Scripts />
				{process.env.NODE_ENV === 'development' && <LiveReload />}
			</body>
		</html>
	)
}

function Layout({ children }: React.PropsWithChildren<{}>) {
	return (
		<div className="fixed w-full h-full text-base bg-primary-800 flex flex-col">
			{children}
		</div>
	)
}

export function CatchBoundary() {
	let caught = useCatch()

	let message
	switch (caught.status) {
		case 401:
			message = "You don't have acces to this page"
			break
		case 404:
			message = 'This page does not exist'
			break

		default:
			throw caught
	}

	return (
		<Document title={caught.statusText}>
			<ErrorPage message={message} />
		</Document>
	)
}

export function ErrorBoundary({ error }: { error: Error }) {
	console.error(error)
	return (
		<Document title="Error!">
			<ErrorPage />
		</Document>
	)
}

/**
 * Provides an alert for screen reader users when the route changes.
 */
const RouteChangeAnnouncement = React.memo(() => {
	let [hydrated, setHydrated] = React.useState(false)
	let [innerHtml, setInnerHtml] = React.useState('')
	let location = useLocation()

	React.useEffect(() => {
		setHydrated(true)
	}, [])

	let firstRenderRef = React.useRef(true)
	React.useEffect(() => {
		// Skip the first render because we don't want an announcement on the
		// initial page load.
		if (firstRenderRef.current) {
			firstRenderRef.current = false
			return
		}

		let pageTitle = location.pathname === '/' ? 'Home page' : document.title
		setInnerHtml(`Navigated to ${pageTitle}`)
	}, [location.pathname])

	// Render nothing on the server. The live region provides no value unless
	// scripts are loaded and the browser takes over normal routing.
	if (!hydrated) {
		return null
	}

	return (
		<div
			aria-live="assertive"
			aria-atomic
			id="route-change-region"
			style={{
				border: '0',
				clipPath: 'inset(100%)',
				clip: 'rect(0 0 0 0)',
				height: '1px',
				margin: '-1px',
				overflow: 'hidden',
				padding: '0',
				position: 'absolute',
				width: '1px',
				whiteSpace: 'nowrap',
				wordWrap: 'normal',
			}}>
			{innerHtml}
		</div>
	)
})
