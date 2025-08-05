import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentPropsWithoutRef } from 'react';

import { Box } from '@launchpad-ui/box';
import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { type Fragment, useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';

import { Alert } from '../../src/Alert';
import { Avatar } from '../../src/Avatar';
import { Button } from '../../src/Button';
import { ButtonGroup } from '../../src/ButtonGroup';
import { Dialog, DialogTrigger } from '../../src/Dialog';
import { GridList, GridListItem } from '../../src/GridList';
import { Heading } from '../../src/Heading';
import { IconButton } from '../../src/IconButton';
import { Label } from '../../src/Label';
import { ListBox, ListBoxItem } from '../../src/ListBox';
import { Modal, ModalOverlay } from '../../src/Modal';
import { Select } from '../../src/Select';
import { Text } from '../../src/Text';
import { Tooltip, TooltipTrigger } from '../../src/Tooltip';

const Container = (props: ComponentPropsWithoutRef<typeof Fragment>) => <>{props.children}</>;

// Mock Figma file data structure
const figmaLayouts = [
	{
		id: 'dashboard',
		name: 'Dashboard Layout',
		description: 'Complete dashboard with navigation, cards, and data visualization',
		components: ['Button', 'Alert', 'GridList', 'Modal'],
		preview:
			'A comprehensive dashboard interface featuring primary actions, status alerts, and organized content grids.',
		category: 'Application',
		complexity: 'High',
	},
	{
		id: 'form',
		name: 'Form Layout',
		description: 'Multi-step form with validation and user input components',
		components: ['Button', 'Select', 'Group', 'Alert'],
		preview:
			'Structured form layout with input groupings, dropdown selections, and validation feedback.',
		category: 'Forms',
		complexity: 'Medium',
	},
	{
		id: 'navigation',
		name: 'Navigation Layout',
		description: 'Primary navigation with tooltips and user profile',
		components: ['Button', 'Tooltip', 'Avatar', 'IconButton'],
		preview: 'Clean navigation interface with user context and helpful tooltips for better UX.',
		category: 'Navigation',
		complexity: 'Low',
	},
	{
		id: 'modal',
		name: 'Modal Dialog Layout',
		description: 'Complex modal with multiple sections and actions',
		components: ['Modal', 'ButtonGroup', 'Alert', 'Select'],
		preview: 'Multi-section modal dialog with contextual alerts and grouped action buttons.',
		category: 'Overlays',
		complexity: 'Medium',
	},
	{
		id: 'grid',
		name: 'Data Grid Layout',
		description: 'Interactive data grid with selection and actions',
		components: ['GridList', 'IconButton', 'Tooltip', 'Select'],
		preview: 'Flexible data grid supporting selection, inline actions, and filtering capabilities.',
		category: 'Data Display',
		complexity: 'High',
	},
];

// Component that renders a preview based on selected layout
const LayoutPreview = ({ layoutId }: { layoutId: string }) => {
	const layout = figmaLayouts.find((l) => l.id === layoutId);

	if (!layout) return null;

	switch (layoutId) {
		case 'dashboard':
			return (
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: vars.spacing[400],
						padding: vars.spacing[500],
						border: '1px solid var(--lp-color-border-ui-secondary)',
						borderRadius: vars.borderRadius.regular,
						backgroundColor: 'var(--lp-color-bg-ui-primary)',
					}}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Heading size="large">Dashboard Overview</Heading>
						<ButtonGroup>
							<Button variant="primary" size="medium">
								<Icon name="add" size="small" />
								Create New
							</Button>
							<Button variant="default" size="medium">
								Export Data
							</Button>
						</ButtonGroup>
					</div>
					<Alert status="info" variant="inline">
						Welcome to your dashboard! You have 3 new notifications.
					</Alert>
					<GridList aria-label="Dashboard items" selectionMode="multiple">
						<GridListItem textValue="Active Projects">
							<Icon name="folders" size="small" />
							<div>
								<Text bold>Active Projects</Text>
								<Text size="small" color="secondary">
									12 items
								</Text>
							</div>
						</GridListItem>
						<GridListItem textValue="Recent Files">
							<Icon name="copy-content" size="small" />
							<div>
								<Text bold>Recent Files</Text>
								<Text size="small" color="secondary">
									8 items
								</Text>
							</div>
						</GridListItem>
						<GridListItem textValue="Team Members">
							<Icon name="person" size="small" />
							<div>
								<Text bold>Team Members</Text>
								<Text size="small" color="secondary">
									15 online
								</Text>
							</div>
						</GridListItem>
					</GridList>
				</Box>
			);

		case 'form':
			return (
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: vars.spacing[400],
						padding: vars.spacing[500],
						border: '1px solid var(--lp-color-border-ui-secondary)',
						borderRadius: vars.borderRadius.regular,
						backgroundColor: 'var(--lp-color-bg-ui-primary)',
						maxWidth: '400px',
					}}
				>
					<Heading size="medium">Project Setup</Heading>
					<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[300] }}>
						<div>
							<Label>Project Type</Label>
							<Select placeholder="Select project type">
								<ListBox>
									<ListBoxItem>Web Application</ListBoxItem>
									<ListBoxItem>Mobile App</ListBoxItem>
									<ListBoxItem>Design System</ListBoxItem>
								</ListBox>
							</Select>
						</div>
						<div>
							<Label>Team Size</Label>
							<Select placeholder="Select team size">
								<ListBox>
									<ListBoxItem>1-5 members</ListBoxItem>
									<ListBoxItem>6-15 members</ListBoxItem>
									<ListBoxItem>16+ members</ListBoxItem>
								</ListBox>
							</Select>
						</div>
					</div>
					<Alert status="warning" variant="inline">
						Please review your selections before proceeding.
					</Alert>
					<ButtonGroup>
						<Button variant="primary">Continue</Button>
						<Button variant="default">Cancel</Button>
					</ButtonGroup>
				</Box>
			);

		case 'navigation':
			return (
				<Box
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: vars.spacing[400],
						border: '1px solid var(--lp-color-border-ui-secondary)',
						borderRadius: vars.borderRadius.regular,
						backgroundColor: 'var(--lp-color-bg-ui-primary)',
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: vars.spacing[500] }}>
						<Heading size="small">LaunchPad</Heading>
						<ButtonGroup>
							<TooltipTrigger>
								<Button variant="minimal" size="medium">
									Dashboard
								</Button>
								<Tooltip>View your main dashboard</Tooltip>
							</TooltipTrigger>
							<TooltipTrigger>
								<Button variant="minimal" size="medium">
									Projects
								</Button>
								<Tooltip>Manage your projects</Tooltip>
							</TooltipTrigger>
							<TooltipTrigger>
								<Button variant="minimal" size="medium">
									Settings
								</Button>
								<Tooltip>Configure your preferences</Tooltip>
							</TooltipTrigger>
						</ButtonGroup>
					</div>
					<div style={{ display: 'flex', alignItems: 'center', gap: vars.spacing[300] }}>
						<TooltipTrigger>
							<IconButton
								icon="notifications"
								variant="minimal"
								size="medium"
								aria-label="Notifications"
							/>
							<Tooltip>View notifications</Tooltip>
						</TooltipTrigger>
						<Avatar>JD</Avatar>
					</div>
				</Box>
			);

		case 'modal':
			return (
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: vars.spacing[400],
						padding: vars.spacing[500],
						border: '1px solid var(--lp-color-border-ui-secondary)',
						borderRadius: vars.borderRadius.regular,
						backgroundColor: 'var(--lp-color-bg-ui-primary)',
						maxWidth: '500px',
					}}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Heading size="medium">Publish Changes</Heading>
						<IconButton icon="cancel" variant="minimal" size="small" aria-label="Close" />
					</div>
					<Alert status="neutral" variant="inline">
						You're about to publish 12 changes to production.
					</Alert>
					<div>
						<Label>Deployment Environment</Label>
						<Select placeholder="Select environment">
							<ListBox>
								<ListBoxItem>Production</ListBoxItem>
								<ListBoxItem>Staging</ListBoxItem>
								<ListBoxItem>Development</ListBoxItem>
							</ListBox>
						</Select>
					</div>
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<ButtonGroup>
							<Button variant="default">Cancel</Button>
							<Button variant="primary">Publish Now</Button>
						</ButtonGroup>
					</div>
				</Box>
			);

		case 'grid':
			return (
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: vars.spacing[400],
						padding: vars.spacing[500],
						border: '1px solid var(--lp-color-border-ui-secondary)',
						borderRadius: vars.borderRadius.regular,
						backgroundColor: 'var(--lp-color-bg-ui-primary)',
					}}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Heading size="medium">File Explorer</Heading>
						<div style={{ display: 'flex', alignItems: 'center', gap: vars.spacing[300] }}>
							<Select placeholder="Sort by">
								<ListBox>
									<ListBoxItem>Name</ListBoxItem>
									<ListBoxItem>Date Modified</ListBoxItem>
									<ListBoxItem>Size</ListBoxItem>
								</ListBox>
							</Select>
							<TooltipTrigger>
								<IconButton
									icon="chevron-down"
									variant="minimal"
									size="medium"
									aria-label="Grid view"
								/>
								<Tooltip>Switch to grid view</Tooltip>
							</TooltipTrigger>
						</div>
					</div>
					<GridList aria-label="Files" selectionMode="multiple">
						<GridListItem textValue="Design Assets">
							<Icon name="folders" size="small" />
							<div style={{ flex: 1 }}>
								<Text bold>Design Assets</Text>
								<Text size="small" color="secondary">
									Modified 2 hours ago
								</Text>
							</div>
							<TooltipTrigger>
								<IconButton
									icon="more-horiz"
									variant="minimal"
									size="small"
									aria-label="More options"
								/>
								<Tooltip>More options</Tooltip>
							</TooltipTrigger>
						</GridListItem>
						<GridListItem textValue="Components">
							<Icon name="package" size="small" />
							<div style={{ flex: 1 }}>
								<Text bold>Components</Text>
								<Text size="small" color="secondary">
									Modified 1 day ago
								</Text>
							</div>
							<TooltipTrigger>
								<IconButton
									icon="more-horiz"
									variant="minimal"
									size="small"
									aria-label="More options"
								/>
								<Tooltip>More options</Tooltip>
							</TooltipTrigger>
						</GridListItem>
						<GridListItem textValue="Documentation">
							<Icon name="copy-content" size="small" />
							<div style={{ flex: 1 }}>
								<Text bold>Documentation</Text>
								<Text size="small" color="secondary">
									Modified 3 days ago
								</Text>
							</div>
							<TooltipTrigger>
								<IconButton
									icon="more-horiz"
									variant="minimal"
									size="small"
									aria-label="More options"
								/>
								<Tooltip>More options</Tooltip>
							</TooltipTrigger>
						</GridListItem>
					</GridList>
				</Box>
			);

		default:
			return (
				<Box
					style={{
						padding: vars.spacing[500],
						textAlign: 'center',
						border: '1px solid var(--lp-color-border-ui-secondary)',
						borderRadius: vars.borderRadius.regular,
						backgroundColor: 'var(--lp-color-bg-ui-secondary)',
					}}
				>
					<Text color="secondary">Select a layout to see preview</Text>
				</Box>
			);
	}
};

