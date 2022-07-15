import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import { vi } from 'vitest';

vi.stubGlobal('scroll', vi.fn());

configure({ testIdAttribute: 'data-test-id' });
