import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Collapsible } from '../src';

describe('Collapsible', () => {
	const content = 'An important message';
	const label = 'More details';

	it('renders button by default', () => {
		render(<Collapsible label={label}>{content}</Collapsible>);
		expect(screen.getByRole('button').textContent).toEqual(label);
	});

	it('does not render content into dom by default', () => {
		render(<Collapsible label={label}>{content}</Collapsible>);
		expect(screen.queryByText(content)).not.toBeInTheDocument();
	});

	it('render content into dom when keepContentInDomWhenClosed is true', () => {
		render(
			<Collapsible label={label} keepContentInDomWhenClosed>
				{content}
			</Collapsible>,
		);

		expect(screen.getByText(content)).toBeInTheDocument();
		expect(screen.getByText(content)).not.toBeVisible();
	});

	it('opens panel when default trigger is pressed', async () => {
		const user = userEvent.setup();

		render(<Collapsible label={label}>{content}</Collapsible>);

		expect(screen.queryByText(content)).not.toBeInTheDocument();

		await user.click(screen.getByTestId('collapsible-trigger'));

		expect(screen.getByText(content)).toBeInTheDocument();
	});

	it('opens panel when custom trigger is pressed', async () => {
		const user = userEvent.setup();

		render(
			<Collapsible
				label={label}
				trigger={(props) => (
					<button
						onClick={props.toggleOpen}
						data-test-id='custom-collapsible-trigger'
						{...props.triggerProps}
					>
						{props.label}
					</button>
				)}
			>
				{content}
			</Collapsible>,
		);

		expect(screen.queryByText(content)).not.toBeInTheDocument();

		await user.click(screen.getByTestId('custom-collapsible-trigger'));

		expect(screen.getByText(content)).toBeInTheDocument();
	});
});
