import type { Ref } from 'react';
import { createContext } from 'react';
import type {
	BreadcrumbProps as AriaBreadcrumbProps,
	BreadcrumbsProps as AriaBreadcrumbsProps,
} from 'react-aria-components/Breadcrumbs';
import { Breadcrumb as AriaBreadcrumb, Breadcrumbs as AriaBreadcrumbs } from 'react-aria-components/Breadcrumbs';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { ContextValue } from 'react-aria-components/slots';
import { Provider } from 'react-aria-components/slots';
import { cva } from 'class-variance-authority';

import { Icon } from '@launchpad-ui/icons';

import { LinkContext } from './Link';
import { useLPContextProps } from './utils';

import styles from './styles/Breadcrumbs.module.css';

const breadCrumbsStyles = cva(styles.crumbs);
const breadCrumbStyles = cva(styles.crumb);

interface BreadcrumbsProps<T extends object> extends AriaBreadcrumbsProps<T> {
	ref?: Ref<HTMLOListElement>;
}

interface BreadcrumbProps extends AriaBreadcrumbProps {
	ref?: Ref<HTMLLIElement>;
}

const BreadcrumbsContext =
	// react-aria-components types this identically: `BreadcrumbsContext: React.Context<ContextValue<BreadcrumbsProps<any>, HTMLOListElement>>`
	// (react-aria-components/dist/types/src/Breadcrumbs.d.ts) — a context can't carry the open generic `T`, so RAC itself erases it to `any` here.
	// oxlint-disable-next-line typescript/no-explicit-any -- mirrors react-aria-components' own BreadcrumbsContext declaration (see comment above)
	createContext<ContextValue<BreadcrumbsProps<any>, HTMLOListElement>>(null);

/**
 * Breadcrumbs display a hierarchy of links to the current page or resource in an application.
 *
 * https://react-spectrum.adobe.com/react-aria/Breadcrumbs.html
 */
const Breadcrumbs = <T extends object>({ ref, ...props }: BreadcrumbsProps<T>) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, BreadcrumbsContext);
	const { className } = mergedProps;

	return <AriaBreadcrumbs {...mergedProps} ref={mergedRef} className={breadCrumbsStyles({ className })} />;
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
