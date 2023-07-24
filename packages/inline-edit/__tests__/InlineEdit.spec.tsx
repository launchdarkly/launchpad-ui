import type { InlineEditProps } from '../src';

import { useState } from 'react';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { InlineEdit } from '../src';

const InlineEditComponent = ({ ...props }: Partial<InlineEditProps>) => {
  const [editValue, setEditValue] = useState('test');

  return (
    <InlineEdit defaultValue={editValue} {...props} onSave={setEditValue}>
      <span>{editValue}</span>
    </InlineEdit>
  );
};

describe('InlineEdit', () => {
  it('renders', () => {
    render(<InlineEditComponent />);
    expect(screen.getByTestId('inline-edit')).toBeInTheDocument();
  });
});
