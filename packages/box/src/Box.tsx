import type { Sprinkles } from './styles/rainbow-sprinkles.css';
import type { ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { rainbowSprinkles } from './styles/rainbow-sprinkles.css';

type BoxProps = Sprinkles & {
  children?: ReactNode;
  asChild?: boolean;
  'data-test-id'?: string;
};

const Box = ({ asChild, children, 'data-test-id': testId = 'box', ...props }: BoxProps) => {
  const Component = asChild ? Slot : 'div';
  const { className, style, otherProps } = rainbowSprinkles(props);

  return (
    <Component className={className} style={style} data-test-id={testId} {...otherProps}>
      {children}
    </Component>
  );
};

export { Box };
export type { BoxProps };
