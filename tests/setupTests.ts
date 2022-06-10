import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import { vi } from 'vitest';

expect.extend(toHaveNoViolations);

vi.stubGlobal('scroll', vi.fn());

configure({ testIdAttribute: 'data-test-id' });

// https://github.com/nickcolley/jest-axe/issues/147
// ran into this issue with the IconField component.
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
