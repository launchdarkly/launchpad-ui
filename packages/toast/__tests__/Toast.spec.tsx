import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Toast, ToastKind } from '../src';

describe('Toast', () => {
  it('renders', () => {
    render(<Toast kind={ToastKind.INFO} content="An important message" />);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
