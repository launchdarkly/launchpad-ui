import type { Ref } from 'react';
import type {
	BreadcrumbProps as AriaBreadcrumbProps,
	BreadcrumbsProps as AriaBreadcrumbsProps,
	ContextValue,
} from 'react-aria-components';
import type { LinkProps } from './Link';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
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

interface BreadcrumbsProps<T extends object> extends AriaBreadcrumbsProps<T> {
	ref?: Ref<HTMLOListElement>;
}

interface BreadcrumbProps extends AriaBreadcrumbProps {
	ref?: Ref<HTMLLIElement>;
}

/**
 * Breadcrumbs display a hierarchy of links to the current page or resource in an application.
 *
 * https://react-spectrum.adobe.com/react-aria/Breadcrumbs.html
 */
const Breadcrumbs = <T extends object>({ className, ref, ...props }: BreadcrumbsProps<T>) => {
	return <AriaBreadcrumbs {...props} ref={ref} className={crumbs({ className })} />;
};

/**
 * A Breadcrumb represents an individual item in a `<Breadcrumbs>` list.
 *
 * https://react-spectrum.adobe.com/react-aria/Breadcrumbs.html
 */
const Breadcrumb = ({ ref, ...props }: BreadcrumbProps) => {
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

export { Breadcrumbs, Breadcrumb, LinkContext };
export type { BreadcrumbsProps, BreadcrumbProps };
