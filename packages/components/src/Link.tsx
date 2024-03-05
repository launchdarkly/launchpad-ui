import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef, MouseEvent } from 'react';
import type { LinkProps as AriaLinkProps } from 'react-aria-components';
import type { LinkProps as _RouterLinkProps } from 'react-router-dom';

import { cva } from 'class-variance-authority';
import { Link as AriaLink, composeRenderProps } from 'react-aria-components';
import { useHref, useLinkClickHandler } from 'react-router-dom';

import styles from './styles/Link.module.css';
import { forwardRef } from './utils';

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

type RouterLinkProps = Omit<_RouterLinkProps, 'children' | 'className' | 'slot'>;
type LinkProps = AriaLinkProps & Partial<RouterLinkProps> & VariantProps<typeof link>;

const _RACLink = (
	{ variant = 'default', ...props }: AriaLinkProps & VariantProps<typeof link>,
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
const RACLink = forwardRef(_RACLink);

const _RouterLink = (
	{ to, replace, state, ...props }: AriaLinkProps & RouterLinkProps,
	ref: ForwardedRef<HTMLAnchorElement>,
) => {
	const href = useHref(to);
	const handleClick = useLinkClickHandler(to, {
		replace,
		state,
		target: props.target,
	});

	return (
		<RACLink
			{...props}
			ref={ref}
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
const RouterLink = forwardRef(_RouterLink);

const _Link = ({ to, ...props }: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
	return to ? <RouterLink {...props} to={to} ref={ref} /> : <RACLink {...props} ref={ref} />;
};

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const Link = forwardRef(_Link);

export { Link };
export type { LinkProps };
