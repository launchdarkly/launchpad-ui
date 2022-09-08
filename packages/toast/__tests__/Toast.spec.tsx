import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Toast } from '../src';

describe('Toast', () => {
  it('renders', () => {
    render(<Toast>An important message</Toast>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