const meta: Meta<typeof Container> = {
	component: Container,
	decorators: [
		(Story) => (
			<div style={{ minHeight: 'var(--lp-size-208)', padding: vars.spacing[400] }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		children: {
			control: false,
		},
	},
	tags: ['!autodocs'],
	title: 'Recipes/Figma File Layout Selector',
};

export default meta;

type Story = StoryObj<typeof Container>;

export const FigmaFileLayoutSelector: Story = {
	args: {
		children: (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: vars.spacing[600],
					maxWidth: '1200px',
				}}
			>
				{/* Header Section */}
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[300] }}>
					<Heading size="large">Figma File Layout Selector</Heading>
					<Text color="secondary">
						Choose from different layout patterns based on Figma design files. Each layout
						demonstrates proper component mapping using the LaunchPad design system.
					</Text>
				</div>

				{/* Layout Selector */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '300px 1fr',
						gap: vars.spacing[500],
						alignItems: 'start',
					}}
				>
					{/* Left Panel - Layout Options */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[400] }}>
						<div>
							<Label>Layout Category</Label>
							<Select placeholder="All Categories">
								<ListBox>
									<ListBoxItem>All Categories</ListBoxItem>
									<ListBoxItem>Application</ListBoxItem>
									<ListBoxItem>Forms</ListBoxItem>
									<ListBoxItem>Navigation</ListBoxItem>
									<ListBoxItem>Overlays</ListBoxItem>
									<ListBoxItem>Data Display</ListBoxItem>
								</ListBox>
							</Select>
						</div>

						<div>
							<Label>Available Layouts</Label>
							<GridList
								aria-label="Layout options"
								selectionMode="single"
								defaultSelectedKeys={['dashboard']}
							>
								{figmaLayouts.map((layout) => (
									<GridListItem key={layout.id} textValue={layout.name} id={layout.id}>
										<div
											style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[200] }}
										>
											<Text bold>{layout.name}</Text>
											<Text size="small" color="secondary">
												{layout.category} • {layout.complexity}
											</Text>
											<div style={{ display: 'flex', gap: vars.spacing[200], flexWrap: 'wrap' }}>
												{layout.components.slice(0, 3).map((component) => (
													<Text
														key={component}
														size="small"
														style={{
															padding: `${vars.spacing[200]} ${vars.spacing[200]}`,
															backgroundColor: 'var(--lp-color-bg-ui-secondary)',
															borderRadius: vars.borderRadius.regular,
														}}
													>
														{component}
													</Text>
												))}
												{layout.components.length > 3 && (
													<Text
														size="small"
														style={{
															padding: `${vars.spacing[200]} ${vars.spacing[200]}`,
															backgroundColor: 'var(--lp-color-bg-ui-secondary)',
															borderRadius: vars.borderRadius.regular,
														}}
													>
														+{layout.components.length - 3}
													</Text>
												)}
											</div>
										</div>
									</GridListItem>
								))}
							</GridList>
						</div>

						<Alert status="info" variant="inline">
							These layouts are mapped from actual Figma design files using Code Connect.
						</Alert>
					</div>

					{/* Right Panel - Preview */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[400] }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
							<Label>Preview</Label>
							<ButtonGroup>
								<TooltipTrigger>
									<IconButton
										icon="copy-code"
										variant="minimal"
										size="small"
										aria-label="View code"
									/>
									<Tooltip>View implementation code</Tooltip>
								</TooltipTrigger>
								<TooltipTrigger>
									<IconButton
										icon="link-external"
										variant="minimal"
										size="small"
										aria-label="Open in Figma"
									/>
									<Tooltip>Open in Figma</Tooltip>
								</TooltipTrigger>
							</ButtonGroup>
						</div>

						{/* Dynamic Preview Area */}
						<LayoutPreview layoutId="dashboard" />

						{/* Layout Information */}
						<div
							style={{
								padding: vars.spacing[400],
								backgroundColor: 'var(--lp-color-bg-ui-secondary)',
								borderRadius: vars.borderRadius.regular,
							}}
						>
							<Text bold style={{ display: 'block', marginBottom: vars.spacing[200] }}>
								Dashboard Layout
							</Text>
							<Text size="small" color="secondary">
								Complete dashboard with navigation, cards, and data visualization. This layout
								demonstrates proper component composition using Button, Alert, GridList, and Modal
								components.
							</Text>
						</div>
					</div>
				</div>

				{/* Usage Information */}
				<div
					style={{
						padding: vars.spacing[500],
						backgroundColor: 'var(--lp-color-bg-ui-secondary)',
						borderRadius: vars.borderRadius.regular,
					}}
				>
					<Heading size="small" style={{ marginBottom: vars.spacing[300] }}>
						Component Mapping
					</Heading>
					<Text size="small" style={{ display: 'block', marginBottom: vars.spacing[300] }}>
						Each layout is connected to Figma using Code Connect, which maps design properties to
						component props:
					</Text>
					<ul style={{ margin: 0, paddingLeft: vars.spacing[500] }}>
						<li>
							<Text size="small">
								<strong>Button variants</strong> map to Figma button states (Primary, Default,
								Minimal, Destructive)
							</Text>
						</li>
						<li>
							<Text size="small">
								<strong>Alert status</strong> corresponds to Figma alert types (Info, Warning,
								Error, Success)
							</Text>
						</li>
						<li>
							<Text size="small">
								<strong>Modal sizes</strong> reflect Figma modal breakpoints (Small, Medium, Large)
							</Text>
						</li>
						<li>
							<Text size="small">
								<strong>GridList selection</strong> modes match Figma interaction states
							</Text>
						</li>
					</ul>
				</div>
			</div>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test layout selection interaction
		const layoutList = canvas.getByRole('grid', { name: /layout options/i });
		await expect(layoutList).toBeInTheDocument();

		// Test tooltip interaction
		const tooltipTriggers = canvas.getAllByRole('button', { name: /view code|open in figma/i });
		if (tooltipTriggers.length > 0) {
			await userEvent.hover(tooltipTriggers[0]);
		}
	},
	name: 'Figma File Layout Selector',
};

