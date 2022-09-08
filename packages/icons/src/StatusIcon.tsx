import type { IconProps } from './Icon';

import { AlertRhombus } from './AlertRhombus';
import { CheckCircle } from './CheckCircle';
import { Info } from './Info';
import { Warning } from './Warning';
import { IconSize, StatusIconKind } from './types';

type StatusIconProps = IconProps & {
  kind: StatusIconKind;
};

const StatusIcon = ({ kind, size = IconSize.MEDIUM, ...rest }: StatusIconProps) => {
  let Component = Info;

  switch (kind) {
    case StatusIconKind.SUCCESS:
      Component = CheckCircle;
      break;
    case StatusIconKind.WARNING:
    case StatusIconKind.STRIPED:
      Component = Warning;
      break;
    case StatusIconKind.ERROR:
      Component = AlertRhombus;
      break;
    case StatusIconKind.INFO:
      Component = Info;
      break;
  }

  return <Component size={size} {...rest} />;
};

export { StatusIcon };
export type { StatusIconProps };
