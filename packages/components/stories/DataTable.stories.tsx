import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ColumnDef } from '@tanstack/react-table';

import { Icon } from '@launchpad-ui/icons';
import { useState } from 'react';

import { InitialsAvatar } from '../src/Avatar';
import { Button } from '../src/Button';
import { DataTable } from '../src/DataTable';
import {
	DeltaValue,
	MonoValue,
	NumericValue,
	StatusCell,
	TagCell,
	TwoLineCell,
} from '../src/DataTableCells';
import { IconButton } from '../src/IconButton';
import { Menu, MenuItem, MenuTrigger } from '../src/Menu';
import { Popover } from '../src/Popover';
import { Tag, TagGroup, TagList } from '../src/TagGroup';

// ---------------------------------------------------------------------------
// Services dataset — content-type kitchen sink (Figma "Table BETA" content set)
// ---------------------------------------------------------------------------

type Service = {
	id: string;
	name: string;
	description: string;
	environments: string[];
	health: 'success' | 'error' | 'info' | 'neutral';
	healthLabel: string;
	requests: number;
	errorRate: number;
	p95: number;
	lastSeenDate: string;
	lastSeenTime: string;
};

const data: Service[] = [
	{
		id: 'svc_4f2a',
		name: 'checkout-api',
		description: 'Payments & cart',
		environments: ['prod', 'staging'],
		health: 'error',
		healthLabel: 'Degraded',
		requests: 128_400,
		errorRate: 4.2,
		p95: 812,
		lastSeenDate: '2026-07-08',
		lastSeenTime: '14:22',
	},
	{
		id: 'svc_9c1b',
		name: 'api-gateway',
		description: 'Edge routing',
		environments: ['prod'],
		health: 'success',
		healthLabel: 'Healthy',
		requests: 982_100,
		errorRate: -0.3,
		p95: 143,
		lastSeenDate: '2026-07-08',
		lastSeenTime: '14:21',
	},
	{
		id: 'svc_2d77',
		name: 'auth-service',
		description: 'Login & sessions',
		environments: ['prod', 'staging', 'dev'],
		health: 'success',
		healthLabel: 'Healthy',
		requests: 341_050,
		errorRate: 0,
		p95: 96,
		lastSeenDate: '2026-07-08',
		lastSeenTime: '14:20',
	},
	{
		id: 'svc_8e30',
		name: 'mobile-bff',
		description: 'Mobile backend',
		environments: ['prod'],
		health: 'info',
		healthLabel: 'Deploying',
		requests: 54_900,
		errorRate: 1.1,
		p95: 268,
		lastSeenDate: '2026-07-08',
		lastSeenTime: '14:19',
	},
	{
		id: 'svc_1a54',
		name: 'signups-worker',
		description: 'Async signups',
		environments: ['staging'],
		health: 'neutral',
		healthLabel: 'Idle',
		requests: 2_300,
		errorRate: -2.4,
		p95: 41,
		lastSeenDate: '2026-07-07',
		lastSeenTime: '23:58',
	},
	{
		id: 'svc_6b90',
		name: 'payments-ledger',
		description: 'Double-entry ledger',
		environments: ['prod', 'staging'],
		health: 'success',
		healthLabel: 'Healthy',
		requests: 76_820,
		errorRate: 0.4,
		p95: 187,
		lastSeenDate: '2026-07-08',
		lastSeenTime: '14:18',
	},
	{
		id: 'svc_3f11',
		name: 'cdn-edge',
		description: 'Static assets',
		environments: ['prod'],
		health: 'error',
		healthLabel: 'Errors',
		requests: 1_204_000,
		errorRate: 6.8,
		p95: 59,
		lastSeenDate: '2026-07-08',
		lastSeenTime: '14:17',
	},
	{
		id: 'svc_7c22',
		name: 'reporting-db',
		description: 'Analytics queries',
		environments: ['dev'],
		health: 'neutral',
		healthLabel: 'Idle',
		requests: 410,
		errorRate: 0,
		p95: 1_240,
		lastSeenDate: '2026-07-05',
		lastSeenTime: '09:03',
	},
];

