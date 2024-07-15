import type { DOMProps } from '@react-types/shared';
import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type { LinkProps as AriaLinkProps } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Link as AriaLink, composeRenderProps, useSlottedContext } from 'react-aria-components';

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

interface LinkProps extends AriaLinkProps, VariantProps<typeof link>, DOMProps {}

const _Link = (
	{ variant = 'default', href, ...props }: LinkProps,
	ref: ForwardedRef<HTMLAnchorElement>,
) => {
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
				href={href}
			/>
			{href && linkProps && <Icon name="slash" className={styles.separator} />}
		</>
	);
};

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const Link = forwardRef(_Link);

export { Link };
export type { LinkProps };
