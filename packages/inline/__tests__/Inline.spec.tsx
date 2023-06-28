import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Inline } from '../src';

describe('Inline', () => {
  it('renders', () => {
    render(<Inline>An important message</Inline>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
