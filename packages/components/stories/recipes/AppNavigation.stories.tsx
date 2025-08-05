import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentPropsWithoutRef } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { type Fragment, useState } from 'react';
import { userEvent, within } from 'storybook/test';

// Types
interface NavigationItemData {
	id: string;
	label: string;
	href?: string;
	icon?: string;
	badge?: string;
	children?: NavigationItemData[];
}

import { Avatar } from '../../src/Avatar';
import { Button } from '../../src/Button';
import { ButtonGroup } from '../../src/ButtonGroup';
import { Disclosure, DisclosurePanel } from '../../src/Disclosure';
import { Heading } from '../../src/Heading';
import { IconButton } from '../../src/IconButton';
import { Input } from '../../src/Input';
import { Label } from '../../src/Label';
import { Text } from '../../src/Text';
import { Tooltip, TooltipTrigger } from '../../src/Tooltip';

const Container = (props: ComponentPropsWithoutRef<typeof Fragment>) => <>{props.children}</>;

// Navigation data structure
const navigationItems = [
	{
		id: 'dashboard',
		label: 'Dashboard',
		icon: 'chart-dashboard',
		href: '/dashboard',
		isActive: true,
		badge: null,
	},
	{
		id: 'projects',
		label: 'Projects',
		icon: 'folders',
		href: '/projects',
		isActive: false,
		badge: '12',
		children: [
			{ id: 'active-projects', label: 'Active Projects', href: '/projects/active', badge: '8' },
			{ id: 'completed', label: 'Completed', href: '/projects/completed', badge: '4' },
			{ id: 'archived', label: 'Archived', href: '/projects/archived', badge: null },
		],
	},
	{
		id: 'team',
		label: 'Team',
		icon: 'person',
		href: '/team',
		isActive: false,
		badge: null,
		children: [
			{ id: 'members', label: 'Members', href: '/team/members', badge: '24' },
			{ id: 'roles', label: 'Roles & Permissions', href: '/team/roles', badge: null },
			{ id: 'invitations', label: 'Invitations', href: '/team/invitations', badge: '3' },
		],
	},
	{
		id: 'analytics',
		label: 'Analytics',
		icon: 'chart-line',
		href: '/analytics',
		isActive: false,
		badge: null,
	},
	{
		id: 'integrations',
		label: 'Integrations',
		icon: 'plug-connect',
		href: '/integrations',
		isActive: false,
		badge: '2',
	},
	{
		id: 'settings',
		label: 'Settings',
		icon: 'gear',
		href: '/settings',
		isActive: false,
		badge: null,
		children: [
			{ id: 'general', label: 'General', href: '/settings/general', badge: null },
			{ id: 'security', label: 'Security', href: '/settings/security', badge: '1' },
			{ id: 'billing', label: 'Billing', href: '/settings/billing', badge: null },
			{ id: 'notifications', label: 'Notifications', href: '/settings/notifications', badge: null },
		],
	},
];

// Quick actions data
const quickActions = [
	{ id: 'new-project', label: 'New Project', icon: 'add', href: '/projects/new' },
	{ id: 'invite-member', label: 'Invite Member', icon: 'person-add', href: '/team/invite' },
	{ id: 'export-data', label: 'Export Data', icon: 'data-export', href: '/export' },
];

// Navigation Badge Component
const NavigationBadge = ({ count }: { count: string | null }) => {
	if (!count) return null;

	return (
		<div
			style={{
				backgroundColor: 'var(--lp-color-bg-feedback-info)',
				color: 'var(--lp-color-text-on-dark)',
				borderRadius: '10px',
				padding: `${vars.spacing[100]} ${vars.spacing[200]}`,
				fontSize: '11px',
				fontWeight: 'bold',
				minWidth: '16px',
				textAlign: 'center',
				lineHeight: 1,
			}}
		>
			{count}
		</div>
	);
};

