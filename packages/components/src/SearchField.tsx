import type { ForwardedRef } from 'react';
import type { SearchFieldProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { SearchField as AriaSearchField, composeRenderProps } from 'react-aria-components';

import styles from './styles/SearchField.module.css';
import { forwardRef } from './utils';

const search = cva(styles.search);

const _SearchField = (props: SearchFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
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

/**
 * A search field allows a user to enter and clear a search query.
 *
 * https://react-spectrum.adobe.com/react-aria/SearchField.html
 */
const SearchField = forwardRef(_SearchField);

export { SearchField };
export type { SearchFieldProps };
