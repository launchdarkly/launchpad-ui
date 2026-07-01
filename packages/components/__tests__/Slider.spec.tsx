import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Label, Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from '../src';

describe('Slider', () => {
	it('renders a single-thumb slider composition', () => {
		render(
			<Slider defaultValue={30}>
				<Label>Opacity</Label>
				<SliderOutput />
				<SliderTrack>
					<SliderFill />
					<SliderThumb />
				</SliderTrack>
			</Slider>,
		);
		expect(screen.getByRole('group', { name: 'Opacity' })).toBeVisible();
		expect(screen.getByRole('slider', { name: 'Opacity' })).toHaveValue('30');
		expect(screen.getByText('30')).toBeVisible();
	});

	it('renders a thumb per value for a range slider', () => {
		render(
			<Slider defaultValue={[25, 75]} aria-label="Price range">
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
			</Slider>,
		);
		const thumbs = screen.getAllByRole('slider');
		expect(thumbs).toHaveLength(2);
		expect(thumbs[0]).toHaveValue('25');
		expect(thumbs[1]).toHaveValue('75');
	});

	it('applies the disabled state', () => {
		render(
			<Slider defaultValue={60} isDisabled aria-label="Brightness">
				<SliderTrack>
					<SliderThumb />
				</SliderTrack>
			</Slider>,
		);
		expect(screen.getByRole('slider', { name: 'Brightness' })).toBeDisabled();
	});
});