export const InteractiveLayoutSwitcher: Story = {
	render: () => {
		const [selectedLayoutId, setSelectedLayoutId] = useState('dashboard');
		const selectedLayout = figmaLayouts.find((l) => l.id === selectedLayoutId);

		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[500] }}>
				<div>
					<Heading size="large">Interactive Layout Switcher</Heading>
					<Text color="secondary">
						Dynamically switch between different Figma layouts and see real-time preview updates.
					</Text>
				</div>

				<div style={{ display: 'flex', gap: vars.spacing[400] }}>
					<ButtonGroup orientation="vertical">
						{figmaLayouts.map((layout) => (
							<Button
								key={layout.id}
								variant={selectedLayoutId === layout.id ? 'primary' : 'default'}
								size="medium"
								onPress={() => setSelectedLayoutId(layout.id)}
							>
								{layout.name}
							</Button>
						))}
					</ButtonGroup>

					<div style={{ flex: 1 }}>
						<LayoutPreview layoutId={selectedLayoutId} />

						{selectedLayout && (
							<div style={{ marginTop: vars.spacing[400] }}>
								<Text bold style={{ display: 'block', marginBottom: vars.spacing[200] }}>
									{selectedLayout.name}
								</Text>
								<Text size="small" color="secondary">
									{selectedLayout.preview}
								</Text>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	},
	name: 'Interactive Layout Switcher',
};

