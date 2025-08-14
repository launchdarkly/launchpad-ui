import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';

import { Avatar } from '../../src/Avatar';
import { Button } from '../../src/Button';
import { ButtonGroup } from '../../src/ButtonGroup';
import { Checkbox } from '../../src/Checkbox';
import { CheckboxGroup } from '../../src/CheckboxGroup';
import { Code } from '../../src/Code';
import { FieldGroup } from '../../src/FieldGroup';
import { FileTrigger } from '../../src/FileTrigger';
import { Group } from '../../src/Group';
import { Heading } from '../../src/Heading';
import { IconButton } from '../../src/IconButton';
import { Input } from '../../src/Input';
import { Label } from '../../src/Label';
import { Link } from '../../src/Link';
import { NumberField } from '../../src/NumberField';
import { RadioGroup } from '../../src/RadioGroup';
import { SearchField } from '../../src/SearchField';
import { Switch } from '../../src/Switch';
import { Text } from '../../src/Text';
import { TextField } from '../../src/TextField';
import { ToggleButton } from '../../src/ToggleButton';
import { ToggleButtonGroup } from '../../src/ToggleButtonGroup';
import { ToggleIconButton } from '../../src/ToggleIconButton';
import { Toolbar } from '../../src/Toolbar';
import { collectionsCategory } from './Collections';
import { dateAndTimeCategory } from './DateAndTime';
import { dragAndDropCategory } from './DragAndDrop';
import { navigationCategory } from './Navigation';
import { overlaysCategory } from './Overlays';
import { pickersCategory } from './Pickers';
// Import modular sections from separate files
import { recipesCategory } from './Recipes';
import { statusCategory } from './Status';

// Component showcase data
const componentCategories = [
	{
		category: 'Buttons',
		components: [
			{
				name: 'Button',
				component: (
					<div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
						<Button>Click me</Button>
						<Button variant="primary">Click me</Button>
						<Button variant="minimal">Click me</Button>
						<Button variant="destructive">Click me</Button>
					</div>
				),
				storyPath: 'components-buttons-button--docs',
			},
			{
				name: 'IconButton',
				component: (
					<div style={{ display: 'flex', gap: '10px' }}>
						<IconButton icon="add" aria-label="Add" />
						<IconButton icon="add" aria-label="Add" variant="primary" />
						<IconButton icon="add" aria-label="Add" variant="minimal" />
						<IconButton icon="add" aria-label="Add" variant="destructive" />
					</div>
				),
				storyPath: 'components-buttons-iconbutton--docs',
			},
			{
				name: 'ButtonGroup',
				component: (
					<div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
						<ButtonGroup>
							<Button>First</Button>
							<Button variant="primary">Second</Button>
						</ButtonGroup>
						<ButtonGroup spacing="compact">
							<Button>First</Button>
							<Button variant="primary">Second</Button>
						</ButtonGroup>
						<ButtonGroup spacing="large">
							<Button>First</Button>
							<Button variant="primary">Second</Button>
						</ButtonGroup>
					</div>
				),
				storyPath: 'components-buttons-buttongroup--docs',
			},
			{
				name: 'FileTrigger',
				component: (
					<FileTrigger>
						<Button>Select File</Button>
					</FileTrigger>
				),
				storyPath: 'components-buttons-filetrigger--docs',
			},
			{
				name: 'ToggleButton',
				component: (
					<div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
						<ToggleButton>Toggle</ToggleButton>
						<ToggleButton variant="primary">Toggle</ToggleButton>
						<ToggleButton variant="minimal">Toggle</ToggleButton>
						<ToggleButton variant="destructive">Toggle</ToggleButton>
					</div>
				),
				storyPath: 'components-buttons-togglebutton--docs',
			},
			{
				name: 'ToggleButtonGroup',
				component: (
					<ToggleButtonGroup>
						<ToggleButton id="1" isSelected>
							First
						</ToggleButton>
						<ToggleButton id="2">Second</ToggleButton>
						<ToggleButton id="3">Third</ToggleButton>
					</ToggleButtonGroup>
				),
				storyPath: 'components-buttons-togglebutton-togglebuttongroup--docs',
			},
			{
				name: 'ToggleIconButton',
				component: (
					<div style={{ display: 'flex', gap: '10px' }}>
						<ToggleIconButton icon="star" aria-label="Star" />
						<ToggleIconButton icon="star" aria-label="Star" variant="primary" />
						<ToggleIconButton icon="star" aria-label="Star" variant="minimal" />
						<ToggleIconButton icon="star" aria-label="Star" variant="destructive" />
					</div>
				),
				storyPath: 'components-buttons-toggleiconbutton--docs',
			},
		],
	},
	{
		category: 'Content',
		components: [
			{
				name: 'Text',
				component: (
					<div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
						<Text size="large">Large text</Text>
						<Text size="medium">Medium text</Text>
						<Text size="small">Small text</Text>
					</div>
				),
				storyPath: 'components-content-text--docs',
			},
			{
				name: 'Heading',
				component: (
					<div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
						<Heading size="large">Large heading</Heading>
						<Heading size="medium">Medium heading</Heading>
						<Heading size="small">Small heading</Heading>
					</div>
				),
				storyPath: 'components-content-heading--docs',
			},
			{
				name: 'Label',
				component: (
					<div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
						<Label>Form Label</Label>
						<Label size="small">Form Label</Label>
					</div>
				),
				storyPath: 'components-content-label--docs',
			},
			{
				name: 'Code',
				component: (
					<div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
						<Code size="medium">console.log('hello')</Code>
						<Code>console.log('hello')</Code>
					</div>
				),
				storyPath: 'components-content-code--docs',
			},
			{
				name: 'Avatar',
				component: (
					<Avatar
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
						alt="User"
					/>
				),
				storyPath: 'components-content-avatar--docs',
			},
			{
				name: 'Group',
				component: (
					<Group>
						<Text>Grouped content</Text>
					</Group>
				),
				storyPath: 'components-content-group--docs',
			},
			{
				name: 'Toolbar',
				component: (
					<Toolbar>
						<Button>Action 1</Button>
						<Button>Action 2</Button>
					</Toolbar>
				),
				storyPath: 'components-content-toolbar--docs',
			},
		],
	},
	{
		category: 'Forms',
		components: [
			{
				name: 'TextField',
				component: (
					<TextField>
						<Label>Name</Label>
						<Input />
					</TextField>
				),
				storyPath: 'components-forms-textfield--docs',
			},
			{
				name: 'NumberField',
				component: (
					<NumberField>
						<Label>Age</Label>
						<Input />
					</NumberField>
				),
				storyPath: 'components-forms-numberfield--docs',
			},
			{
				name: 'SearchField',
				component: (
					<SearchField>
						<Label>Search</Label>
						<Input />
					</SearchField>
				),
				storyPath: 'components-forms-searchfield--docs',
			},
			{
				name: 'Checkbox',
				component: <Checkbox>Check me</Checkbox>,
				storyPath: 'components-forms-checkbox--docs',
			},
			{
				name: 'CheckboxGroup',
				component: (
					<CheckboxGroup>
						<Label>Options</Label>
						<Checkbox value="a">Option A</Checkbox>
						<Checkbox value="b">Option B</Checkbox>
					</CheckboxGroup>
				),
				storyPath: 'components-forms-checkboxgroup--docs',
			},
			{
				name: 'RadioGroup',
				component: (
					<RadioGroup>
						<Label>Choose one</Label>
						{/* Radio items would go here */}
					</RadioGroup>
				),
				storyPath: 'components-forms-radiogroup--docs',
			},
			{
				name: 'Switch',
				component: <Switch>Toggle setting</Switch>,
				storyPath: 'components-forms-switch--docs',
			},
			{
				name: 'FieldGroup',
				component: (
					<FieldGroup>
						<TextField>
							<Label>Field 1</Label>
							<Input />
						</TextField>
					</FieldGroup>
				),
				storyPath: 'components-forms-fieldgroup--docs',
			},
		],
	},
	navigationCategory,
	collectionsCategory,
	statusCategory,
	pickersCategory,
	overlaysCategory,
	dateAndTimeCategory,
	dragAndDropCategory,
	recipesCategory,
];

