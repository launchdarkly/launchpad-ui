import type { Ref } from 'react';
import type { SearchFieldProps as AriaSearchFieldProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { SearchField as AriaSearchField, composeRenderProps } from 'react-aria-components';

import styles from './styles/SearchField.module.css';

const search = cva(styles.search);

interface SearchFieldProps extends AriaSearchFieldProps {
	ref?: Ref<HTMLDivElement>;
}

/**
 * A search field allows a user to enter and clear a search query.
 *
 * https://react-spectrum.adobe.com/react-aria/SearchField.html
 */
const SearchField = ({ ref, ...props }: SearchFieldProps) => {
	return (
		<AriaSearchField
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				search({ ...renderProps, className }),
			)}
		/>
	);
};

export { SearchField };
export type { SearchFieldProps };
