import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Slider } from '../src';

describe('Slider', () => {
  it('renders', () => {
    render(<Slider min={0} max={50} value={25} onChange={() => undefined} />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });
});