// Component card styling
const cardStyles = {
	borderRadius: vars.borderRadius.medium,
	padding: vars.spacing[400],
	aspectRatio: '1',
	display: 'flex',
	flexDirection: 'column' as const,
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	backgroundColor: vars.color.bg.ui.secondary,
	textDecoration: 'none',
	color: 'inherit',
	transition: 'all 0.2s ease',
};

const ComponentCard = ({
	name,
	component,
	storyPath,
	hideCodeLink = false,
}: {
	name: string;
	component: React.ReactNode;
	storyPath: string;
	hideCodeLink?: boolean;
}) => {
	return (
		<div style={cardStyles}>
			<Heading size="medium">{name}</Heading>
			<div
				style={{
					flex: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				{component}
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					width: '100%',
					alignItems: 'flex-end',
					gap: vars.spacing[500],
				}}
			>
				{!hideCodeLink && (
					<Link
						href={`https://github.com/launchdarkly/launchpad-ui/tree/main/packages/components/src/${name}.tsx`}
						target="_blank"
						rel="noopener noreferrer"
						variant="subtle"
					>
						<Icon name="copy-code" size="small" />
						<Text size="medium" style={{ padding: vars.spacing[200] }}>
							Code
						</Text>
					</Link>
				)}
				<Link
					href={`${window.location.origin}/?path=/docs/${storyPath}`}
					target="_blank"
					rel="noopener noreferrer"
					variant="subtle"
				>
					<Icon name="arrow-up-right" size="small" />
					<Text size="medium" style={{ padding: vars.spacing[200] }}>
						Docs
					</Text>
				</Link>
			</div>
		</div>
	);
};

const Overview = () => {
	return (
		<div style={{ padding: vars.spacing[400] }}>
			{componentCategories.map(({ category, components }) => (
				<div key={category} style={{ marginBottom: vars.spacing[600] }}>
					<Heading size="large">{category}</Heading>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 310px))',
							gap: vars.spacing[300],
						}}
					>
						{components.map(({ name, component, storyPath }) => (
							<ComponentCard
								key={name}
								name={name}
								component={component}
								storyPath={storyPath}
								hideCodeLink={category === 'Recipes'}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

const meta: Meta<typeof Overview> = {
	title: 'Component Overview',
	component: Overview,
	tags: ['!dev'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof Overview>;

/**
 * Here you can find all available components in the design system. Click on any component to view its documentation and examples.
 */
export const AllComponents: Story = {
	name: 'All Components',
	render: () => <Overview />,
	parameters: {
		controls: { disable: true },
		actions: { disable: true },

		canvas: {
			layout: 'fullscreen',
		},
	},
};
