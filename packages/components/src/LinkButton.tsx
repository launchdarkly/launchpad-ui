import type { ButtonVariants } from './Button';
import type { ForwardedRef, MouseEvent } from 'react';
import type { LinkProps } from 'react-aria-components';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';

import { forwardRef } from 'react';
import { Link, composeRenderProps } from 'react-aria-components';
import { useHref, useLinkClickHandler } from 'react-router-dom';

import { button } from './Button';

type LinkButtonProps = LinkProps & RouterLinkProps & ButtonVariants;

const _LinkButton = (
  { size = 'medium', variant = 'default', to, replace, state, target, ...props }: LinkButtonProps,
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
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, size, variant, className })
      )}
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
};

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const LinkButton = forwardRef(_LinkButton);

export { LinkButton };
export type { LinkButtonProps };
