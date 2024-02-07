import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { TextField, Label, Input, Group, IconButton } from '../src';

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
