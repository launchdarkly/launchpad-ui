import { describe, expect, it } from 'vitest';

import { render } from '@launchpad-ui/test-utils';

import { Button, FileTrigger } from '../src';

describe('FileTrigger', () => {
	it('renders', () => {
		render(
			<FileTrigger>
				<Button>Button</Button>
			</FileTrigger>,
		);
		const input = document.querySelector('input[type="file"]');
		expect(input).toBeInTheDocument();
	});
});
