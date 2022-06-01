import { Component } from 'react';

import { CheckCircle } from './CheckCircle';
import { ErrorCircle } from './ErrorCircle';
import { Info } from './Info';
import { Warning } from './Warning';
import { IconSize } from './types';

type KindIconProps = {
  kind: 'info' | 'success' | 'warning' | 'error' | 'striped';
  size?: IconSize;
  className?: string;
};

class KindIcon extends Component<KindIconProps> {
  render() {
    const { kind, size, className } = this.props;
    const iconSize = size ? size : IconSize.MEDIUM;
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
        body = <ErrorCircle size={iconSize} />;
        break;
      case 'info':
      default:
        body = <Info size={iconSize} />;
        break;
    }

    return <span className={className}>{body}</span>;
  }
}

export { KindIcon };
export type { KindIconProps };
