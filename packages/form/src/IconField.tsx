import type { IconProps } from '@launchpad-ui/icons';
import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/IconField.css';

type IconFieldProps = HTMLAttributes<HTMLDivElement> & {
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

  const classes = cx('IconField', className);

  return (
    <div className={classes} data-test-id={testId} {...rest}>
      {children}
      <Icon className="IconField-icon" size="small" />
    </div>
  );
};

export { IconField };
export type { IconFieldProps };
