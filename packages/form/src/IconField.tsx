import type { IconProps } from '@launchpad-ui/icons';
import type { ComponentProps, ReactElement } from 'react';

import { cx } from 'classix';
import { cloneElement } from 'react';

import styles from './styles/Form.module.css';

type IconFieldProps = ComponentProps<'div'> & {
  icon: ReactElement<IconProps>;
  children: JSX.Element | JSX.Element[];
  'data-test-id'?: string;
};

const IconField = ({
  icon,
  children,
  className,
  'data-test-id': testId = 'icon-field',
  ...rest
}: IconFieldProps) => {
  const renderIcon = cloneElement(icon, { size: 'small', className: styles.iconFieldIcon });

  const classes = cx(styles.iconField, className);

  return (
    <div className={classes} data-test-id={testId} {...rest}>
      {children}
      {renderIcon}
    </div>
  );
};

export { IconField };
export type { IconFieldProps };
