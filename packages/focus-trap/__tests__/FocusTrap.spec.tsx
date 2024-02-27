import type { ReactNode } from 'react';

import { describe, expect, it } from 'vitest';

import { render, renderHook, screen, userEvent } from '../../../test/utils';
import { FocusTrap, FocusTrapContext, useFocusTrapContext } from '../src';

const createComponent = () => (
	<>
		<FocusTrap autoFocus restoreFocus>
			<button data-test-id="in-trap" type="button">
				In
			</button>
		</FocusTrap>
		<button data-test-id="out-trap" type="button">
			Out
		</button>
	</>
);

describe('FocusTrap', () => {
	it('contains focus', async () => {
		const user = userEvent.setup();
		render(createComponent());

		await user.tab();
		expect(screen.getByTestId('in-trap')).toHaveFocus();
	});

	it('does not contain focus when contain provided is false', async () => {
		const user = userEvent.setup();
		render(createComponent(), {
			wrapper: ({ children }: { children: ReactNode }) => (
				<FocusTrapContext.Provider value={{ contain: false }}>{children}</FocusTrapContext.Provider>
			),
		});

		await user.tab();
		expect(screen.getByTestId('out-trap')).toHaveFocus();
	});

	it('returns context when useFocusTrapContext is called', async () => {
		const { result } = renderHook(() => useFocusTrapContext());
		expect(result.current.contain).toBeTruthy();
	});
});
