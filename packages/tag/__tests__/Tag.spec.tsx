import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Tag } from '../src';

describe('Tag', () => {
  it('renders', () => {
    render(<Tag>An important message</Tag>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
