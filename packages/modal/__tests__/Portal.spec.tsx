import { it, expect, describe } from 'vitest';

import { render } from '../../../test/utils';
import { Portal } from '../src';

describe('Portal', () => {
  it('renders', () => {
    render(<Portal />);
    expect(document.querySelector('.Portal')).not.toBeNull();
  });
});
