/* eslint-disable testing-library/no-node-access */
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { render } from '../../../test/utils';
import { Portal } from '../src';

describe('Portal', () => {
  it('renders', () => {
    render(<Portal />);
    expect(document.querySelector('.Portal')).not.toBeNull();
  });

  it('is accessible', async () => {
    render(<Portal />);
    const portal = document.querySelector('.Portal') as Element;
    const results = await axe(portal);
    expect(results).toHaveNoViolations();
  });
});
