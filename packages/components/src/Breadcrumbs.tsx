import type { Ref } from 'react';
import type {
	BreadcrumbProps as AriaBreadcrumbProps,
	BreadcrumbsProps as AriaBreadcrumbsProps,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import {
	Breadcrumb as AriaBreadcrumb,
	Breadcrumbs as AriaBreadcrumbs,
	Provider,
	composeRenderProps,
} from 'react-aria-components';

import { LinkContext } from './Link';
import styles from './styles/Breadcrumbs.module.css';

const crumbs = cva(styles.crumbs);
const crumb = cva(styles.crumb);

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
			{composeRenderProps(props.children, (children, { isCurrent }) => (
				<Provider values={[[LinkContext, { variant: 'subtle' }]]}>
					{children}
					{!isCurrent && <Icon name="slash" className={styles.separator} size={null} />}
				</Provider>
			))}
		</AriaBreadcrumb>
	);
};

export { Breadcrumbs, Breadcrumb };
export type { BreadcrumbsProps, BreadcrumbProps };
