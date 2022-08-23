import type { IconSize } from './types';

import { cx } from 'classix';
import { Children, cloneElement, isValidElement, useEffect, useId, useRef } from 'react';

import './styles/Icon.css';

type IconProps = Omit<React.HTMLProps<HTMLSpanElement>, 'size'> & {
  name?: string;
  subtle?: boolean;
  size?: IconSize;
};

const Icon = ({ name, subtle, className, size, children, ...props }: IconProps) => {
  const sizeClass = size ? `Icon--${size}` : false;
  const classes = cx('Icon', `Icon--${name}`, sizeClass, className, subtle && 'Icon--subtle');

  const svgRef = useRef<SVGElement>(null);
  const prefix = `svg-${useId()}`;

  useEffect(() => {
    const title = svgRef.current?.querySelector('title');
    const desc = svgRef.current?.querySelector('desc');

    if (title) {
      const id = `${prefix}-${name}-title`;
      title.setAttribute('id', id);
      svgRef.current?.setAttribute('aria-labelledby', id);
    }
    if (desc) {
      const id = `${prefix}-${name}-description`;
      desc.setAttribute('id', id);
      svgRef.current?.setAttribute('aria-describedby', id);
    }
  }, [name, prefix]);

  return (
    <span {...props} className={classes}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ref: svgRef,
          });
        }
        return null;
      })}
    </span>
  );
};

export { Icon };
export type { IconProps };
