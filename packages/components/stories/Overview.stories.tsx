import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';

// Import all components for the overview
import { Alert } from '../src/Alert';
import { Avatar } from '../src/Avatar';
import { Breadcrumb, Breadcrumbs } from '../src/Breadcrumbs';
import { Button } from '../src/Button';
import { ButtonGroup } from '../src/ButtonGroup';
import { Checkbox } from '../src/Checkbox';
import { CheckboxGroup } from '../src/CheckboxGroup';
import { Code } from '../src/Code';
import { DateField } from '../src/DateField';
import { Disclosure } from '../src/Disclosure';
import { DisclosureGroup } from '../src/DisclosureGroup';
import { DropZone } from '../src/DropZone';
import { FieldGroup } from '../src/FieldGroup';
import { FileTrigger } from '../src/FileTrigger';
import { GridList, GridListItem } from '../src/GridList';
import { Group } from '../src/Group';
import { Heading } from '../src/Heading';
import { IconButton } from '../src/IconButton';
import { Input } from '../src/Input';
import { Label } from '../src/Label';
import { Link } from '../src/Link';
import { LinkButton } from '../src/LinkButton';
import { LinkIconButton } from '../src/LinkIconButton';
import { ListBox, ListBoxItem } from '../src/ListBox';
import { Meter } from '../src/Meter';
import { NumberField } from '../src/NumberField';
import { ProgressBar } from '../src/ProgressBar';
import { RadioGroup } from '../src/RadioGroup';
import { SearchField } from '../src/SearchField';
import { Switch } from '../src/Switch';
import { Cell, Column, Row, Table, TableBody, TableHeader } from '../src/Table';
import { Tab, TabList, TabPanel, Tabs } from '../src/Tabs';
import { Tag, TagGroup, TagList } from '../src/TagGroup';
import { Text } from '../src/Text';
import { TextField } from '../src/TextField';
import { ToggleButton } from '../src/ToggleButton';
import { ToggleButtonGroup } from '../src/ToggleButtonGroup';
import { ToggleIconButton } from '../src/ToggleIconButton';
import { Toolbar } from '../src/Toolbar';
import { Tree, TreeItem, TreeItemContent } from '../src/Tree';

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
	{
		category: 'Navigation',
		components: [
			{
				name: 'Link',
				component: (
					<div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
						<Link href="#">Sample Link</Link>
						<Link href="#" variant="subtle">
							Sample Link
						</Link>
					</div>
				),
				storyPath: 'components-navigation-link--docs',
			},
			{
				name: 'LinkButton',
				component: <LinkButton href="#">Link Button</LinkButton>,
				storyPath: 'components-navigation-linkbutton--docs',
			},
			{
				name: 'LinkIconButton',
				component: <LinkIconButton icon="link" aria-label="External" href="#" />,
				storyPath: 'components-navigation-linkiconbutton--docs',
			},
			{
				name: 'Breadcrumbs',
				component: (
					<Breadcrumbs>
						<Breadcrumb>
							<Link href="#">Home</Link>
						</Breadcrumb>
						<Breadcrumb>
							<Link href="#">Category</Link>
						</Breadcrumb>
						<Breadcrumb>
							<Link>Page</Link>
						</Breadcrumb>
					</Breadcrumbs>
				),
				storyPath: 'components-navigation-breadcrumbs--docs',
			},
			{
				name: 'Disclosure',
				component: (
					<Disclosure>
						<Button slot="trigger">Expand</Button>
						<Text>Hidden content</Text>
					</Disclosure>
				),
				storyPath: 'components-navigation-disclosure--docs',
			},
			{
				name: 'DisclosureGroup',
				component: (
					<DisclosureGroup>
						<Disclosure>
							<Button slot="trigger">Item 1</Button>
							<Text>Content 1</Text>
						</Disclosure>
					</DisclosureGroup>
				),
				storyPath: 'components-navigation-disclosuregroup--docs',
			},
			{
				name: 'Tabs',
				component: (
					<Tabs>
						<TabList>
							<Tab id="tab1">Tab 1</Tab>
							<Tab id="tab2">Tab 2</Tab>
						</TabList>
						<TabPanel id="tab1">Content 1</TabPanel>
						<TabPanel id="tab2">Content 2</TabPanel>
					</Tabs>
				),
				storyPath: 'components-navigation-tabs--docs',
			},
		],
	},
	{
		category: 'Collections',
		components: [
			{
				name: 'Table',
				component: (
					<Table style={{ width: '200px' }}>
						<TableHeader>
							<Column>Name</Column>
							<Column>Status</Column>
						</TableHeader>
						<TableBody>
							<Row>
								<Cell>Item 1</Cell>
								<Cell>Active</Cell>
							</Row>
						</TableBody>
					</Table>
				),
				storyPath: 'components-collections-table--docs',
			},
			{
				name: 'GridList',
				component: (
					<GridList style={{ width: '200px' }} aria-label="Items">
						<GridListItem>Item 1</GridListItem>
						<GridListItem>Item 2</GridListItem>
						<GridListItem>Item 3</GridListItem>
					</GridList>
				),
				storyPath: 'components-collections-gridlist--docs',
			},
			{
				name: 'ListBox',
				component: (
					<ListBox style={{ width: '200px' }} aria-label="Options">
						<ListBoxItem>Option 1</ListBoxItem>
						<ListBoxItem>Option 2</ListBoxItem>
						<ListBoxItem>Option 3</ListBoxItem>
					</ListBox>
				),
				storyPath: 'components-collections-listbox--docs',
			},
			{
				name: 'Tree',
				component: (
					<Tree style={{ width: '200px' }}>
						<TreeItem textValue="Item 1">
							<TreeItemContent>Item 1</TreeItemContent>
						</TreeItem>
						<TreeItem textValue="Item 2">
							<TreeItemContent>Item 2</TreeItemContent>
						</TreeItem>
					</Tree>
				),
				storyPath: 'components-collections-tree--docs',
			},
			{
				name: 'TagGroup',
				component: (
					<TagGroup>
						<Label>Tags</Label>
						<TagList>
							<Tag>React</Tag>
							<Tag>TypeScript</Tag>
						</TagList>
					</TagGroup>
				),
				storyPath: 'components-collections-taggroup--docs',
			},
			{
				name: 'Menu',
				component: <Button>Open Menu</Button>,
				storyPath: 'components-collections-menu--docs',
			},
		],
	},
	{
		category: 'Status',
		components: [
			{
				name: 'Alert',
				component: <Alert>This is an alert message</Alert>,
				storyPath: 'components-status-alert--docs',
			},
			{
				name: 'Toast',
				component: (
					<div
						style={{
							padding: vars.spacing[200],
							backgroundColor: vars.color.bg.feedback.info,
							borderRadius: vars.borderRadius.medium,
							color: vars.color.text.ui.primary.base,
						}}
					>
						Toast notification
					</div>
				),
				storyPath: 'components-status-toast--docs',
			},
			{
				name: 'ProgressBar',
				component: <ProgressBar value={50} />,
				storyPath: 'components-status-progressbar--docs',
			},
			{
				name: 'Meter',
				component: <Meter value={75} />,
				storyPath: 'components-status-meter--docs',
			},
		],
	},
	{
		category: 'Pickers',
		components: [
			{
				name: 'Select',
				component: (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
						<Label>Choose option</Label>
						<Button style={{ justifyContent: 'space-between' }}>
							Select option
							<span>▼</span>
						</Button>
					</div>
				),
				storyPath: 'components-pickers-select--docs',
			},
			{
				name: 'ComboBox',
				component: (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
						<Label>Search options</Label>
						<div style={{ display: 'flex' }}>
							<Input placeholder="Type to search..." />
							<Button>⌄</Button>
						</div>
					</div>
				),
				storyPath: 'components-pickers-combobox--docs',
			},
		],
	},
	{
		category: 'Overlays',
		components: [
			{
				name: 'Modal',
				component: <Button>Open Modal</Button>,
				storyPath: 'components-overlays-modal--docs',
			},
			{
				name: 'Popover',
				component: <Button>Open Popover</Button>,
				storyPath: 'components-overlays-popover--docs',
			},
			{
				name: 'Tooltip',
				component: <Button>Hover for Tooltip</Button>,
				storyPath: 'components-overlays-tooltip--docs',
			},
		],
	},
	{
		category: 'Date and Time',
		components: [
			{
				name: 'Calendar',
				component: (
					<div
						style={{
							width: '100px',
							height: '80px',
							border: `1px solid ${vars.color.border.ui.primary}`,
							borderRadius: vars.borderRadius.medium,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: '12px',
						}}
					>
						<div style={{ fontWeight: 'bold' }}>Dec 2024</div>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(7, 1fr)',
								gap: '1px',
								fontSize: '10px',
								marginTop: '4px',
							}}
						>
							<div>S</div>
							<div>M</div>
							<div>T</div>
							<div>W</div>
							<div>T</div>
							<div>F</div>
							<div>S</div>
						</div>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(7, 1fr)',
								gap: '1px',
								fontSize: '8px',
								marginTop: '2px',
							}}
						>
							<div />
							<div />
							<div />
							<div />
							<div />
							<div>1</div>
							<div>2</div>
						</div>
					</div>
				),
				storyPath: 'components-date-and-time-calendar--docs',
			},
			{
				name: 'DateField',
				component: (
					<DateField>
						<Label>Date</Label>
						<Input />
					</DateField>
				),
				storyPath: 'components-date-and-time-datefield--docs',
			},
			{
				name: 'DatePicker',
				component: (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
						<Label>Pick a date</Label>
						<Group>
							<Input placeholder="MM/DD/YYYY" />
							<Button>📅</Button>
						</Group>
					</div>
				),
				storyPath: 'components-date-and-time-datepicker--docs',
			},
		],
	},
	{
		category: 'Drag and drop',
		components: [
			{
				name: 'DropZone',
				component: (
					<DropZone>
						<Text>Drop files here</Text>
					</DropZone>
				),
				storyPath: 'components-drag-and-drop-dropzone--docs',
			},
		],
	},
	{
		category: 'Recipes',
		components: [
			{
				name: 'CopyToClipboard',
				component: (
					<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<Button size="small">Copy content 📋</Button>
					</div>
				),
				storyPath: 'recipes-copytoclipboard--docs',
			},
			{
				name: 'ComboBoxDialog',
				component: (
					<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<Button>Trigger test</Button>
						<span style={{ fontSize: '12px', color: vars.color.text.ui.secondary }}>+ Dialog</span>
					</div>
				),
				storyPath: 'recipes-comboboxdialog--docs',
			},
			{
				name: 'DisabledWithTooltip',
				component: (
					<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<Button isDisabled>Disabled Button</Button>
						<span style={{ fontSize: '12px', color: vars.color.text.ui.secondary }}>+ Tooltip</span>
					</div>
				),
				storyPath: 'recipes-disabledwithtooltip--docs',
			},
			{
				name: 'ListBoxTooltip',
				component: (
					<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<div
							style={{
								width: '120px',
								height: '20px',
								border: `1px solid ${vars.color.border.ui.primary}`,
								borderRadius: '4px',
								display: 'flex',
								alignItems: 'center',
								padding: '0 8px',
								fontSize: '12px',
							}}
						>
							ListBox
						</div>
						<span style={{ fontSize: '12px', color: vars.color.text.ui.secondary }}>+ Tooltip</span>
					</div>
				),
				storyPath: 'recipes-listboxtooltip--docs',
			},
			{
				name: 'Pagination',
				component: (
					<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<Button size="small">1</Button>
						<Button size="small">2</Button>
						<Button size="small">3</Button>
						<span style={{ fontSize: '12px', color: vars.color.text.ui.secondary }}>...</span>
					</div>
				),
				storyPath: 'recipes-pagination--docs',
			},
			{
				name: 'RadioButtonGroup',
				component: (
					<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<RadioGroup>
							<Label>Options</Label>
						</RadioGroup>
						<span style={{ fontSize: '12px', color: vars.color.text.ui.secondary }}>+ Group</span>
					</div>
				),
				storyPath: 'recipes-radiobuttongroup--docs',
			},
		],
	},
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
}: {
	name: string;
	component: React.ReactNode;
	storyPath: string;
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
							<ComponentCard key={name} name={name} component={component} storyPath={storyPath} />
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
