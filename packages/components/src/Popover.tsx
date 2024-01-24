import type { ForwardedRef } from 'react';
import type {
  OverlayArrowProps as AriaOverlayArrowProps,
  PopoverProps as AriaPopoverProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
  OverlayArrow as AriaOverlayArrow,
  Popover as AriaPopover,
  composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Popover.module.css';

type PopoverProps = Omit<AriaPopoverProps, 'offset' | 'crossOffset'>;
type OverlayArrowProps = Omit<AriaOverlayArrowProps, 'children'>;

const popover = cva(styles.popover);
const arrow = cva(styles.arrow);

const _Popover = (props: PopoverProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <AriaPopover
      {...props}
      offset={0}
      crossOffset={0}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        popover({ ...renderProps, className })
      )}
    />
  );
};

const Popover = forwardRef(_Popover);

const _OverlayArrow = (props: OverlayArrowProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <AriaOverlayArrow
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        arrow({ ...renderProps, className })
      )}
    >
      <svg width={12} height={12} viewBox="0 0 12 12">
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </AriaOverlayArrow>
  );
};

const OverlayArrow = forwardRef(_OverlayArrow);

export { OverlayArrow, Popover };
export type { OverlayArrowProps, PopoverProps };
