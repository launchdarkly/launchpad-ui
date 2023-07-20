import type { IconName } from './types';
import type { ComponentProps } from 'react';

import { cx } from 'classix';
import { useContext, useId } from 'react';

import { IconContext } from './context';
import styles from './styles/Icon.module.css';

type IconProps = ComponentProps<'svg'> & {
  name: IconName;
  subtle?: boolean;
  size?: 'micro' | 'tiny' | 'small' | 'medium' | 'mlarge' | 'large' | 'xlarge' | 'huge';
  'data-test-id'?: string;
  title?: string;
  description?: string;
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
  title,
  description,
  focusable = false,
  role = 'img',
  ...props
}: IconProps) => {
  const sizeClass = size ? styles[size] : false;
  const classes = cx(styles.icon, sizeClass, subtle && styles.subtle, `icon-${name}`, className);
  const prefix = `svg-${useId()}`;
  const isAriaHidden = ariaHidden ?? (!ariaLabelledBy && !ariaLabel);
  const titleId = title && `${prefix}-${name}-title`;
  const descriptionId = description && `${prefix}-${name}-description`;

  const { path: contextPath } = useContext(IconContext);
  const iconId = `lp-icon-${name}`;
  const spritePath = contextPath === undefined ? '/static/sprite.svg' : contextPath;

  return (
    <span data-test-id={testId} className={classes}>
      <svg
        aria-hidden={isAriaHidden}
        aria-label={ariaLabel}
        aria-labelledby={titleId || ariaLabelledBy}
        aria-describedby={descriptionId}
        focusable={focusable}
        role={role}
        {...props}
      >
        {title && <title id={titleId}>{title}</title>}
        {description && <desc id={descriptionId}>{description}</desc>}
        <use href={`${spritePath}#${iconId}`} />
      </svg>
    </span>
  );
};

export { Icon };
export type { IconProps };
