import type { DOMProps } from '@react-types/shared';
import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { LinkProps as AriaLinkProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Link as AriaLink, composeRenderProps } from 'react-aria-components';

import styles from './styles/Link.module.css';
import { useLPContextProps } from './utils';

const linkStyles = cva(styles.base, {
	variants: {
		variant: {
			default: styles.default,
			subtle: styles.subtle,
		},
		evident: {
			true: styles.evident,
		},
	},
	defaultVariants: {
		variant: 'default',
		evident: false,
	},
});

interface LinkProps extends AriaLinkProps, VariantProps<typeof linkStyles>, DOMProps {
	ref?: Ref<HTMLAnchorElement>;
	/** Whether the link should always be underlined, not just on hover. */
	evident?: boolean;
}

const LinkContext = createContext<ContextValue<LinkProps, HTMLAnchorElement>>(null);

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const Link = ({ ref, ...props }: LinkProps) => {
	[props, ref] = useLPContextProps(props, ref, LinkContext);
	const { variant = 'default', evident = false } = props;

	return (
		<AriaLink
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				linkStyles({ ...renderProps, variant, evident, className }),
			)}
		/>
	);
};

export { Link, LinkContext, linkStyles };
export type { LinkProps };
