import type { IconProps } from './Icon';

import { CheckCircle } from './CheckCircle';
import { ErrorCircle } from './ErrorCircle';
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
      Component = ErrorCircle;
      break;
    case StatusIconKind.INFO:
      Component = Info;
      break;
  }

  return <Component size={size} {...rest} />;
};

export { StatusIcon };
export type { StatusIconProps };
