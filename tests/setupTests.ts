import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
