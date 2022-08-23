import type { IconSize } from './types';

import { cx } from 'classix';
import { Children, cloneElement, isValidElement, useEffect, useRef } from 'react';
import { v4 } from 'uuid';

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

  useEffect(() => {
    const title = svgRef.current?.querySelector('title');
    const desc = svgRef.current?.querySelector('desc');
    const prefix = `svg-${v4()}`;

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
  }, [name]);

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
