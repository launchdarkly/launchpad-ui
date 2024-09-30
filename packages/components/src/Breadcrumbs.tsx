import type { forwardRefType } from '@react-types/shared';
import type { ForwardedRef } from 'react';
import type { BreadcrumbProps, BreadcrumbsProps, ContextValue } from 'react-aria-components';
import type { LinkProps } from './Link';

import { cva } from 'class-variance-authority';
import { createContext, forwardRef } from 'react';
import {
	Breadcrumb as AriaBreadcrumb,
	Breadcrumbs as AriaBreadcrumbs,
	Provider,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Breadcrumbs.module.css';

const crumbs = cva(styles.crumbs);
const crumb = cva(styles.crumb);

const LinkContext = createContext<ContextValue<LinkProps, HTMLAnchorElement>>(null);

const _Breadcrumbs = <T extends object>(
	{ className, ...props }: BreadcrumbsProps<T>,
	ref: ForwardedRef<HTMLOListElement>,
) => {
	return <AriaBreadcrumbs {...props} ref={ref} className={crumbs({ className })} />;
};

/**
 * Breadcrumbs display a hierarchy of links to the current page or resource in an application.
 *
 * https://react-spectrum.adobe.com/react-aria/Breadcrumbs.html
 */
const Breadcrumbs = (forwardRef as forwardRefType)(_Breadcrumbs);

const _Breadcrumb = (props: BreadcrumbProps, ref: ForwardedRef<HTMLLIElement>) => {
	return (
		<AriaBreadcrumb
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				crumb({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children) => (
				<Provider values={[[LinkContext, { variant: 'subtle' }]]}>{children}</Provider>
			))}
		</AriaBreadcrumb>
	);
};

/**
 * A Breadcrumb represents an individual item in a `<Breadcrumbs>` list.
 *
 * https://react-spectrum.adobe.com/react-aria/Breadcrumbs.html
 */
const Breadcrumb = forwardRef(_Breadcrumb);

export { Breadcrumbs, Breadcrumb, LinkContext };
export type { BreadcrumbsProps, BreadcrumbProps };
