import { AlertRhombus } from './AlertRhombus';
import { CheckCircle } from './CheckCircle';
import { Info } from './Info';
import { Warning } from './Warning';
import { IconSize } from './types';

type KindIconProps = {
  kind: 'info' | 'success' | 'warning' | 'error';
  size?: IconSize;
  className?: string;
};

const KindIcon = ({ kind, size, className }: KindIconProps) => {
  const iconSize = size ? size : IconSize.MEDIUM;
  let body;

  switch (kind) {
    case 'success':
      body = <CheckCircle size={iconSize} />;
      break;
    case 'warning':
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
