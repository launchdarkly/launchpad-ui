import type { Ref } from 'react';
import type { SearchFieldProps as AriaSearchFieldProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { SearchField as AriaSearchField, composeRenderProps } from 'react-aria-components';

import styles from './styles/SearchField.module.css';
import { useLPContextProps } from './utils';

const searchFieldStyles = cva(styles.search);

interface SearchFieldProps extends AriaSearchFieldProps {
	ref?: Ref<HTMLDivElement>;
}

const SearchFieldContext = createContext<ContextValue<SearchFieldProps, HTMLDivElement>>(null);

/**
 * A search field allows a user to enter and clear a search query.
 *
 * https://react-spectrum.adobe.com/react-aria/SearchField.html
 */
const SearchField = ({ ref, ...props }: SearchFieldProps) => {
	[props, ref] = useLPContextProps(props, ref, SearchFieldContext);
	return (
		<AriaSearchField
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				searchFieldStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export { SearchField, SearchFieldContext, searchFieldStyles };
export type { SearchFieldProps };
