import type { forwardRefType } from '@react-types/shared';
import type { CSSProperties, ForwardedRef } from 'react';
import type { ComboBoxProps, PopoverProps } from 'react-aria-components';
import type { IconButtonProps } from './IconButton';

import { useResizeObserver } from '@react-aria/utils';
import { cva } from 'class-variance-authority';
import { createContext, forwardRef, useCallback, useContext, useRef, useState } from 'react';
import {
	ComboBox as AriaComboBox,
	ComboBoxStateContext,
	GroupContext,
	Provider,
	composeRenderProps,
} from 'react-aria-components';

import { IconButton } from './IconButton';
import styles from './styles/ComboBox.module.css';

const box = cva(styles.box);

const PopoverContext = createContext<PopoverProps>({});

const _ComboBox = <T extends object>(
	props: ComboBoxProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	const groupRef = useRef<HTMLDivElement>(null);
	// https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/ComboBox.tsx#L155-L170
	const [groupWidth, setGroupWidth] = useState<string | null>(null);
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const onResize = useCallback(() => {
		if (groupRef.current) {
			setGroupWidth(`${groupRef.current.offsetWidth}px`);
		}
	}, [groupRef, setGroupWidth]);

	useResizeObserver({
		ref: groupRef,
		onResize: onResize,
	});

	return (
		<AriaComboBox
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				box({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isInvalid, isDisabled }) => (
				<Provider
					values={[
						[GroupContext, { ref: groupRef, isInvalid, isDisabled }],
						[
							PopoverContext,
							{
								triggerRef: groupRef,
								style: { '--trigger-width': groupWidth } as CSSProperties,
							},
						],
					]}
				>
					{children}
				</Provider>
			))}
		</AriaComboBox>
	);
};

/**
 * A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * https://react-spectrum.adobe.com/react-aria/ComboBox.html
 */
const ComboBox = (forwardRef as forwardRefType)(_ComboBox);

const _ComboBoxClearButton = (
	props: Partial<IconButtonProps>,
	ref: ForwardedRef<HTMLButtonElement>,
) => {
	const state = useContext(ComboBoxStateContext);
	return (
		<IconButton
			aria-label="Clear"
			icon="cancel-circle-outline"
			size="small"
			variant="minimal"
			{...props}
			ref={ref}
			slot={null}
			onPress={() => state?.setSelectedKey(null)}
		/>
	);
};

const ComboBoxClearButton = forwardRef(_ComboBoxClearButton);

export { ComboBox, ComboBoxClearButton, PopoverContext };
export type { ComboBoxProps };
