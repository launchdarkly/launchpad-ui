import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Slot } from '../src';

describe('Slot', () => {
  it('renders', () => {
    render(<Slot>An important message</Slot>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
