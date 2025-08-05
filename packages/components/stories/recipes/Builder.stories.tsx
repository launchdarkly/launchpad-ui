import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentPropsWithoutRef } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { type Fragment, useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';

import { Alert } from '../../src/Alert';
import { Button } from '../../src/Button';
import { ButtonGroup } from '../../src/ButtonGroup';
import { Dialog, DialogTrigger } from '../../src/Dialog';
import { GridList, GridListItem } from '../../src/GridList';
import { Heading } from '../../src/Heading';
import { IconButton } from '../../src/IconButton';
import { Input } from '../../src/Input';
import { Label } from '../../src/Label';
import { ListBox, ListBoxItem } from '../../src/ListBox';
import { Modal, ModalOverlay } from '../../src/Modal';
import { Select } from '../../src/Select';
import { Text } from '../../src/Text';
import { Tooltip, TooltipTrigger } from '../../src/Tooltip';

// Types
interface ComponentData {
	id: string;
	name: string;
	category: string;
	icon: string;
	description?: string;
	props: Record<string, unknown>;
}

interface ElementData {
	id: string;
	type: string;
	props: Record<string, unknown>;
	x: number;
	y: number;
	width: number;
	height: number;
}

const Container = (props: ComponentPropsWithoutRef<typeof Fragment>) => <>{props.children}</>;

// Mock components available in the builder
const builderComponents = [
	{
		id: 'button',
		name: 'Button',
		icon: 'click',
		category: 'Actions',
		description: 'Interactive button component',
		props: ['variant', 'size', 'disabled'],
	},
	{
		id: 'text',
		name: 'Text',
		icon: 'text-box-search',
		category: 'Content',
		description: 'Text display component',
		props: ['size', 'bold', 'color'],
	},
	{
		id: 'input',
		name: 'Input',
		icon: 'edit',
		category: 'Forms',
		description: 'Text input field',
		props: ['placeholder', 'disabled', 'required'],
	},
	{
		id: 'alert',
		name: 'Alert',
		icon: 'warning',
		category: 'Feedback',
		description: 'Alert message component',
		props: ['status', 'variant', 'dismissible'],
	},
	{
		id: 'avatar',
		name: 'Avatar',
		icon: 'person-circle',
		category: 'Content',
		description: 'User avatar component',
		props: ['size', 'src', 'alt'],
	},
	{
		id: 'card',
		name: 'Card',
		icon: 'rectangle',
		category: 'Layout',
		description: 'Container card component',
		props: ['padding', 'border', 'shadow'],
	},
];

// Mock canvas elements
const canvasElements = [
	{
		id: 'element-1',
		type: 'button',
		name: 'Primary Button',
		x: 100,
		y: 50,
		width: 120,
		height: 40,
		props: { variant: 'primary', children: 'Click me' },
	},
	{
		id: 'element-2',
		type: 'text',
		name: 'Heading Text',
		x: 100,
		y: 120,
		width: 200,
		height: 32,
		props: { size: 'large', bold: true, children: 'Welcome to Builder' },
	},
	{
		id: 'element-3',
		type: 'input',
		name: 'Email Input',
		x: 100,
		y: 180,
		width: 250,
		height: 40,
		props: { placeholder: 'Enter your email', type: 'email' },
	},
	{
		id: 'element-4',
		type: 'alert',
		name: 'Info Alert',
		x: 100,
		y: 250,
		width: 300,
		height: 60,
		props: { status: 'info', children: 'This is an informational message' },
	},
];

// Component library sidebar
const ComponentLibrary = ({
	onSelectComponent,
}: {
	onSelectComponent: (component: ComponentData) => void;
}) => {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const categories = ['All', 'Actions', 'Content', 'Forms', 'Feedback', 'Layout'];

	const filteredComponents =
		selectedCategory === 'All'
			? builderComponents
			: builderComponents.filter((comp) => comp.category === selectedCategory);

	return (
		<div
			style={{
				width: '280px',
				height: '100vh',
				backgroundColor: 'var(--lp-color-bg-ui-secondary)',
				borderRight: '1px solid var(--lp-color-border-ui-secondary)',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			{/* Library Header */}
			<div
				style={{
					padding: vars.spacing[400],
					borderBottom: '1px solid var(--lp-color-border-ui-secondary)',
				}}
			>
				<Heading size="small">Components</Heading>
				<Text size="small" color="secondary">
					Drag to add to canvas
				</Text>
			</div>

			{/* Category Filter */}
			<div style={{ padding: vars.spacing[300] }}>
				<Label>Category</Label>
				<Select
					placeholder="All Categories"
					onSelectionChange={(key) => setSelectedCategory(key as string)}
				>
					<ListBox>
						{categories.map((category) => (
							<ListBoxItem key={category} id={category}>
								{category}
							</ListBoxItem>
						))}
					</ListBox>
				</Select>
			</div>

			{/* Components List */}
			<div style={{ flex: 1, overflow: 'auto', padding: vars.spacing[300] }}>
				<GridList
					aria-label="Available components"
					onAction={(key) => {
						const component = builderComponents.find((c) => c.id === key);
						if (component) onSelectComponent(component);
					}}
				>
					{filteredComponents.map((component) => (
						<GridListItem key={component.id} id={component.id} textValue={component.name}>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: vars.spacing[300],
									padding: vars.spacing[200],
								}}
							>
								<Icon name="package" size="small" />
								<div style={{ flex: 1 }}>
									<Text bold>{component.name}</Text>
									<Text size="small" color="secondary">
										{component.description}
									</Text>
									<div style={{ marginTop: vars.spacing[100] }}>
										{component.props.slice(0, 3).map((prop) => (
											<Text
												key={prop}
												size="small"
												style={{
													display: 'inline-block',
													marginRight: vars.spacing[200],
													padding: `${vars.spacing[100]} ${vars.spacing[200]}`,
													backgroundColor: 'var(--lp-color-bg-ui-primary)',
													borderRadius: vars.borderRadius.regular,
													fontSize: '11px',
												}}
											>
												{prop}
											</Text>
										))}
									</div>
								</div>
							</div>
						</GridListItem>
					))}
				</GridList>
			</div>
		</div>
	);
};

// Properties panel for selected element
const PropertiesPanel = ({
	selectedElement,
	onUpdateElement,
}: {
	selectedElement: ElementData | null;
	onUpdateElement: (id: string, updates: Partial<ElementData>) => void;
}) => {
	if (!selectedElement) {
		return (
			<div
				style={{
					width: '280px',
					height: '100vh',
					backgroundColor: 'var(--lp-color-bg-ui-secondary)',
					borderLeft: '1px solid var(--lp-color-border-ui-secondary)',
					padding: vars.spacing[400],
				}}
			>
				<Heading size="small">Properties</Heading>
				<Text size="small" color="secondary">
					Select an element to edit its properties
				</Text>
			</div>
		);
	}

	return (
		<div
			style={{
				width: '280px',
				height: '100vh',
				backgroundColor: 'var(--lp-color-bg-ui-secondary)',
				borderLeft: '1px solid var(--lp-color-border-ui-secondary)',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			{/* Properties Header */}
			<div
				style={{
					padding: vars.spacing[400],
					borderBottom: '1px solid var(--lp-color-border-ui-secondary)',
				}}
			>
				<Heading size="small">Properties</Heading>
				<Text size="small" color="secondary">
					{selectedElement.name}
				</Text>
			</div>

			{/* Element Properties */}
			<div style={{ flex: 1, overflow: 'auto', padding: vars.spacing[400] }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[400] }}>
					{/* Basic Properties */}
					<div>
						<Label>Element Name</Label>
						<Input
							value={selectedElement.name}
							onChange={(e) => onUpdateElement(selectedElement.id, { name: e.target.value })}
						/>
					</div>

					{/* Position */}
					<div>
						<Label>Position</Label>
						<div
							style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: vars.spacing[200] }}
						>
							<div>
								<Text size="small">X</Text>
								<Input
									type="number"
									value={selectedElement.x.toString()}
									onChange={(e) =>
										onUpdateElement(selectedElement.id, { x: Number.parseInt(e.target.value) || 0 })
									}
								/>
							</div>
							<div>
								<Text size="small">Y</Text>
								<Input
									type="number"
									value={selectedElement.y.toString()}
									onChange={(e) =>
										onUpdateElement(selectedElement.id, { y: Number.parseInt(e.target.value) || 0 })
									}
								/>
							</div>
						</div>
					</div>

					{/* Size */}
					<div>
						<Label>Size</Label>
						<div
							style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: vars.spacing[200] }}
						>
							<div>
								<Text size="small">Width</Text>
								<Input
									type="number"
									value={selectedElement.width.toString()}
									onChange={(e) =>
										onUpdateElement(selectedElement.id, {
											width: Number.parseInt(e.target.value) || 0,
										})
									}
								/>
							</div>
							<div>
								<Text size="small">Height</Text>
								<Input
									type="number"
									value={selectedElement.height.toString()}
									onChange={(e) =>
										onUpdateElement(selectedElement.id, {
											height: Number.parseInt(e.target.value) || 0,
										})
									}
								/>
							</div>
						</div>
					</div>

					{/* Component-specific properties */}
					{selectedElement.type === 'button' && (
						<div>
							<Label>Button Variant</Label>
							<Select placeholder="Select variant">
								<ListBox>
									<ListBoxItem id="primary">Primary</ListBoxItem>
									<ListBoxItem id="default">Default</ListBoxItem>
									<ListBoxItem id="minimal">Minimal</ListBoxItem>
									<ListBoxItem id="destructive">Destructive</ListBoxItem>
								</ListBox>
							</Select>
						</div>
					)}

					{selectedElement.type === 'alert' && (
						<div>
							<Label>Alert Status</Label>
							<Select placeholder="Select status">
								<ListBox>
									<ListBoxItem id="info">Info</ListBoxItem>
									<ListBoxItem id="warning">Warning</ListBoxItem>
									<ListBoxItem id="error">Error</ListBoxItem>
									<ListBoxItem id="success">Success</ListBoxItem>
								</ListBox>
							</Select>
						</div>
					)}
				</div>
			</div>

			{/* Actions */}
			<div
				style={{
					padding: vars.spacing[400],
					borderTop: '1px solid var(--lp-color-border-ui-secondary)',
				}}
			>
				<ButtonGroup orientation="vertical">
					<Button variant="default" size="small">
						<Icon name="copy-content" size="small" />
						Duplicate
					</Button>
					<Button variant="destructive" size="small">
						<Icon name="delete" size="small" />
						Delete
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
};

