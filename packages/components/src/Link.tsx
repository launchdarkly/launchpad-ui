import type { DOMProps } from '@react-types/shared';
import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type { LinkProps as AriaLinkProps } from 'react-aria-components';
import type { To } from 'react-router-dom';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Link as AriaLink, composeRenderProps, useSlottedContext } from 'react-aria-components';
import { useHref } from 'react-router-dom';

import { LinkContext } from './Breadcrumbs';
import styles from './styles/Link.module.css';

const link = cva(styles.base, {
	variants: {
		variant: {
			default: styles.default,
			subtle: styles.subtle,
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface BaseLinkProps extends AriaLinkProps, VariantProps<typeof link>, DOMProps {}

interface LinkProps extends Omit<BaseLinkProps, 'href'> {
	href?: To;
}

interface ExternalLinkProps extends Omit<BaseLinkProps, 'routerOptions'> {}

const _Link = (
	{ variant = 'default', href, ...props }: LinkProps,
	ref: ForwardedRef<HTMLAnchorElement>,
) => {
	// @ts-expect-error href can be undefined https://react-spectrum.adobe.com/react-aria/Link.html#javascript-handled-links
	const routerHref = useHref(href);
	const linkProps = useSlottedContext(LinkContext);

	return (
		<>
			<AriaLink
				{...props}
				{...linkProps}
				ref={ref}
				className={composeRenderProps(props.className, (className, renderProps) =>
					link({ ...renderProps, variant: linkProps?.variant ?? variant, className }),
				)}
				href={href ? routerHref : undefined}
			/>
			{href && linkProps && <Icon name="chevron-right" size="small" />}
		</>
	);
};

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const Link = forwardRef(_Link);

const _ExternalLink = (
	{ variant = 'default', ...props }: ExternalLinkProps,
	ref: ForwardedRef<HTMLAnchorElement>,
) => {
	return (
		<AriaLink
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				link({ ...renderProps, variant, className }),
			)}
		/>
	);
};

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const ExternalLink = forwardRef(_ExternalLink);

export { ExternalLink, Link };
export type { ExternalLinkProps, LinkProps };