const ActionsCell = () => (
	<MenuTrigger>
		<IconButton icon="more-horiz" aria-label="Row actions" variant="minimal" size="small" />
		<Popover>
			<Menu>
				<MenuItem>View details</MenuItem>
				<MenuItem>Edit</MenuItem>
				<MenuItem>Delete</MenuItem>
			</Menu>
		</Popover>
	</MenuTrigger>
);

// Exercises every Figma "Content" type: two-line + media, tags, status dot, tabular
// numerics, colored delta, monospace id, two-line time, and a trailing actions column.
const columns: ColumnDef<Service>[] = [
	{
		accessorKey: 'name',
		header: 'Service',
		enableHiding: false,
		meta: { isRowHeader: true },
		cell: (info) => (
			<TwoLineCell
				media={
					<InitialsAvatar size="small">
						{info.getValue<string>().slice(0, 2).toUpperCase()}
					</InitialsAvatar>
				}
				primary={info.getValue<string>()}
				secondary={info.row.original.description}
			/>
		),
	},
	{
		id: 'environments',
		header: 'Environments',
		enableSorting: false,
		cell: (info) => <TagCell tags={info.row.original.environments} />,
	},
	{
		accessorKey: 'healthLabel',
		header: 'Health',
		cell: (info) => (
			<StatusCell tone={info.row.original.health}>{info.getValue<string>()}</StatusCell>
		),
	},
	{
		accessorKey: 'requests',
		header: 'Requests',
		meta: { align: 'end' },
		cell: (info) => <NumericValue>{info.getValue<number>().toLocaleString()}</NumericValue>,
	},
	{
		accessorKey: 'errorRate',
		header: 'Error rate',
		meta: { align: 'end' },
		cell: (info) => <DeltaValue value={info.getValue<number>()} invert />,
	},
	{
		accessorKey: 'p95',
		header: 'p95',
		meta: { align: 'end' },
		cell: (info) => <NumericValue>{`${info.getValue<number>()} ms`}</NumericValue>,
	},
	{
		accessorKey: 'id',
		header: 'ID',
		cell: (info) => <MonoValue>{info.getValue<string>()}</MonoValue>,
	},
	{
		accessorKey: 'lastSeenDate',
		header: 'Last seen',
		cell: (info) => (
			<TwoLineCell primary={info.getValue<string>()} secondary={info.row.original.lastSeenTime} />
		),
	},
	{
		id: 'actions',
		header: '',
		enableSorting: false,
		enableHiding: false,
		meta: { align: 'end', enableReorder: false },
		cell: () => <ActionsCell />,
	},
];

// ---------------------------------------------------------------------------
// Spans/traces list — matched to o11y "Screen designs" node 2829-54659 (Spans tab):
// Content · Service · Resource name · Span ID · Parent Span ID · Secure Session ID · Timestamp,
// single-line content with a hover-revealed "Open", `Empty` placeholders, a session chip.
// ---------------------------------------------------------------------------

type SpanRow = {
	id: string; // unique row id (span ids repeat in the design)
	content: string;
	service: string;
	resource: string;
	spanId: string;
	parentSpanId: string | null;
	sessionId: string | null;
	timestamp: string;
};

