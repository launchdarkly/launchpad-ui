import type { CSSProperties, Ref } from 'react';
import { createContext, useCallback, useContext, useRef, useState } from 'react';
import type { ComboBoxProps as AriaComboBoxProps } from 'react-aria-components/ComboBox';
import { ComboBox as AriaComboBox, ComboBoxStateContext } from 'react-aria-components/ComboBox';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { GroupContext } from 'react-aria-components/Group';
import type { ContextValue } from 'react-aria-components/slots';
import { Provider } from 'react-aria-components/slots';
import { useResizeObserver } from '@react-aria/utils';
import { cva } from 'class-variance-authority';

import type { IconButtonProps } from './IconButton';
import { IconButton } from './IconButton';
import { PopoverContext } from './Popover';
import { useLPContextProps } from './utils';

import styles from './styles/ComboBox.module.css';

const comboBoxStyles = cva(styles.box);

interface ComboBoxProps<T extends object> extends AriaComboBoxProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface ComboBoxClearButtonProps extends Partial<IconButtonProps> {}

// react-aria-components types this identically: `ComboBoxContext: React.Context<ContextValue<ComboBoxProps<any, SelectionMode>, HTMLDivElement>>`
// (react-aria-components/dist/types/src/ComboBox.d.ts) — a context can't carry the open generic `T`, so RAC itself erases it to `any` here.
// oxlint-disable-next-line typescript/no-explicit-any -- mirrors react-aria-components' own ComboBoxContext declaration (see comment above)
const ComboBoxContext = createContext<ContextValue<ComboBoxProps<any>, HTMLDivElement>>(null);

/**
 * A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * https://react-spectrum.adobe.com/react-aria/ComboBox.html
 */
const ComboBox = <T extends object>({ ref, ...props }: ComboBoxProps<T>) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, ComboBoxContext);
	const { menuTrigger = 'focus' } = mergedProps;
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
		onResize,
	});

	return (
		<AriaComboBox
			menuTrigger={menuTrigger}
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				comboBoxStyles({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(mergedProps.children, (children, { isInvalid, isDisabled }) => (
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
