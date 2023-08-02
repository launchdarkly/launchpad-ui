/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from '@storybook/react';

import { useOverlayTriggerState } from '@react-stately/overlays';
import { useRef } from 'react';

import { Popover as PopoverPrimitive } from '../src';

export default {
  title: 'Components/Primitives',
  description: 'Elements used as the foundation of other components.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__PRIMITIVES,
    },
  },
};

type Story = StoryObj;

export const Popover: Story = {
  render: (args) => {
    const triggerRef = useRef<HTMLButtonElement>(null);
    const state = useOverlayTriggerState({});
    return (
      <>
        <button ref={triggerRef}>trigger</button>
        <PopoverPrimitive state={state} triggerRef={triggerRef} {...args}>
          <span>Hi there!</span>
        </PopoverPrimitive>
      </>
    );
  },
};
