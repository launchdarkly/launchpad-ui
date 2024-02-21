import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Group, IconButton, Input, Label, TextField } from '../src';

describe('Group', () => {
  it('renders', () => {
    render(
      <TextField>
        <Label>Label</Label>
        <Group>
          <Input />
          <IconButton icon="add" aria-label="add" size="small" />
        </Group>
      </TextField>
    );
    expect(screen.getByRole('group')).toBeVisible();
  });
});
