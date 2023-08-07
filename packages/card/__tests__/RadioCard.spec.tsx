import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { RadioCard } from '../src';

describe('RadioCard', () => {
  it('renders', () => {
    render(<RadioCard label="label" id="label" />);
    expect(screen.getByText('label')).toBeInTheDocument();
  });
});

it('hides subtext when disabled', async () => {
  render(<RadioCard label="label" id="label" value="label" subText="subtext" disabled />);
  expect(screen.queryByText('subtext')).not.toBeVisible();
});
