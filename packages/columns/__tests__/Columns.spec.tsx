import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Column, Columns } from '../src';

describe('Columns', () => {
	it('renders', () => {
		render(
			<Columns>
				<Column size="1/3">1</Column>
				<Column size="1/3">2</Column>
				<Column size="1/3">3</Column>
			</Columns>,
		);
		expect(screen.getByTestId('columns')).toBeInTheDocument();
	});
});
