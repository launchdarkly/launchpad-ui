import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { SearchFieldProps as AriaSearchFieldProps } from 'react-aria-components/SearchField';
import { SearchField as AriaSearchField } from 'react-aria-components/SearchField';
import type { ContextValue } from 'react-aria-components/slots';
import { cva } from 'class-variance-authority';

import { useLPContextProps } from './utils';

import styles from './styles/SearchField.module.css';

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
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, SearchFieldContext);
	return (
		<AriaSearchField
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				searchFieldStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export { SearchField, SearchFieldContext, searchFieldStyles };
export type { SearchFieldProps };
