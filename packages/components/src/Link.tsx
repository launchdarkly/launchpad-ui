import type { DOMProps } from '@react-types/shared';
import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { LinkProps as AriaLinkProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext, useContext } from 'react';
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

const LinkContext = createContext<LinkProps | null>(null);

interface LinkProps extends AriaLinkProps, VariantProps<typeof link>, DOMProps {
	ref?: Ref<HTMLAnchorElement>;
}

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const Link = ({ variant = 'default', href, ref, ...props }: LinkProps) => {
	const linkProps = useContext(LinkContext);

	return (
		<AriaLink
			{...props}
			{...linkProps}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				link({ ...renderProps, variant: linkProps?.variant ?? variant, className }),
			)}
			href={href}
		/>
	);
};

export { Link, LinkContext };
export type { LinkProps };
