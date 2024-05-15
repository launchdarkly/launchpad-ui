import type { ForwardedRef } from 'react';
import type { ButtonVariants } from './Button';
import type { ExternalLinkProps, LinkProps } from './Link';

import { forwardRef } from 'react';
import { composeRenderProps } from 'react-aria-components';

import { button } from './Button';
import { ExternalLink, Link } from './Link';

interface LinkButtonProps extends Omit<LinkProps, 'variant'>, ButtonVariants {}
interface ExternalLinkButtonProps extends Omit<ExternalLinkProps, 'variant'>, ButtonVariants {}

const _LinkButton = (
	{ size = 'medium', variant = 'default', ...props }: LinkButtonProps,
	ref: ForwardedRef<HTMLAnchorElement>,
) => {
	return (
		<Link
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				button({ ...renderProps, size, variant, className }),
			)}
			variant={null}
		/>
	);
};

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const LinkButton = forwardRef(_LinkButton);

const _ExternalLinkButton = (
	{ size = 'medium', variant = 'default', ...props }: ExternalLinkButtonProps,
	ref: ForwardedRef<HTMLAnchorElement>,
) => {
	return (
		<ExternalLink
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				button({ ...renderProps, size, variant, className }),
			)}
			variant={null}
		/>
	);
};

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const ExternalLinkButton = forwardRef(_ExternalLinkButton);

export { ExternalLinkButton, LinkButton };
export type { ExternalLinkButtonProps, LinkButtonProps };
