import type { IconProps } from './Icon';

import { AlertRhombus } from './AlertRhombus';
import { CheckCircle } from './CheckCircle';
import { Info } from './Info';
import { Warning } from './Warning';

type StatusIconProps = IconProps & {
  kind: 'info' | 'success' | 'warning' | 'error';
};

const StatusIcon = ({ kind, size = 'medium', ...rest }: StatusIconProps) => {
  let Component = Info;

  switch (kind) {
    case 'success':
      Component = CheckCircle;
      break;
    case 'warning':
      Component = Warning;
      break;
    case 'error':
      Component = AlertRhombus;
      break;
    case 'info':
      Component = Info;
      break;
  }

  return <Component aria-hidden={false} size={size} {...rest} />;
};

export { StatusIcon };
export type { StatusIconProps };