// Navigation Item Component
const NavigationItem = ({
	item,
	level = 0,
	onNavigate,
}: {
	item: NavigationItemData;
	level?: number;
	onNavigate: (href: string) => void;
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const hasChildren = item.children && item.children.length > 0;

	return (
		<div>
			<button
				type="button"
				onClick={() => {
					if (hasChildren) {
						setIsExpanded(!isExpanded);
					} else if (item.href) {
						onNavigate(item.href);
					}
				}}
				style={{
					display: 'flex',
					alignItems: 'center',
					padding: `${vars.spacing[200]} ${vars.spacing[300]}`,
					paddingLeft: `${Number.parseInt(vars.spacing[300]) + level * 16}px`,
					cursor: 'pointer',
					borderRadius: vars.borderRadius.regular,
					margin: `${vars.spacing[100]} 0`,
					backgroundColor: item.isActive
						? 'var(--lp-color-bg-interactive-selected)'
						: 'transparent',
					color: item.isActive
						? 'var(--lp-color-text-interactive-selected)'
						: 'var(--lp-color-text-primary)',
					transition: 'all 0.2s ease',
					border: 'none',
					width: '100%',
					textAlign: 'left',
				}}
				onMouseEnter={(e) => {
					if (!item.isActive) {
						e.currentTarget.style.backgroundColor =
							'var(--lp-color-bg-interactive-secondary-hover)';
					}
				}}
				onMouseLeave={(e) => {
					if (!item.isActive) {
						e.currentTarget.style.backgroundColor = 'transparent';
					}
				}}
			>
				{item.icon && (
					<Icon name={item.icon} size="small" style={{ marginRight: vars.spacing[300] }} />
				)}
				<Text size="small" bold={item.isActive} style={{ flex: 1, color: 'inherit' }}>
					{item.label}
				</Text>
				<NavigationBadge count={item.badge} />
				{hasChildren && (
					<Icon
						name={isExpanded ? 'chevron-down' : 'chevron-right'}
						size="small"
						style={{ marginLeft: vars.spacing[200] }}
					/>
				)}
			</button>

			{/* Children */}
			{hasChildren && isExpanded && (
				<div style={{ marginLeft: vars.spacing[400] }}>
					{item.children.map((child: NavigationItemData) => (
						<NavigationItem key={child.id} item={child} level={level + 1} onNavigate={onNavigate} />
					))}
				</div>
			)}
		</div>
	);
};

// Main Navigation Panel Component
const NavigationPanel = ({
	isCollapsed = false,
	onToggleCollapse,
	onNavigate,
}: {
	isCollapsed?: boolean;
	onToggleCollapse: () => void;
	onNavigate: (href: string) => void;
}) => {
	const [searchQuery, setSearchQuery] = useState('');

	const filteredItems = searchQuery
		? navigationItems.filter(
				(item) =>
					item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
					item.children?.some((child: NavigationItemData) =>
						child.label.toLowerCase().includes(searchQuery.toLowerCase()),
					),
			)
		: navigationItems;

	return (
		<div
			style={{
				width: isCollapsed ? '64px' : '280px',
				height: '100vh',
				backgroundColor: 'var(--lp-color-bg-ui-secondary)',
				borderRight: '1px solid var(--lp-color-border-ui-secondary)',
				display: 'flex',
				flexDirection: 'column',
				transition: 'width 0.3s ease',
				overflow: 'hidden',
			}}
		>
			{/* Header */}
			<div
				style={{
					padding: vars.spacing[400],
					borderBottom: '1px solid var(--lp-color-border-ui-secondary)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					minHeight: '72px',
				}}
			>
				{!isCollapsed && (
					<div style={{ display: 'flex', alignItems: 'center', gap: vars.spacing[300] }}>
						<Icon name="rocket" size="medium" />
						<Heading size="small">LaunchPad</Heading>
					</div>
				)}
				<TooltipTrigger>
					<IconButton
						icon={isCollapsed ? 'chevron-right' : 'chevron-left'}
						variant="minimal"
						size="small"
						aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
						onPress={onToggleCollapse}
					/>
					<Tooltip placement={isCollapsed ? 'right' : 'bottom'}>
						{isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
					</Tooltip>
				</TooltipTrigger>
			</div>

			{/* Search */}
			{!isCollapsed && (
				<div style={{ padding: vars.spacing[300] }}>
					<div style={{ position: 'relative' }}>
						<Icon
							name="search"
							size="small"
							style={{
								position: 'absolute',
								left: vars.spacing[300],
								top: '50%',
								transform: 'translateY(-50%)',
								color: 'var(--lp-color-text-secondary)',
								pointerEvents: 'none',
							}}
						/>
						<Input
							placeholder="Search navigation..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							style={{ paddingLeft: '36px' }}
						/>
					</div>
				</div>
			)}

			{/* Quick Actions */}
			{!isCollapsed && (
				<div style={{ padding: `0 ${vars.spacing[300]}` }}>
					<Label
						style={{
							fontSize: '11px',
							textTransform: 'uppercase',
							color: 'var(--lp-color-text-secondary)',
						}}
					>
						Quick Actions
					</Label>
					<div style={{ display: 'flex', gap: vars.spacing[200], marginTop: vars.spacing[200] }}>
						{quickActions.map((action) => (
							<TooltipTrigger key={action.id}>
								<IconButton
									icon={action.icon}
									variant="minimal"
									size="small"
									aria-label={action.label}
									onPress={() => onNavigate(action.href)}
								/>
								<Tooltip>{action.label}</Tooltip>
							</TooltipTrigger>
						))}
					</div>
				</div>
			)}

			{/* Navigation Items */}
			<div
				style={{
					flex: 1,
					overflow: 'auto',
					padding: `${vars.spacing[300]} ${vars.spacing[300]} 0`,
				}}
			>
				{!isCollapsed && (
					<Label
						style={{
							fontSize: '11px',
							textTransform: 'uppercase',
							color: 'var(--lp-color-text-secondary)',
						}}
					>
						Navigation
					</Label>
				)}
				<div style={{ marginTop: vars.spacing[200] }}>
					{isCollapsed ? (
						// Collapsed view - icons only
						<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[200] }}>
							{navigationItems.map((item) => (
								<TooltipTrigger key={item.id}>
									<IconButton
										icon={item.icon}
										variant={item.isActive ? 'primary' : 'minimal'}
										size="medium"
										aria-label={item.label}
										onPress={() => onNavigate(item.href)}
									/>
									<Tooltip placement="right">{item.label}</Tooltip>
								</TooltipTrigger>
							))}
						</div>
					) : (
						// Expanded view - full navigation
						<div>
							{filteredItems.map((item) => (
								<NavigationItem key={item.id} item={item} onNavigate={onNavigate} />
							))}
						</div>
					)}
				</div>
			</div>

			{/* User Profile */}
			<div
				style={{
					padding: vars.spacing[400],
					borderTop: '1px solid var(--lp-color-border-ui-secondary)',
					display: 'flex',
					alignItems: 'center',
					gap: vars.spacing[300],
				}}
			>
				<Avatar size="small">JD</Avatar>
				{!isCollapsed && (
					<div style={{ flex: 1, minWidth: 0 }}>
						<Text size="small" bold>
							John Doe
						</Text>
						<Text size="small" color="secondary" style={{ display: 'block' }}>
							john@example.com
						</Text>
					</div>
				)}
				<TooltipTrigger>
					<IconButton icon="more-vert" variant="minimal" size="small" aria-label="User menu" />
					<Tooltip placement={isCollapsed ? 'right' : 'top'}>User menu</Tooltip>
				</TooltipTrigger>
			</div>
		</div>
	);
};

