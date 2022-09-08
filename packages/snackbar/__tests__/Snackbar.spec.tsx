import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Snackbar, SnackbarKind } from '../src';

const props = {
  kind: SnackbarKind.INFO,
  description: 'This is a message',
  title: 'Snackbar header',
};

describe('Snackbar', () => {
  it('renders', () => {
    render(<Snackbar {...props} />);
    expect(screen.getByText('This is a message')).toBeVisible();
  });
});
