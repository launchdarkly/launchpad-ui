import { InlineEdit } from '@launchpad-ui/core';
import { useState } from 'react';

export default function Index() {
  const [editValue, setEditValue] = useState('edit me');
  return (
    <InlineEdit defaultValue={editValue} onSave={setEditValue}>
      <span>{editValue}</span>
    </InlineEdit>
  );
}
