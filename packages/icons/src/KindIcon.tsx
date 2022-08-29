import type { IconProps } from './Icon';

import { AlertRhombus } from './AlertRhombus';
import { CheckCircle } from './CheckCircle';
import { Info } from './Info';
import { Warning } from './Warning';

type KindIconProps = {
  kind?: 'info' | 'success' | 'warning' | 'error' | 'striped';
  size?: IconProps['size'];
  className?: string;
};

const KindIcon = ({ kind, size, className }: KindIconProps) => {
  const iconSize = size ? size : 'medium';
  let body;

  switch (kind) {
    case 'success':
      body = <CheckCircle size={iconSize} />;
      break;
    case 'warning':
    case 'striped':
      body = <Warning size={iconSize} />;
      break;
    case 'error':
      body = <AlertRhombus size={iconSize} />;
      break;
    case 'info':
    default:
      body = <Info size={iconSize} />;
      break;
  }

  return <span className={className}>{body}</span>;
};

export { KindIcon };
export type { KindIconProps };
