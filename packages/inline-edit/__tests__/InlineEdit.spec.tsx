import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { InlineEdit } from '../src';

describe('InlineEdit', () => {
  it('renders', () => {
    render(<InlineEdit>An important message</InlineEdit>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
