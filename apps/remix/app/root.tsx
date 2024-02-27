import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { PropsWithChildren, ReactNode } from 'react';

import { IconContext } from '@launchpad-ui/icons';
import { cssBundleHref } from '@remix-run/css-bundle';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
	useRouteError,
} from '@remix-run/react';

import icons from '@launchpad-ui/icons/sprite.svg';
import iconStyles from '@launchpad-ui/icons/style.css';
import launchpadStyles from '@launchpad-ui/tokens/index.css';
import themeStyles from '@launchpad-ui/tokens/themes.css';
import globalStyles from './styles/global.css';

export const links: LinksFunction = () => {
	return [
		{
			rel: 'preload',
			href: icons,
			as: 'image',
			type: 'image/svg+xml',
		},
		{ rel: 'stylesheet', href: launchpadStyles },
		{ rel: 'stylesheet', href: themeStyles },
		{ rel: 'stylesheet', href: globalStyles },
		{ rel: 'stylesheet', href: iconStyles },
		...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	];
};

export const meta: MetaFunction = () => {
	return [
		{
			name: 'charset',
			content: 'utf-8',
		},
		{
			name: 'viewport',
			content: 'width=device-width,initial-scale=1',
		},
	];
};

export default function App() {
	return (
		<Document>
			<IconContext.Provider value={{ path: icons }}>
				<Layout>
					<Outlet />
				</Layout>
			</IconContext.Provider>
		</Document>
	);
}

function Document({ children, title }: { children: ReactNode; title?: string }) {
	return (
		<html lang="en">
			<head>
				{title ? <title>{title}</title> : null}
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

function Layout({ children }: PropsWithChildren<unknown>) {
	return <main>{children}</main>;
}

export function ErrorBoundary() {
	const error = useRouteError();
	console.error(error);

	// when true, this is what used to go to `CatchBoundary`
	if (isRouteErrorResponse(error)) {
		// biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
		let message;
		switch (error.status) {
			case 401:
				message = <p>Oops! Looks like you tried to visit a page that you do not have access to.</p>;
				break;
			case 404:
				message = <p>Oops! Looks like you tried to visit a page that does not exist.</p>;
				break;

			default:
				throw new Error(error.data || error.statusText);
		}

		return (
			<Document title={`${error.status} ${error.statusText}`}>
				<Layout>
					<h1>
						{error.status}: {error.statusText}
					</h1>
					{message}
				</Layout>
			</Document>
		);
	}

	// Don't forget to typecheck with your own logic.
	// Any value can be thrown, not just errors!
	let errorMessage = 'Unknown error';
	if (error instanceof Error) {
		errorMessage = error.message;
	}

	return (
		<Document title="Error!">
			<Layout>
				<div>
					<h1>There was an error</h1>
					<p>{errorMessage}</p>
					<hr />
					<p>Hey, developer, you should replace this with what you want your users to see.</p>
				</div>
			</Layout>
		</Document>
	);
}
