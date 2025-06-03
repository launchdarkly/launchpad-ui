import '@testing-library/jest-dom';

import { configure } from '@testing-library/react';
import { vi } from 'vitest';

vi.stubGlobal('scroll', vi.fn());

vi.stubGlobal(
	'ResizeObserver',
	window.ResizeObserver ||
		vi.fn().mockImplementation(() => ({
			disconnect: vi.fn(),
			observe: vi.fn(),
			unobserve: vi.fn(),
		})),
);

configure({ testIdAttribute: 'data-test-id' });
