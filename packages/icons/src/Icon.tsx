import type { IconSize } from './types';

import { cx } from 'classix';
import { useEffect, useId, useRef } from 'react';

import './styles/Icon.css';

type IconProps = Omit<React.HTMLProps<HTMLSpanElement>, 'size'> & {
  name?: string;
  subtle?: boolean;
  size?: IconSize;
};

const Icon = ({ name, subtle, className, size, children, ...props }: IconProps) => {
  const sizeClass = size ? `Icon--${size}` : false;
  const classes = cx('Icon', `Icon--${name}`, sizeClass, className, subtle && 'Icon--subtle');

  const ref = useRef<HTMLSpanElement>(null);
  const prefix = `svg-${useId()}`;

  useEffect(() => {
    const title = ref.current?.querySelector('title');
    const desc = ref.current?.querySelector('desc');
    const svg = ref.current?.querySelector('svg');

    if (title) {
      const id = `${prefix}-${name}-title`;
      title.setAttribute('id', id);
      svg?.setAttribute('aria-labelledby', id);
    }
    if (desc) {
      const id = `${prefix}-${name}-description`;
      desc.setAttribute('id', id);
      svg?.setAttribute('aria-describedby', id);
    }
  }, [name, prefix]);

  return (
    <span {...props} className={classes} ref={ref}>
      {children}
    </span>
  );
};

export { Icon };
export type { IconProps };
