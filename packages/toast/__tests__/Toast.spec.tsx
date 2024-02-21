import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Toast } from '../src';

describe('Toast', () => {
  it('renders', () => {
    render(<Toast kind="info" content="An important message" onDismiss={() => undefined} />);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
