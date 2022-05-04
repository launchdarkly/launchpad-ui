import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';

vi.useFakeTimers();

expect.extend(toHaveNoViolations);

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
