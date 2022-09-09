import type { IconProps } from '@launchpad-ui/icons';
import type { HTMLAttributes } from 'react';

import { IconSize } from '@launchpad-ui/icons';
import { cx } from 'classix';

import './styles/IconField.css';

type IconFieldProps = HTMLAttributes<HTMLDivElement> & {
  icon(args: IconProps): JSX.Element;
  children: JSX.Element | JSX.Element[];
};

const IconField = ({ icon, children, className, ...rest }: IconFieldProps) => {
  const Icon = icon;

  const classes = cx('IconField', className);

  return (
    <div className={classes} {...rest}>
      {children}
      <Icon size={IconSize.SMALL} />
    </div>
  );
};

export { IconField };
export type { IconFieldProps };
