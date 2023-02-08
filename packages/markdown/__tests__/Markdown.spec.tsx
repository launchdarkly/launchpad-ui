import parse from 'html-react-parser';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Markdown } from '../src';

import { SAMPLE_MARKDOWN } from './constants';

describe('Markdown', () => {
  it('renders', () => {
    render(<Markdown source={SAMPLE_MARKDOWN} />);
    expect(screen.getByText('This is markdown content.')).toBeInTheDocument();
  });

  it('renders with children render', () => {
    render(<Markdown source={SAMPLE_MARKDOWN}>{parse}</Markdown>);
    expect(screen.getByText('This is markdown content.')).toBeInTheDocument();
  });
});
