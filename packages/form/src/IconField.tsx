import type { IconProps } from '@launchpad-ui/icons';

import { IconSize } from '@launchpad-ui/icons';

import './styles/IconField.css';

type IconFieldProps = {
  icon({ ...other }: IconProps): JSX.Element;
  children: JSX.Element | JSX.Element[];
};

const IconField = ({ icon, children }: IconFieldProps) => {
  const Icon = icon;

  return (
    <div className="IconField">
      {children}
      <Icon size={IconSize.SMALL} />
    </div>
  );
};

export { IconField };
export type { IconFieldProps };
