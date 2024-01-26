import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Switch } from '../src';

describe('Switch', () => {
  it('renders', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeVisible();
  });
});
