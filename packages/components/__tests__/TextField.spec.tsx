import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Input, Label, TextArea, TextField } from '../src';

describe('TextField', () => {
  it('renders an input', () => {
    render(
      <TextField>
        <Label>Label</Label>
        <Input />
      </TextField>
    );
    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('renders a textarea', () => {
    render(
      <TextField>
        <Label>Label</Label>
        <TextArea />
      </TextField>
    );
    expect(screen.getByRole('textbox')).toBeVisible();
  });
});
