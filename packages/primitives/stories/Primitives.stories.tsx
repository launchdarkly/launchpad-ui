/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from '@storybook/react';

import { Item, Section } from '@react-stately/collections';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useRef } from 'react';

import { Popover as PopoverPrimitive, ListBox as ListBoxPrimitive } from '../src';

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
    const popoverRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const state = useOverlayTriggerState({});
    return (
      <>
        <button ref={triggerRef}>trigger</button>
        <PopoverPrimitive state={state} popoverRef={popoverRef} triggerRef={triggerRef} {...args}>
          <span>Hi there!</span>
        </PopoverPrimitive>
      </>
    );
  },
};

export const ListBox: Story = {
  render: (args) => {
    return (
      <ListBoxPrimitive {...args} aria-label="listbox">
        <Section title="Veggies">
          <Item key="lettuce">Lettuce</Item>
          <Item key="tomato">Tomato</Item>
          <Item key="onion">Onion</Item>
        </Section>
        <Section title="Protein">
          <Item key="ham">Ham</Item>
          <Item key="tuna">Tuna</Item>
          <Item key="tofu">Tofu</Item>
        </Section>
        <Section title="Condiments">
          <Item key="mayo">Mayonaise</Item>
          <Item key="mustard">Mustard</Item>
          <Item key="ranch">Ranch</Item>
        </Section>
      </ListBoxPrimitive>
    );
  },
};
