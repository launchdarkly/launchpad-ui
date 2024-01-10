import type { ButtonVariants } from './styles/Button.css';
import type { ForwardedRef, MouseEvent } from 'react';
import type { LinkProps } from 'react-aria-components';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';

import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { Link } from 'react-aria-components';
import { useHref, useLinkClickHandler } from 'react-router-dom';

import { variants } from './styles/Button.css';

type LinkButtonProps = LinkProps & RouterLinkProps & ButtonVariants;

const LinkButton = forwardRef(
  (
    {
      size = 'medium',
      variant = 'default',
      className,
      to,
      replace,
      state,
      target,
      ...props
    }: LinkButtonProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    const href = useHref(to);
    const handleClick = useLinkClickHandler(to, {
      replace,
      state,
      target,
    });

    return (
      <Link
        {...props}
        ref={ref}
        className={clsx(variants({ size, variant }), className)}
        href={href}
        onPress={(event) => {
          props.onPress?.(event);
          // https://reactrouter.com/en/main/hooks/use-link-click-handler
          handleClick({
            ...event,
            button: 0, // https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/dom.ts#L41
            preventDefault: () => undefined,
          } as unknown as MouseEvent<HTMLAnchorElement>);
        }}
      />
    );
  }
);

LinkButton.displayName = 'LinkButton';

export { LinkButton };
export type { LinkButtonProps };
