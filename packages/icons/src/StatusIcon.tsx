import type { IconProps } from './Icon';

import { AlertRhombus } from './AlertRhombus';
import { CheckCircle } from './CheckCircle';
import { Info } from './Info';
import { Warning } from './Warning';

type StatusIconProps = IconProps & {
  kind: 'info' | 'success' | 'warning' | 'error';
};

const StatusIcon = ({ kind, size = 'medium', ...rest }: StatusIconProps) => {
  let Component;
  let ariaLabel;

  switch (kind) {
    case 'success':
      Component = CheckCircle;
      ariaLabel = 'Success';
      break;
    case 'warning':
      Component = Warning;
      ariaLabel = 'Warning';
      break;
    case 'error':
      Component = AlertRhombus;
      ariaLabel = 'Error';
      break;
    case 'info':
      Component = Info;
      ariaLabel = 'Info';
      break;
  }

  return <Component aria-label={`${ariaLabel} icon`} role="img" size={size} {...rest} />;
};

export { StatusIcon };
export type { StatusIconProps };
