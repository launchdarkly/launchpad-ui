import type { PopoverProps } from '../src';

import { useOverlayTriggerState } from '@react-stately/overlays';
import { useRef } from 'react';

import { Popover } from '../src';

const PopoverPrimitive = ({ ...props }: Partial<PopoverProps>) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const state = useOverlayTriggerState({});

  return (
    <>
      <button ref={triggerRef}>trigger</button>
      <Popover state={state} triggerRef={triggerRef} {...props}>
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
});
