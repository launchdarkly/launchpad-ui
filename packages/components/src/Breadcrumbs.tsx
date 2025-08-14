import type { Ref } from 'react';
import type {
	BreadcrumbProps as AriaBreadcrumbProps,
	BreadcrumbsProps as AriaBreadcrumbsProps,
	ContextValue,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	Breadcrumb as AriaBreadcrumb,
	Breadcrumbs as AriaBreadcrumbs,
	composeRenderProps,
	Provider,
} from 'react-aria-components';

import { LinkContext } from './Link';
import styles from './styles/Breadcrumbs.module.css';
import { useLPContextProps } from './utils';

const breadCrumbsStyles = cva(styles.crumbs);
const breadCrumbStyles = cva(styles.crumb);

interface BreadcrumbsProps<T extends object> extends AriaBreadcrumbsProps<T> {
	ref?: Ref<HTMLOListElement>;
}

interface BreadcrumbProps extends AriaBreadcrumbProps {
	ref?: Ref<HTMLLIElement>;
}

const BreadcrumbsContext =
	// biome-ignore lint/suspicious/noExplicitAny: ignore
	createContext<ContextValue<BreadcrumbsProps<any>, HTMLOListElement>>(null);

/**
 * Breadcrumbs display a hierarchy of links to the current page or resource in an application.
 *
 * https://react-spectrum.adobe.com/react-aria/Breadcrumbs.html
 */
const Breadcrumbs = <T extends object>({ ref, ...props }: BreadcrumbsProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, BreadcrumbsContext, 'Breadcrumbs');
	const { className } = props;

	return <AriaBreadcrumbs {...props} ref={ref} className={breadCrumbsStyles({ className })} />;
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
				breadCrumbStyles({ ...renderProps, className }),
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

export { Breadcrumbs, BreadcrumbsContext, Breadcrumb, breadCrumbStyles, breadCrumbsStyles };
export type { BreadcrumbsProps, BreadcrumbProps };
