import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Snackbar } from '../src';

describe('Snackbar', () => {
  it('renders', () => {
    render(<Snackbar>An important message</Snackbar>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
