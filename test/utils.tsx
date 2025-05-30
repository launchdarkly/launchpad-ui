import type { ReactElement } from 'react';

import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
	cleanup();
});

const customRender = (ui: ReactElement, options = {}): ReturnType<typeof render> =>
	render(ui, {
		// wrap provider(s) here if needed
		wrapper: ({ children }) => <>{children}</>,
		...options,
	});

// biome-ignore lint/performance/noReExportAll: ignore
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
