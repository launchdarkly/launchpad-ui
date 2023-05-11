import type { IconProps } from '@launchpad-ui/icons';
import type { ComponentProps } from 'react';

import { cx } from 'classix';

import styles from './styles/Form.module.css';

type IconFieldProps = ComponentProps<'div'> & {
  icon(args: IconProps): JSX.Element;
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
  const Icon = icon;

  const classes = cx(styles.iconField, className);

  return (
    <div className={classes} data-test-id={testId} {...rest}>
      {children}
      <Icon size="small" className={styles.iconFieldIcon} />
    </div>
  );
};

export { IconField };
export type { IconFieldProps };
