import type { CSSProperties, Ref } from 'react';
import type { ComboBoxProps as AriaComboBoxProps, ContextValue } from 'react-aria-components';
import type { IconButtonProps } from './IconButton';

import { useResizeObserver } from '@react-aria/utils';
import { cva } from 'class-variance-authority';
import { createContext, useCallback, useContext, useRef, useState } from 'react';
import {
	ComboBox as AriaComboBox,
	ComboBoxStateContext,
	composeRenderProps,
	GroupContext,
	Provider,
} from 'react-aria-components';

import { IconButton } from './IconButton';
import { PopoverContext } from './Popover';
import styles from './styles/ComboBox.module.css';
import { useLPContextProps } from './utils';

const comboBoxStyles = cva(styles.box);

interface ComboBoxProps<T extends object> extends AriaComboBoxProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface ComboBoxClearButtonProps extends Partial<IconButtonProps> {}

// biome-ignore lint/suspicious/noExplicitAny: ignore
const ComboBoxContext = createContext<ContextValue<ComboBoxProps<any>, HTMLDivElement>>(null);

/**
 * A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * https://react-spectrum.adobe.com/react-aria/ComboBox.html
 */
const ComboBox = <T extends object>({ ref, ...props }: ComboBoxProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, ComboBoxContext);
	const { menuTrigger = 'focus' } = props;
	const groupRef = useRef<HTMLDivElement>(null);
	// https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/ComboBox.tsx#L152-L166
	const [groupWidth, setGroupWidth] = useState<string | null>(null);
	// biome-ignore lint/correctness/useExhaustiveDependencies: ignore
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
			menuTrigger={menuTrigger}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				comboBoxStyles({ ...renderProps, className }),
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

const ComboBoxClearButton = ({ ref, ...props }: ComboBoxClearButtonProps) => {
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

export { ComboBox, ComboBoxClearButton, ComboBoxContext, comboBoxStyles };
export type { ComboBoxProps, ComboBoxClearButtonProps };
