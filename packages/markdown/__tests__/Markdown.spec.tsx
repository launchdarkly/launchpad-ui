import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Markdown } from '../src';

import { SAMPLE_MARKDOWN } from './constants';

describe('Markdown', () => {
  it('renders', () => {
    render(<Markdown source={SAMPLE_MARKDOWN} />);
    expect(screen.getByText('This is markdown content.')).toBeInTheDocument();
  });
});
