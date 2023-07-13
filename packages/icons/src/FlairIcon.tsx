import type { IconProps } from './Icon';
import type { ComponentProps, ReactElement } from 'react';

import { cx } from 'classix';
import { cloneElement } from 'react';

import styles from './styles/Icon.module.css';

type FlairIconProps = Omit<ComponentProps<'div'>, 'className'> & {
  'data-test-id'?: string;
  gradient?: 'purpleToBlue' | 'yellowToCyan' | 'pinkToPurple' | 'cyanToBlue' | 'cyanToPurple';
  isRounded?: boolean;
  children: ReactElement<Omit<IconProps, 'size'>>;
};

const FlairIcon = ({
  children,
  'data-test-id': testId = 'flair-icon',
  isRounded,
  gradient = 'purpleToBlue',
  ...props
}: FlairIconProps) => {
  const icon = cloneElement(children as ReactElement<IconProps>, {
    size: 'medium',
    className: styles.flairIcon,
  });

  const classes = cx(styles.flairIconContainer, styles[gradient], isRounded && styles.isRounded);

  return (
    <div className={classes} {...props} data-test-id={testId}>
      {icon}
    </div>
  );
};

export { FlairIcon };
export type { FlairIconProps };
