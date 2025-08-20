import { Breadcrumbs } from '../../src/Breadcrumbs';
import { Disclosure } from '../../src/Disclosure';
import { DisclosureGroup } from '../../src/DisclosureGroup';
// Import the actual components for custom previews
import { Link } from '../../src/Link';
import { LinkButton } from '../../src/LinkButton';
import { LinkIconButton } from '../../src/LinkIconButton';
import { Tabs } from '../../src/Tabs';
import { Example as BreadcrumbsExample } from '../Breadcrumbs.stories';
import { Example as DisclosureExample } from '../Disclosure.stories';
import { Example as DisclosureGroupExample } from '../DisclosureGroup.stories';
// Import actual navigation stories
import { Example as LinkExample } from '../Link.stories';
import { Example as LinkButtonExample } from '../LinkButton.stories';
import { Example as LinkIconButtonExample } from '../LinkIconButton.stories';
import { Example as TabsExample } from '../Tabs.stories';

// Custom wrapper for Link that renders the story properly
const LinkPreview = () => {
	const storyArgs = LinkExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
				<Link {...storyArgs}>{storyArgs.children}</Link>
				<Link {...storyArgs} variant="subtle">
					{storyArgs.children}
				</Link>
			</div>
		</div>
	);
};

// Custom wrapper for LinkButton that renders the story properly
const LinkButtonPreview = () => {
	const storyArgs = LinkButtonExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<LinkButton {...storyArgs}>{storyArgs.children}</LinkButton>
		</div>
	);
};

// Custom wrapper for LinkIconButton that renders the story properly
const LinkIconButtonPreview = () => {
	const storyArgs = LinkIconButtonExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<LinkIconButton icon="add" aria-label="create" href="#" {...storyArgs} />
		</div>
	);
};

// Custom wrapper for Breadcrumbs that renders the story properly
const BreadcrumbsPreview = () => {
	const storyArgs = BreadcrumbsExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<Breadcrumbs {...storyArgs}>{storyArgs.children}</Breadcrumbs>
		</div>
	);
};

// Custom wrapper for Tabs that renders the story properly
const TabsPreview = () => {
	const storyArgs = TabsExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<Tabs {...storyArgs}>{storyArgs.children}</Tabs>
		</div>
	);
};

// Custom wrapper for Disclosure that renders the story properly
const DisclosurePreview = () => {
	const storyArgs = DisclosureExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<Disclosure {...storyArgs}>{storyArgs.children}</Disclosure>
		</div>
	);
};

// Custom wrapper for DisclosureGroup that renders the story properly
const DisclosureGroupPreview = () => {
	const storyArgs = DisclosureGroupExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<DisclosureGroup {...storyArgs}>{storyArgs.children}</DisclosureGroup>
		</div>
	);
};

// Navigation category configuration
export const navigationCategory = {
	category: 'Navigation',
	components: [
		{
			name: 'Link',
			component: <LinkPreview />,
			storyPath: 'components-navigation-link--docs',
		},
		{
			name: 'LinkButton',
			component: <LinkButtonPreview />,
			storyPath: 'components-navigation-linkbutton--docs',
		},
		{
			name: 'LinkIconButton',
			component: <LinkIconButtonPreview />,
			storyPath: 'components-navigation-linkiconbutton--docs',
		},
		{
			name: 'Breadcrumbs',
			component: <BreadcrumbsPreview />,
			storyPath: 'components-navigation-breadcrumbs--docs',
		},
		{
			name: 'Disclosure',
			component: <DisclosurePreview />,
			storyPath: 'components-navigation-disclosure--docs',
		},
		{
			name: 'DisclosureGroup',
			component: <DisclosureGroupPreview />,
			storyPath: 'components-navigation-disclosuregroup--docs',
		},
		{
			name: 'Tabs',
			component: <TabsPreview />,
			storyPath: 'components-navigation-tabs--docs',
		},
	],
};