// Main canvas area
const Canvas = ({
	elements,
	selectedElementId,
	onSelectElement,
}: {
	elements: ElementData[];
	selectedElementId: string | null;
	onSelectElement: (id: string) => void;
}) => {
	return (
		<div
			style={{
				flex: 1,
				height: '100vh',
				backgroundColor: 'var(--lp-color-bg-ui-primary)',
				position: 'relative',
				overflow: 'auto',
			}}
		>
			{/* Canvas Grid Background */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					backgroundImage: `
						radial-gradient(circle, var(--lp-color-border-ui-secondary) 1px, transparent 1px)
					`,
					backgroundSize: '20px 20px',
					opacity: 0.3,
				}}
			/>

			{/* Canvas Content */}
			<div style={{ position: 'relative', minHeight: '800px', minWidth: '1200px' }}>
				{/* Canvas Header */}
				<div
					style={{
						position: 'sticky',
						top: 0,
						zIndex: 10,
						backgroundColor: 'var(--lp-color-bg-ui-primary)',
						borderBottom: '1px solid var(--lp-color-border-ui-secondary)',
						padding: vars.spacing[300],
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div>
						<Text bold>Untitled Design</Text>
						<Text size="small" color="secondary">
							Last saved 2 minutes ago
						</Text>
					</div>
					<ButtonGroup>
						<TooltipTrigger>
							<IconButton icon="preview" variant="minimal" size="medium" aria-label="Preview" />
							<Tooltip>Preview design</Tooltip>
						</TooltipTrigger>
						<TooltipTrigger>
							<IconButton icon="share" variant="minimal" size="medium" aria-label="Share" />
							<Tooltip>Share design</Tooltip>
						</TooltipTrigger>
						<Button variant="primary">Publish</Button>
					</ButtonGroup>
				</div>

				{/* Canvas Elements */}
				{elements.map((element) => (
					<button
						key={element.id}
						type="button"
						onClick={() => onSelectElement(element.id)}
						aria-label={`Select ${element.type} element`}
						style={{
							position: 'absolute',
							left: element.x,
							top: element.y + 60, // Account for header
							width: element.width,
							height: element.height,
							border:
								selectedElementId === element.id
									? '2px solid var(--lp-color-border-interactive-primary-base)'
									: '1px solid transparent',
							borderRadius: vars.borderRadius.regular,
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor:
								element.type === 'button'
									? 'var(--lp-color-bg-interactive-primary-base)'
									: element.type === 'alert'
										? 'var(--lp-color-bg-feedback-info)'
										: 'var(--lp-color-bg-ui-secondary)',
							color:
								element.type === 'button'
									? 'var(--lp-color-text-on-dark)'
									: 'var(--lp-color-text-primary)',
							transition: 'all 0.2s ease',
						}}
					>
						{/* Selection Handles */}
						{selectedElementId === element.id && (
							<>
								{/* Corner handles */}
								{[
									{ top: -4, left: -4 },
									{ top: -4, right: -4 },
									{ bottom: -4, left: -4 },
									{ bottom: -4, right: -4 },
								].map((position, index) => (
									<div
										key={`handle-${Object.keys(position).join('-')}-${index}`}
										style={{
											position: 'absolute',
											width: 8,
											height: 8,
											backgroundColor: 'var(--lp-color-bg-interactive-primary-base)',
											border: '2px solid white',
											borderRadius: '50%',
											cursor: 'nw-resize',
											...position,
										}}
									/>
								))}
							</>
						)}

						{/* Element Content Preview */}
						<div style={{ padding: vars.spacing[200], textAlign: 'center' }}>
							{element.type === 'button' && (
								<Text size="small" style={{ color: 'inherit' }}>
									{element.props.children || 'Button'}
								</Text>
							)}
							{element.type === 'text' && (
								<Text
									size={element.props.size || 'medium'}
									bold={element.props.bold}
									style={{ color: 'inherit' }}
								>
									{element.props.children || 'Text Element'}
								</Text>
							)}
							{element.type === 'input' && (
								<div
									style={{
										width: '100%',
										height: '32px',
										backgroundColor: 'var(--lp-color-bg-field-base)',
										border: '1px solid var(--lp-color-border-field-base)',
										borderRadius: vars.borderRadius.regular,
										display: 'flex',
										alignItems: 'center',
										padding: `0 ${vars.spacing[300]}`,
									}}
								>
									<Text size="small" color="secondary">
										{element.props.placeholder || 'Input field'}
									</Text>
								</div>
							)}
							{element.type === 'alert' && (
								<div style={{ display: 'flex', alignItems: 'center', gap: vars.spacing[200] }}>
									<Icon name="info-circle" size="small" />
									<Text size="small" style={{ color: 'inherit' }}>
										{element.props.children || 'Alert message'}
									</Text>
								</div>
							)}
						</div>
					</button>
				))}

				{/* Drop Zone Hint */}
				{elements.length === 0 && (
					<div
						style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							textAlign: 'center',
							color: 'var(--lp-color-text-secondary)',
						}}
					>
						<Icon name="magic-wand" size="medium" />
						<Text>Drag components from the library to start building</Text>
					</div>
				)}
			</div>
		</div>
	);
};

