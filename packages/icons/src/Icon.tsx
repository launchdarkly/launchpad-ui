import type { HTMLProps, ReactElement } from 'react';

import { cx } from 'classix';
import { Children, cloneElement, isValidElement, useEffect, useId, useRef } from 'react';

import styles from './styles/Icon.module.css';

type IconProps = Omit<HTMLProps<HTMLSpanElement>, 'size'> & {
  name?: string;
  subtle?: boolean;
  size?: 'micro' | 'tiny' | 'small' | 'medium' | 'mlarge' | 'large' | 'xlarge' | 'huge';
  'data-test-id'?: string;
};

const Icon = ({
  name,
  subtle,
  className,
  size,
  children,
  'data-test-id': testId = 'icon',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-hidden': ariaHidden,
  ...props
}: IconProps) => {
  const sizeClass = size ? styles[size] : false;
  const classes = cx(styles.icon, sizeClass, subtle && styles.subtle, `icon-${name}`, className);

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

  const isAriaHidden = ariaHidden ?? (!ariaLabelledBy && !ariaLabel);

  return (
    <span data-test-id={testId} className={classes}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement, {
            'aria-hidden': isAriaHidden,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledBy,
            ref: svgRef,
            ...props,
          });
        }
        return null;
      })}
    </span>
  );
};

export { Icon };
export type { IconProps };
