import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';
import { vi } from 'vitest';

expect.extend(toHaveNoViolations);

vi.stubGlobal('scroll', vi.fn());
