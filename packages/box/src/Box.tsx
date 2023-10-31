import type { Sprinkles } from './styles/rainbow-sprinkles.css';
import type { ElementType, ComponentPropsWithoutRef } from 'react';

import { rainbowSprinkles } from './styles/rainbow-sprinkles.css';

type BoxProps<T extends ElementType> = Sprinkles &
  ComponentPropsWithoutRef<T> & {
    as?: T;
  };

const Box = <T extends ElementType = 'div'>({ as, children, ...props }: BoxProps<T>) => {
  const Component = as || 'div';
  const { className, style, otherProps } = rainbowSprinkles(props);

  return (
    <Component className={className} style={style} {...otherProps}>
      {children}
    </Component>
  );
};

export { Box };
export type { BoxProps };
