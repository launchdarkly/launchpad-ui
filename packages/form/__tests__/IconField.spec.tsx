import { Icon } from '@launchpad-ui/icons';
import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { IconField } from '../src';

describe('IconField', () => {
  it('renders', () => {
    render(
      <IconField icon={<Icon name="info" />}>
        <input type="text" aria-label="Date" onChange={() => undefined} value="12/01/2022" />
      </IconField>
    );
    expect(screen.getByLabelText('Date')).toBeInTheDocument();
  });
});