const SESSION = 'aBCd5EFGh12345GHI';
const spanRows: SpanRow[] = [
	{
		id: 'r1',
		content: 'graphql.field.pushTransactionMetrics',
		service: 'public-graph',
		resource: 'worker.kafka.datasync.consumer',
		spanId: '55489g341034dc84',
		parentSpanId: null,
		sessionId: SESSION,
		timestamp: '9/28/25 02:00AM',
	},
	{
		id: 'r2',
		content: 'graphql.field.resolveViewerRoles',
		service: 'public-graph',
		resource: 'worker.kafka.datasync.consumer',
		spanId: '33369c138040cd62',
		parentSpanId: '55489g341034dc84',
		sessionId: 'oVob7AEYqsTP1whOp',
		timestamp: '9/26/25 00:00AM',
	},
	{
		id: 'r3',
		content: 'graphql.field.pushTransactionMetrics',
		service: 'public-graph',
		resource: 'worker.kafka.datasync.consumer',
		spanId: '55489g341034dc84',
		parentSpanId: null,
		sessionId: SESSION,
		timestamp: '9/28/25 02:00AM',
	},
	{
		id: 'r4',
		content: 'graphql.field.pushTransactionMetrics',
		service: 'public-graph',
		resource: 'worker.kafka.datasync.consumer',
		spanId: '55489g341034dc84',
		parentSpanId: null,
		sessionId: SESSION,
		timestamp: '9/28/25 02:00AM',
	},
	{
		id: 'r5',
		content: 'graphql.field.pushTransactionMetrics',
		service: 'public-graph',
		resource: 'worker.kafka.datasync.consumer',
		spanId: '55489g341034dc84',
		parentSpanId: null,
		sessionId: SESSION,
		timestamp: '9/28/25 02:00AM',
	},
	{
		id: 'r6',
		content: 'graphql.field.pushTransactionMetrics',
		service: 'public-graph',
		resource: 'worker.kafka.datasync.consumer',
		spanId: '55489g341034dc84',
		parentSpanId: null,
		sessionId: SESSION,
		timestamp: '9/28/25 02:00AM',
	},
	{
		id: 'r7',
		content: 'graphql.field.pushTransactionMetrics',
		service: 'public-graph',
		resource: 'worker.kafka.datasync.consumer',
		spanId: '55489g341034dc84',
		parentSpanId: null,
		sessionId: SESSION,
		timestamp: '9/28/25 02:00AM',
	},
	{
		id: 'r8',
		content: 'graphql.field.pushTransactionMetrics',
		service: 'public-graph',
		resource: 'worker.kafka.datasync.consumer',
		spanId: '55489g341034dc84',
		parentSpanId: null,
		sessionId: SESSION,
		timestamp: '9/28/25 02:00AM',
	},
	{
		id: 'r9',
		content: 'http.server.request GET /flags',
		service: 'api-gateway',
		resource: 'GET /api/v2/flags',
		spanId: '77a10b930fce21',
		parentSpanId: null,
		sessionId: null,
		timestamp: '9/28/25 02:00AM',
	},
	{
		id: 'r10',
		content: 'db.query SELECT flags',
		service: 'flags-store',
		resource: 'postgres.flags',
		spanId: '90ff2c7715ab04',
		parentSpanId: '77a10b930fce21',
		sessionId: null,
		timestamp: '9/28/25 02:00AM',
	},
];

/** Muted "Empty" placeholder for null cell values (Figma References/empty state). */
const EmptyValue = () => <span style={{ color: 'var(--lp-color-text-ui-secondary)' }}>Empty</span>;

/** Secure Session ID chip — an LP `Tag` with a session (replay) icon. */
const SessionChip = ({ id }: { id: string }) => (
	<TagGroup aria-label="Secure session ID">
		<TagList>
			<Tag id={id} textValue={id} size="small">
				<Icon name="play" size="small" /> {id}
			</Tag>
		</TagList>
	</TagGroup>
);

const meta: Meta<typeof DataTable> = {
	component: DataTable,
	title: 'Components/Collections/DataTable',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=23034-34697',
		},
	},
};

export default meta;

type Story = StoryObj<typeof DataTable<Service>>;

/** Kitchen sink: content types + search, sort, column visibility, column reorder, row actions. */
export const Overview: Story = {
	render: (args) => <DataTable<Service> {...args} data={data} columns={columns} />,
	args: { 'aria-label': 'Services', enableColumnReorder: true },
};

/**
 * Traces "Spans" list (observability), matched to the o11y screen design (node 2829-54659):
 * single-line Content with an "Open" button revealed on row hover/selection, `Empty`
 * placeholders, a Secure Session ID chip, and click-a-row-to-open (single-select + row
 * highlight). The surrounding page chrome (query bar, histogram, Overview/Spans tabs) is
 * app-level and out of scope for the component.
 */
