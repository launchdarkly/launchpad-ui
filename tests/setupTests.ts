import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import { vi } from 'vitest';

expect.extend(toHaveNoViolations);

vi.stubGlobal('scroll', vi.fn());

configure({ testIdAttribute: 'data-test-id' });
