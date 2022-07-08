import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Checkbox } from '../src';

describe('Checkbox', () => {
  it('renders', () => {
    render(
      <Checkbox checked={false} aria-label="Test checkbox" onChange={() => undefined}>
        Label
      </Checkbox>
    );
    expect(screen.getByLabelText('Test checkbox')).toBeInTheDocument();
  });

  it('renders disabled', () => {
    render(
      <Checkbox
        checked={false}
        aria-label="Test checkbox"
        onChange={() => undefined}
        disabled={true}
      >
        Label
      </Checkbox>
    );
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(
      <Checkbox checked={false} onChange={() => undefined}>
        Label
      </Checkbox>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
