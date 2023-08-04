import type { PopoverProps } from '../src';

import { Item, Section } from '@react-stately/collections';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useRef } from 'react';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Popover, Button, ListBox } from '../src';

const PopoverPrimitive = ({ ...props }: Partial<PopoverProps>) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const state = useOverlayTriggerState({});

  return (
    <>
      <button ref={triggerRef}>trigger</button>
      <Popover state={state} popoverRef={popoverRef} triggerRef={triggerRef} {...props}>
        An important message
      </Popover>
    </>
  );
};

describe('Primitives', () => {
  describe('Popover', () => {
    it('renders', () => {
      render(<PopoverPrimitive />);
      expect(screen.getByText('An important message')).toBeVisible();
    });
  });

  describe('ListBox', () => {
    it('renders', () => {
      render(
        <ListBox aria-label="listbox">
          <Section title="section">
            <Item key="one">One</Item>
            <Item key="two">Two</Item>
            <Item key="three">Three</Item>
          </Section>
        </ListBox>
      );
      expect(screen.getByRole('listbox')).toBeVisible();
    });
  });

  describe('Button', () => {
    it('renders', () => {
      render(<Button>Hi</Button>);
      expect(screen.getByRole('button')).toBeVisible();
    });
  });
});
