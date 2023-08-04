import type { PopoverProps } from '../src';

import { Item, Section } from '@react-stately/collections';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useRef } from 'react';

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
      cy.mount(<PopoverPrimitive />);
      cy.contains('An important message').should('be.visible');
    });

    it('is accessible', () => {
      cy.mount(<PopoverPrimitive />);
      cy.checkA11y();
    });
  });

  describe('ListBox', () => {
    it('renders', () => {
      cy.mount(
        <ListBox aria-label="listbox">
          <Item key="one">One</Item>
        </ListBox>
      );
      cy.getByRole('listbox').should('be.visible');
    });

    it('is accessible', () => {
      cy.mount(
        <ListBox aria-label="listbox">
          <Section title="section">
            <Item key="one">One</Item>
            <Item key="two">Two</Item>
            <Item key="three">Three</Item>
          </Section>
        </ListBox>
      );
      cy.checkA11y();
    });
  });

  describe('Button', () => {
    it('renders', () => {
      cy.mount(<Button>Hi</Button>);
      cy.contains('Hi').should('be.visible');
    });

    it('is accessible', () => {
      cy.mount(<Button>Hi</Button>);
      cy.checkA11y();
    });
  });
});