export const ComponentMappingDemo: Story = {
	args: {
		children: (
			<DialogTrigger>
				<Button variant="primary">View Component Mapping</Button>
				<ModalOverlay>
					<Modal size="large">
						<Dialog>
							{({ close }) => (
								<>
									<div slot="header">
										<Heading slot="title">Figma to Code Component Mapping</Heading>
										<Text slot="subtitle">
											This demo shows how Figma design properties are mapped to LaunchPad component
											props using Code Connect.
										</Text>
									</div>
									<div slot="body">
										<GridList aria-label="Component mappings">
											<GridListItem textValue="Button Mapping">
												<Icon name="package" size="small" />
												<div>
													<Text bold>Button Component</Text>
													<Text size="small" color="secondary">
														Figma variants → React props (variant, size, state)
													</Text>
												</div>
											</GridListItem>
											<GridListItem textValue="Alert Mapping">
												<Icon name="warning" size="small" />
												<div>
													<Text bold>Alert Component</Text>
													<Text size="small" color="secondary">
														Figma states → React status props (info, warning, error)
													</Text>
												</div>
											</GridListItem>
											<GridListItem textValue="Modal Mapping">
												<Icon name="link-external" size="small" />
												<div>
													<Text bold>Modal Component</Text>
													<Text size="small" color="secondary">
														Figma breakpoints → React size props (small, medium, large)
													</Text>
												</div>
											</GridListItem>
										</GridList>

										<Alert status="info" variant="inline">
											Code Connect automatically syncs these mappings between Figma and your
											codebase.
										</Alert>
									</div>
									<div slot="footer">
										<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
											<Button variant="primary" onPress={close}>
												Close
											</Button>
										</div>
									</div>
								</>
							)}
						</Dialog>
					</Modal>
				</ModalOverlay>
			</DialogTrigger>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Open the modal
		await userEvent.click(canvas.getByRole('button', { name: /view component mapping/i }));

		// Wait for modal content
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('dialog')).toBeInTheDocument();
	},
	name: 'Component Mapping Demo',
};
