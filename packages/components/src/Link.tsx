import type { DOMProps } from '@react-types/shared';
import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type { LinkProps as AriaLinkProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Link as AriaLink, composeRenderProps } from 'react-aria-components';

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
	{ variant = 'default', ...props }: LinkProps,
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
const Link = forwardRef(_Link);

export { Link };
export type { LinkProps };
