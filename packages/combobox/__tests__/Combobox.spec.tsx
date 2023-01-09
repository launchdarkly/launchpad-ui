import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Combobox } from '../src';

describe('Combobox', () => {
  it('renders', () => {
    render(<Combobox>An important message</Combobox>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