export const TracesList: StoryObj = {
	render: () => {
		const [openedId, setOpenedId] = useState<string | null>('r2');
		const opened = spanRows.find((r) => r.id === openedId) ?? null;

		const spanColumns: ColumnDef<SpanRow>[] = [
			{
				accessorKey: 'content',
				header: 'Content',
				enableHiding: false,
				meta: { isRowHeader: true },
				cell: (info) => (
					<span
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							gap: 8,
						}}
					>
						<span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
							{info.getValue<string>()}
						</span>
						<span className="trace-open" style={{ flex: '0 0 auto' }}>
							<Button
								size="small"
								variant="default"
								onPress={() => setOpenedId(info.row.original.id)}
							>
								Open
							</Button>
						</span>
					</span>
				),
			},
			{ accessorKey: 'service', header: 'Service' },
			{ accessorKey: 'resource', header: 'Resource name' },
			{
				accessorKey: 'spanId',
				header: 'Span ID',
				cell: (info) => <MonoValue>{info.getValue<string>()}</MonoValue>,
			},
			{
				accessorKey: 'parentSpanId',
				header: 'Parent Span ID',
				cell: (info) => {
					const value = info.getValue<string | null>();
					return value ? <MonoValue>{value}</MonoValue> : <EmptyValue />;
				},
			},
			{
				accessorKey: 'sessionId',
				header: 'Secure Session ID',
				enableSorting: false,
				cell: (info) => {
					const value = info.getValue<string | null>();
					return value ? <SessionChip id={value} /> : <EmptyValue />;
				},
			},
			{ accessorKey: 'timestamp', header: 'Timestamp' },
		];

		return (
			<div className="traces-demo">
				{/* Reveal each row's "Open" button only on hover / when selected, per the design. */}
				<style>{`
					.traces-demo tbody [role='row'] .trace-open { visibility: hidden; }
					.traces-demo tbody [role='row'][data-hovered] .trace-open,
					.traces-demo tbody [role='row'][data-selected] .trace-open { visibility: visible; }
				`}</style>
				<DataTable<SpanRow>
					aria-label="Spans"
					data={spanRows}
					columns={spanColumns}
					getRowId={(r) => r.id}
					enableGlobalFilter={false}
					selectionMode="single"
					selectionBehavior="replace"
					selectedKeys={openedId ? new Set([openedId]) : new Set()}
					onSelectionChange={(keys) => {
						if (keys !== 'all') {
							const first = [...keys][0];
							setOpenedId(first != null ? String(first) : null);
						}
					}}
				/>
				{opened && (
					<div
						style={{
							marginTop: 'var(--lp-spacing-400)',
							font: 'var(--lp-text-small-1-regular)',
							color: 'var(--lp-color-text-ui-secondary)',
						}}
					>
						Opened{' '}
						<strong style={{ color: 'var(--lp-color-text-ui-primary-base)' }}>
							{opened.content}
						</strong>{' '}
						· span {opened.spanId}
					</div>
				)}
			</div>
		);
	},
};

/** Row selection (RAC injects the select-all + per-row checkbox column). */
export const WithSelection: Story = {
	render: (args) => <DataTable<Service> {...args} data={data} columns={columns} />,
	args: { 'aria-label': 'Services', selectionMode: 'multiple' },
};

/** All three Figma densities, stacked for comparison. */
export const Density: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
			{(['default', 'compact', 'tight'] as const).map((density) => (
				<div key={density}>
					<p
						style={{
							font: 'var(--lp-text-label-1-semibold)',
							marginBottom: 8,
							textTransform: 'capitalize',
						}}
					>
						{density}
					</p>
					<DataTable<Service>
						aria-label={`Services (${density})`}
						data={data.slice(0, 4)}
						columns={columns}
						density={density}
						enableGlobalFilter={false}
						enableColumnVisibility={false}
					/>
				</div>
			))}
		</div>
	),
};

/** Right-aligned numeric columns (tabular figures) with sorting. */
export const NumericColumns: Story = {
	render: (args) => (
		<DataTable<Service> {...args} data={data} columns={columns} enableColumnResize />
	),
	args: { 'aria-label': 'Services' },
};

/** Empty state. */
export const Empty: Story = {
	render: (args) => <DataTable<Service> {...args} data={[]} columns={columns} />,
	args: { 'aria-label': 'Services' },
};
