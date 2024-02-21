import { Menu, MenuItem } from '@launchpad-ui/core';
import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import type { Component } from '~/data.server';
import { getComponents } from '~/data.server';

type LoaderData = { components: Array<Component> };

export const loader: LoaderFunction = async () => {
	return json<LoaderData>({
		components: await getComponents(),
	});
};

export const meta: MetaFunction = () => {
	return [{ title: 'Remix SSR' }, { name: 'description', content: 'SSR component testing' }];
};

export default function Index() {
	const data = useLoaderData<LoaderData>();

	return (
		<>
			<h1>Remix SSR</h1>
			<Menu>
				{data.components.map((component) => (
					<MenuItem asChild key={component.to}>
						<Link to={component.to} prefetch='intent' target='_blank'>
							{component.name}
						</Link>
					</MenuItem>
				))}
			</Menu>
		</>
	);
}