// Layers panel
const LayersPanel = ({
	elements,
	selectedElementId,
	onSelectElement,
}: {
	elements: ElementData[];
	selectedElementId: string | null;
	onSelectElement: (id: string) => void;
}) => {
	return (
		<div
			style={{
				width: '250px',
				backgroundColor: 'var(--lp-color-bg-ui-secondary)',
				borderRight: '1px solid var(--lp-color-border-ui-secondary)',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<div
				style={{
					padding: vars.spacing[400],
					borderBottom: '1px solid var(--lp-color-border-ui-secondary)',
				}}
			>
				<Heading size="small">Layers</Heading>
				<Text size="small" color="secondary">
					{elements.length} elements
				</Text>
			</div>

			<div style={{ flex: 1, overflow: 'auto' }}>
				<GridList
					aria-label="Layer hierarchy"
					selectionMode="single"
					selectedKeys={selectedElementId ? [selectedElementId] : []}
					onSelectionChange={(keys) => {
						const selected = Array.from(keys)[0];
						if (selected) onSelectElement(selected as string);
					}}
				>
					{elements.map((element) => (
						<GridListItem key={element.id} id={element.id} textValue={element.name}>
							<div style={{ display: 'flex', alignItems: 'center', gap: vars.spacing[300] }}>
								<Icon name="package" size="small" />
								<div style={{ flex: 1 }}>
									<Text bold>{element.name}</Text>
									<Text size="small" color="secondary">
										{element.type}
									</Text>
								</div>
								<TooltipTrigger>
									<IconButton
										icon="visibility"
										variant="minimal"
										size="small"
										aria-label="Toggle visibility"
									/>
									<Tooltip>Toggle visibility</Tooltip>
								</TooltipTrigger>
							</div>
						</GridListItem>
					))}
				</GridList>
			</div>
		</div>
	);
};

const meta: Meta<typeof Container> = {
	component: Container,
	decorators: [
		(Story) => (
			<div style={{ height: '100vh', overflow: 'hidden' }}>
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
	title: 'Recipes/Builder',
};

export default meta;

type Story = StoryObj<typeof Container>;

export const VisualBuilder: Story = {
	render: () => {
		const [elements, setElements] = useState(canvasElements);
		const [selectedElementId, setSelectedElementId] = useState<string | null>(null);

		const selectedElement = selectedElementId
			? elements.find((el) => el.id === selectedElementId)
			: null;

		const handleSelectComponent = (component: ComponentData) => {
			// Add component to canvas (simplified - in real app would handle positioning)
			const newElement = {
				id: `element-${Date.now()}`,
				type: component.id,
				name: `New ${component.name}`,
				x: 150 + elements.length * 20,
				y: 100 + elements.length * 20,
				width: 200,
				height: 40,
				props: { children: `${component.name} ${elements.length + 1}` },
			};
			setElements([...elements, newElement]);
		};

		const handleUpdateElement = (id: string, updates: Partial<ElementData>) => {
			setElements(elements.map((el) => (el.id === id ? { ...el, ...updates } : el)));
		};

		return (
			<div style={{ display: 'flex', height: '100vh' }}>
				<ComponentLibrary onSelectComponent={handleSelectComponent} />
				<LayersPanel
					elements={elements}
					selectedElementId={selectedElementId}
					onSelectElement={setSelectedElementId}
				/>
				<Canvas
					elements={elements}
					selectedElementId={selectedElementId}
					onSelectElement={setSelectedElementId}
				/>
				<PropertiesPanel selectedElement={selectedElement} onUpdateElement={handleUpdateElement} />
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test selecting an element
		const firstElement = canvas.getAllByRole('button')[0];
		if (firstElement) {
			await userEvent.click(firstElement);
		}
	},
	name: 'Visual Builder',
};

export const MinimalBuilder: Story = {
	render: () => {
		const [selectedTool, setSelectedTool] = useState('select');

		return (
			<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
				{/* Toolbar */}
				<div
					style={{
						height: '60px',
						backgroundColor: 'var(--lp-color-bg-ui-secondary)',
						borderBottom: '1px solid var(--lp-color-border-ui-secondary)',
						display: 'flex',
						alignItems: 'center',
						padding: `0 ${vars.spacing[400]}`,
						gap: vars.spacing[300],
					}}
				>
					<Heading size="small">Builder</Heading>

					<div style={{ marginLeft: 'auto' }}>
						<ButtonGroup>
							{[
								{ id: 'select', icon: 'click', label: 'Select' },
								{ id: 'text', icon: 'text-box-search', label: 'Text' },
								{ id: 'rectangle', icon: 'border-all', label: 'Rectangle' },
								{ id: 'circle', icon: 'circle', label: 'Circle' },
							].map((tool) => (
								<TooltipTrigger key={tool.id}>
									<IconButton
										icon={tool.icon as never}
										variant={selectedTool === tool.id ? 'primary' : 'minimal'}
										size="medium"
										aria-label={tool.label}
										onPress={() => setSelectedTool(tool.id)}
									/>
									<Tooltip>{tool.label}</Tooltip>
								</TooltipTrigger>
							))}
						</ButtonGroup>
					</div>

					<Button variant="primary">Export</Button>
				</div>

				{/* Canvas */}
				<div
					style={{
						flex: 1,
						backgroundColor: 'var(--lp-color-bg-ui-primary)',
						position: 'relative',
					}}
				>
					<div
						style={{
							position: 'absolute',
							inset: 0,
							backgroundImage: `
								radial-gradient(circle, var(--lp-color-border-ui-secondary) 1px, transparent 1px)
							`,
							backgroundSize: '20px 20px',
							opacity: 0.2,
						}}
					/>

					<div
						style={{
							position: 'relative',
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								padding: vars.spacing[600],
								textAlign: 'center',
								backgroundColor: 'var(--lp-color-bg-ui-secondary)',
								borderRadius: vars.borderRadius.regular,
								border: '2px dashed var(--lp-color-border-ui-secondary)',
							}}
						>
							<Icon name="magic-wand" size="medium" />
							<Heading size="medium">Start Building</Heading>
							<Text color="secondary">
								Select a tool from the toolbar and click on the canvas to add elements
							</Text>
						</div>
					</div>
				</div>
			</div>
		);
	},
	name: 'Minimal Builder',
};

export const ComponentStudio: Story = {
	args: {
		children: (
			<DialogTrigger>
				<Button variant="primary">Open Component Studio</Button>
				<ModalOverlay>
					<Modal size="large">
						<Dialog>
							{({ close }) => (
								<>
									<div slot="header">
										<Heading slot="title">Component Studio</Heading>
										<Text slot="subtitle">
											Design and customize components with real-time preview
										</Text>
									</div>
									<div slot="body">
										<div
											style={{
												display: 'grid',
												gridTemplateColumns: '1fr 1fr',
												gap: vars.spacing[500],
												height: '400px',
											}}
										>
											{/* Controls */}
											<div>
												<Heading size="small">Component Properties</Heading>
												<div
													style={{
														display: 'flex',
														flexDirection: 'column',
														gap: vars.spacing[300],
														marginTop: vars.spacing[300],
													}}
												>
													<div>
														<Label>Component Type</Label>
														<Select placeholder="Select component">
															<ListBox>
																<ListBoxItem>Button</ListBoxItem>
																<ListBoxItem>Alert</ListBoxItem>
																<ListBoxItem>Card</ListBoxItem>
																<ListBoxItem>Input</ListBoxItem>
															</ListBox>
														</Select>
													</div>
													<div>
														<Label>Variant</Label>
														<Select placeholder="Select variant">
															<ListBox>
																<ListBoxItem>Primary</ListBoxItem>
																<ListBoxItem>Secondary</ListBoxItem>
																<ListBoxItem>Minimal</ListBoxItem>
																<ListBoxItem>Destructive</ListBoxItem>
															</ListBox>
														</Select>
													</div>
													<div>
														<Label>Size</Label>
														<Select placeholder="Select size">
															<ListBox>
																<ListBoxItem>Small</ListBoxItem>
																<ListBoxItem>Medium</ListBoxItem>
																<ListBoxItem>Large</ListBoxItem>
															</ListBox>
														</Select>
													</div>
													<div>
														<Label>Text Content</Label>
														<Input placeholder="Enter button text" value="Click me" />
													</div>
												</div>
											</div>

											{/* Preview */}
											<div>
												<Heading size="small">Live Preview</Heading>
												<div
													style={{
														marginTop: vars.spacing[300],
														padding: vars.spacing[500],
														backgroundColor: 'var(--lp-color-bg-ui-primary)',
														border: '1px solid var(--lp-color-border-ui-secondary)',
														borderRadius: vars.borderRadius.regular,
														height: '300px',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
													}}
												>
													<Button variant="primary" size="medium">
														Click me
													</Button>
												</div>
											</div>
										</div>

										<Alert status="info" variant="inline" style={{ marginTop: vars.spacing[400] }}>
											Changes are applied in real-time. Export code or save as template when ready.
										</Alert>
									</div>
									<div slot="footer">
										<div
											style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
										>
											<ButtonGroup>
												<Button variant="default">Export Code</Button>
												<Button variant="default">Save Template</Button>
											</ButtonGroup>
											<Button variant="primary" onPress={close}>
												Done
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

		// Open the component studio
		await userEvent.click(canvas.getByRole('button', { name: /open component studio/i }));

		// Wait for modal content
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('dialog')).toBeInTheDocument();
	},
	name: 'Component Studio',
};
