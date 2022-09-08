import type { SnackbarKind } from './types';
import type { HTMLAttributes, ReactElement } from 'react';

import { ButtonKind, IconButton, IconButtonSize } from '@launchpad-ui/button';
import { Close, IconSize, KindIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import './styles/Snackbar.css';

type SnackbarProps = HTMLAttributes<HTMLDivElement> & {
  kind: SnackbarKind;
  title?: string;
  description: string;
  cta?: ReactElement<HTMLAnchorElement>;
};

const Snackbar = ({ className, kind, title, description, cta, ...rest }: SnackbarProps) => {
  return (
    <div {...rest} className={cx('Snackbar', `Snackbar--${kind}`, className)} role="status">
      <KindIcon kind={kind} className="Snackbar-icon" />
      <div className="Snackbar-content">
        {title && <h4 className="Snackbar-heading">{title}</h4>}
        <span className="Snackbar-description">{description}</span> {cta}
      </div>
      <IconButton
        icon={<Close size={IconSize.SMALL} />}
        size={IconButtonSize.SMALL}
        aria-label="Dismiss"
        kind={ButtonKind.CLOSE}
        className="Snackbar-close"
        data-test-id="snackbar-dismiss"
      />
    </div>
  );
};

export { Snackbar };
export type { SnackbarProps };
