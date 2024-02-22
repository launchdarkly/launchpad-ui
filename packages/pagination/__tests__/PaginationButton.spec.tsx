import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { PaginationButton } from '../src/PaginationButton';

describe('PaginationButton', () => {
	it('renders', () => {
		render(
			<PaginationButton
				kind="first"
				resourceName="resource"
				disabled={false}
				onClick={() => undefined}
			/>,
		);
		expect(screen.getByLabelText('first resource page')).toBeInTheDocument();
	});
});
