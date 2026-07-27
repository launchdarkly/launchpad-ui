import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../src/Label';
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from '../src/Slider';

const meta: Meta<typeof Slider> = {
	component: Slider,
	title: 'Components/Forms/Slider',
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Example: Story = {
	args: { defaultValue: 30, style: { width: 300 } },
	render: (args) => (
		<Slider {...args}>
			<Label>Opacity</Label>
			<SliderOutput />
			<SliderTrack>
				<SliderFill />
				<SliderThumb />
			</SliderTrack>
		</Slider>
	),
};

export const Range: Story = {
	args: { defaultValue: [25, 75], style: { width: 300 } },
	render: (args) => (
		<Slider {...args}>
			<Label>Price range</Label>
			<SliderOutput>
				{({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ')}
			</SliderOutput>
			<SliderTrack>
				{({ state }) => (
					<>
						<SliderFill />
						{state.values.map((_, i) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: a thumb's index is its stable identity
							<SliderThumb key={i} index={i} />
						))}
					</>
				)}
			</SliderTrack>
		</Slider>
	),
};

export const Vertical: Story = {
	args: {
		defaultValue: 40,
		orientation: 'vertical',
		'aria-label': 'Volume',
		style: { height: 200 },
	},
	render: (args) => (
		<Slider {...args}>
			<SliderTrack>
				<SliderFill />
				<SliderThumb />
			</SliderTrack>
		</Slider>
	),
};

export const Disabled: Story = {
	args: { defaultValue: 60, isDisabled: true, style: { width: 300 } },
	render: (args) => (
		<Slider {...args}>
			<Label>Brightness</Label>
			<SliderOutput />
			<SliderTrack>
				<SliderFill />
				<SliderThumb />
			</SliderTrack>
		</Slider>
	),
};

const formats: Array<{
	label: string;
	minValue: number;
	maxValue: number;
	step?: number;
	defaultValue: number | number[];
	formatOptions: Intl.NumberFormatOptions;
}> = [
	{
		label: 'Budget (currency)',
		minValue: 0,
		maxValue: 1000,
		defaultValue: [250, 750],
		formatOptions: { style: 'currency', currency: 'USD' },
	},
	{
		label: 'Opacity (percent)',
		minValue: 0,
		maxValue: 1,
		step: 0.01,
		defaultValue: [0.2, 0.6],
		formatOptions: { style: 'percent' },
	},
	{
		label: 'Distance (unit)',
		minValue: 0,
		maxValue: 100,
		defaultValue: 12,
		formatOptions: { style: 'unit', unit: 'kilometer' },
	},
	{
		label: 'Temperature (unit)',
		minValue: -10,
		maxValue: 40,
		defaultValue: 21,
		formatOptions: { style: 'unit', unit: 'celsius' },
	},
	{
		label: 'Weight (decimal)',
		minValue: 0,
		maxValue: 10,
		step: 0.1,
		defaultValue: 2.5,
		formatOptions: { minimumFractionDigits: 2 },
	},
];

export const Formatted: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
			{formats.map(({ label, ...args }) => (
				<Slider key={label} {...args} style={{ width: 300 }}>
					<Label>{label}</Label>
					<SliderOutput />
					<SliderTrack>
						{({ state }) => (
							<>
								<SliderFill />
								{state.values.map((_, i) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: a thumb's index is its stable identity
									<SliderThumb key={i} index={i} />
								))}
							</>
						)}
					</SliderTrack>
				</Slider>
			))}
		</div>
	),
};