// Breadcrumb navigation component
const BreadcrumbNavigation = ({ currentPath }: { currentPath: string }) => {
	const pathParts = currentPath.split('/').filter(Boolean);

	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: vars.spacing[200] }}>
			<Button variant="minimal" size="small">
				<Icon name="chart-dashboard" size="small" />
				Home
			</Button>
			{pathParts.map((part, index) => (
				<div
					key={`breadcrumb-${index}-${part}`}
					style={{ display: 'flex', alignItems: 'center', gap: vars.spacing[200] }}
				>
					<Icon name="chevron-right" size="small" color="var(--lp-color-text-secondary)" />
					<Text
						size="small"
						bold={index === pathParts.length - 1}
						color={index === pathParts.length - 1 ? 'primary' : 'secondary'}
						style={{ textTransform: 'capitalize' }}
					>
						{part.replace('-', ' ')}
					</Text>
				</div>
			))}
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
	title: 'Recipes/App Navigation',
};

export default meta;

type Story = StoryObj<typeof Container>;

export const SidePanelNavigation: Story = {
	render: () => {
		const [isCollapsed, setIsCollapsed] = useState(false);
		const [currentPath, setCurrentPath] = useState('/dashboard');

		const handleNavigate = (href: string) => {
			setCurrentPath(href);
		};

		return (
			<div style={{ display: 'flex', height: '100vh' }}>
				<NavigationPanel
					isCollapsed={isCollapsed}
					onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
					onNavigate={handleNavigate}
				/>

				{/* Main Content Area */}
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
					{/* Top Bar */}
					<div
						style={{
							height: '64px',
							backgroundColor: 'var(--lp-color-bg-ui-primary)',
							borderBottom: '1px solid var(--lp-color-border-ui-secondary)',
							display: 'flex',
							alignItems: 'center',
							padding: `0 ${vars.spacing[400]}`,
							justifyContent: 'space-between',
						}}
					>
						<BreadcrumbNavigation currentPath={currentPath} />
						<ButtonGroup>
							<TooltipTrigger>
								<IconButton
									icon="notifications"
									variant="minimal"
									size="medium"
									aria-label="Notifications"
								/>
								<Tooltip>Notifications</Tooltip>
							</TooltipTrigger>
							<TooltipTrigger>
								<IconButton icon="help-circle" variant="minimal" size="medium" aria-label="Help" />
								<Tooltip>Help & Support</Tooltip>
							</TooltipTrigger>
						</ButtonGroup>
					</div>

					{/* Page Content */}
					<div
						style={{
							flex: 1,
							padding: vars.spacing[500],
							backgroundColor: 'var(--lp-color-bg-ui-primary)',
						}}
					>
						<div style={{ maxWidth: '1200px' }}>
							<Heading size="large" style={{ marginBottom: vars.spacing[400] }}>
								{currentPath
									.split('/')
									.pop()
									?.replace('-', ' ')
									.replace(/\b\w/g, (l) => l.toUpperCase()) || 'Dashboard'}
							</Heading>

							<div
								style={{
									padding: vars.spacing[600],
									backgroundColor: 'var(--lp-color-bg-ui-secondary)',
									borderRadius: vars.borderRadius.large,
									border: '2px dashed var(--lp-color-border-ui-secondary)',
									textAlign: 'center',
								}}
							>
								<Icon
									name="chart-dashboard"
									size="large"
									style={{ marginBottom: vars.spacing[300] }}
								/>
								<Heading size="medium">Page Content</Heading>
								<Text color="secondary">
									Current route: <strong>{currentPath}</strong>
								</Text>
								<Text size="small" color="secondary" style={{ marginTop: vars.spacing[300] }}>
									This area would contain the main page content for the selected navigation item.
								</Text>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test navigation interaction
		const projectsItem = canvas.getByText('Projects');
		await userEvent.click(projectsItem);

		// Test collapse/expand
		const collapseButton = canvas.getByLabelText(/collapse sidebar|expand sidebar/i);
		await userEvent.click(collapseButton);
	},
	name: 'Side Panel Navigation',
};

export const CompactNavigation: Story = {
	render: () => {
		const [currentPath, setCurrentPath] = useState('/dashboard');

		return (
			<div style={{ display: 'flex', height: '100vh' }}>
				<NavigationPanel
					isCollapsed={true}
					onToggleCollapse={() => {}}
					onNavigate={(href) => setCurrentPath(href)}
				/>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
					<div
						style={{
							height: '64px',
							backgroundColor: 'var(--lp-color-bg-ui-primary)',
							borderBottom: '1px solid var(--lp-color-border-ui-secondary)',
							display: 'flex',
							alignItems: 'center',
							padding: `0 ${vars.spacing[400]}`,
							justifyContent: 'space-between',
						}}
					>
						<Heading size="medium">
							{currentPath
								.split('/')
								.pop()
								?.replace('-', ' ')
								.replace(/\b\w/g, (l) => l.toUpperCase()) || 'Dashboard'}
						</Heading>
						<Text size="small" color="secondary">
							Route: {currentPath}
						</Text>
					</div>

					<div
						style={{
							flex: 1,
							padding: vars.spacing[500],
							backgroundColor: 'var(--lp-color-bg-ui-primary)',
						}}
					>
						<div
							style={{
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: 'var(--lp-color-bg-ui-secondary)',
								borderRadius: vars.borderRadius.large,
								border: '2px dashed var(--lp-color-border-ui-secondary)',
							}}
						>
							<div style={{ textAlign: 'center' }}>
								<Icon
									name="sidebar-left-collapse"
									size="large"
									style={{ marginBottom: vars.spacing[300] }}
								/>
								<Heading size="medium">Compact Navigation</Heading>
								<Text color="secondary">Icon-only navigation for space-efficient layouts</Text>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
	name: 'Compact Navigation',
};

export const NavigationWithDisclosure: Story = {
	args: {
		children: (
			<div style={{ padding: vars.spacing[400], maxWidth: '400px' }}>
				<Heading size="medium" style={{ marginBottom: vars.spacing[400] }}>
					Disclosure-based Navigation
				</Heading>

				{navigationItems.map((item) => (
					<Disclosure key={item.id} style={{ marginBottom: vars.spacing[200] }}>
						<Button
							slot="trigger"
							variant="minimal"
							style={{
								width: '100%',
								justifyContent: 'flex-start',
								backgroundColor: item.isActive
									? 'var(--lp-color-bg-interactive-selected)'
									: 'transparent',
							}}
						>
							<Icon name={item.icon} size="small" style={{ marginRight: vars.spacing[300] }} />
							{item.label}
							{item.badge && <NavigationBadge count={item.badge} />}
							{item.children && item.children.length > 0 && (
								<Icon name="chevron-down" size="small" style={{ marginLeft: 'auto' }} />
							)}
						</Button>

						{item.children && (
							<DisclosurePanel>
								<div style={{ paddingLeft: vars.spacing[500], paddingTop: vars.spacing[200] }}>
									{item.children.map((child: NavigationItemData) => (
										<Button
											key={child.id}
											variant="minimal"
											style={{
												width: '100%',
												justifyContent: 'flex-start',
												marginBottom: vars.spacing[100],
											}}
										>
											{child.label}
											{child.badge && <NavigationBadge count={child.badge} />}
										</Button>
									))}
								</div>
							</DisclosurePanel>
						)}
					</Disclosure>
				))}
			</div>
		),
	},
	name: 'Navigation with Disclosure',
};
