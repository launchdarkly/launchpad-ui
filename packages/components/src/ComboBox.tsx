import type { Key } from '@react-types/shared';
import type { CSSProperties, KeyboardEvent, ReactNode, Ref, RefObject } from 'react';
import type {
	ComboBoxProps as AriaComboBoxProps,
	ComboBoxValueProps as AriaComboBoxValueProps,
	ComboBoxState,
} from 'react-aria-components/ComboBox';
import type { ContextValue } from 'react-aria-components/slots';
import type { IconButtonProps } from './IconButton';
import type { TagGroupProps, TagProps } from './TagGroup';

import { useResizeObserver } from '@react-aria/utils';
import { cva } from 'class-variance-authority';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
	ComboBox as AriaComboBox,
	ComboBoxValue as AriaComboBoxValue,
	ComboBoxStateContext,
} from 'react-aria-components/ComboBox';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { GroupContext } from 'react-aria-components/Group';
import { Provider } from 'react-aria-components/slots';

import { IconButton } from './IconButton';
import { InputContext } from './Input';
import { PopoverContext } from './Popover';
import styles from './styles/ComboBox.module.css';
import { Tag, TagGroup, TagList } from './TagGroup';
import { useLPContextProps } from './utils';

const comboBoxStyles = cva(styles.box);
const comboBoxValueStyles = cva(styles.value);
const comboBoxTagValueStyles = cva(styles.tagValue);
const comboBoxTagGroupStyles = cva(styles.tagGroup);
const comboBoxTagListStyles = cva(styles.tagList);

type ComboBoxSelectionMode = 'single' | 'multiple';

interface ComboBoxProps<T extends object, M extends ComboBoxSelectionMode = 'single'>
	extends AriaComboBoxProps<T, M> {
	ref?: Ref<HTMLDivElement>;
}

interface ComboBoxClearButtonProps extends Partial<IconButtonProps> {}

interface ComboBoxValueProps<T extends object> extends AriaComboBoxValueProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface ComboBoxTagItem<T extends object> {
	id: Key;
	textValue: string;
	value: T | null;
}

type AccessibleName =
	| {
			'aria-label': string;
			'aria-labelledby'?: string;
	  }
	| {
			'aria-label'?: string;
			'aria-labelledby': string;
	  };

type ComboBoxTagGroupProps<T extends object> = Omit<
	TagGroupProps,
	'aria-label' | 'aria-labelledby' | 'children' | 'onRemove'
> &
	AccessibleName & {
		children?: (item: ComboBoxTagItem<T>) => ReactNode;
		size?: NonNullable<TagProps['size']>;
		variant?: NonNullable<TagProps['variant']>;
	};

interface ComboBoxBehavior {
	isDisabled: boolean;
	isReadOnly: boolean;
}

interface ComboBoxProvidersProps extends ComboBoxBehavior {
	children: ReactNode;
	groupRef: RefObject<HTMLDivElement | null>;
	groupWidth: string | null;
	isInvalid: boolean;
}

const ComboBoxContext =
	// biome-ignore lint/suspicious/noExplicitAny: ignore
	createContext<ContextValue<ComboBoxProps<any, ComboBoxSelectionMode>, HTMLDivElement>>(null);
const ComboBoxValueContext =
	// biome-ignore lint/suspicious/noExplicitAny: ignore
	createContext<ContextValue<ComboBoxValueProps<any>, HTMLDivElement>>(null);
const ComboBoxTagGroupContext =
	// biome-ignore lint/suspicious/noExplicitAny: ignore
	createContext<ContextValue<ComboBoxTagGroupProps<any>, HTMLDivElement>>(null);
const ComboBoxBehaviorContext = createContext<ComboBoxBehavior | null>(null);

const ComboBoxProviders = ({
	children,
	groupRef,
	groupWidth,
	isDisabled,
	isInvalid,
	isReadOnly,
}: ComboBoxProvidersProps) => {
	const state = useContext(ComboBoxStateContext);
	const onInputKeyDown = useCallback(
		(event: KeyboardEvent<HTMLInputElement>) => {
			if (
				event.key === 'Backspace' &&
				event.currentTarget.value === '' &&
				!isDisabled &&
				!isReadOnly &&
				Array.isArray(state?.value) &&
				state.value.length > 0
			) {
				event.preventDefault();
				state.setValue(state.value.slice(0, -1));
			}
		},
		[isDisabled, isReadOnly, state],
	);

	return (
		<ComboBoxBehaviorContext.Provider value={{ isDisabled, isReadOnly }}>
			<Provider
				values={[
					[GroupContext, { ref: groupRef, isInvalid, isDisabled }],
					[InputContext, { onKeyDown: onInputKeyDown }],
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
		</ComboBoxBehaviorContext.Provider>
	);
};

/**
 * A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * https://react-spectrum.adobe.com/react-aria/ComboBox.html
 */
const ComboBox = <T extends object, M extends ComboBoxSelectionMode = 'single'>({
	ref,
	...props
}: ComboBoxProps<T, M>) => {
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
			{composeRenderProps(props.children, (children, { isInvalid, isDisabled, isReadOnly }) => (
				<ComboBoxProviders
					groupRef={groupRef}
					groupWidth={groupWidth}
					isDisabled={isDisabled}
					isInvalid={isInvalid}
					isReadOnly={isReadOnly}
				>
					{children}
				</ComboBoxProviders>
			))}
		</AriaComboBox>
	);
};

const ComboBoxClearButton = ({ ref, ...props }: ComboBoxClearButtonProps) => {
	const state = useContext(ComboBoxStateContext);
	const { onPress, ...buttonProps } = props;
	return (
		<IconButton
			aria-label="Clear"
			icon="cancel-circle-outline"
			size="small"
			variant="minimal"
			{...buttonProps}
			ref={ref}
			slot={null}
			onPress={(event) => {
				state?.setValue(Array.isArray(state.value) ? [] : null);
				state?.setInputValue('');
				onPress?.(event);
			}}
		/>
	);
};

/**
 * Renders the current value of a ComboBox, or a placeholder when it has no value.
 *
 * https://react-spectrum.adobe.com/react-aria/ComboBox.html
 */
const ComboBoxValue = <T extends object>({ ref, ...props }: ComboBoxValueProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, ComboBoxValueContext);
	return (
		<AriaComboBoxValue
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				comboBoxValueStyles({ ...renderProps, className }),
			)}
		/>
	);
};

const toTagItem = <T extends object>(node: {
	key: Key;
	textValue: string;
	value: T | null;
}): ComboBoxTagItem<T> => ({
	id: node.key,
	textValue: node.textValue,
	value: node.value,
});

interface ComboBoxTagGroupContentProps<T extends object> {
	behavior: ComboBoxBehavior;
	props: ComboBoxTagGroupProps<T>;
	state: ComboBoxState<T, ComboBoxSelectionMode>;
	tagGroupRef?: Ref<HTMLDivElement>;
}

const ComboBoxTagGroupContent = <T extends object>({
	behavior,
	props,
	state,
	tagGroupRef,
}: ComboBoxTagGroupContentProps<T>) => {
	const cacheRef = useRef(new Map<Key, ComboBoxTagItem<T>>());
	const previousCollectionRef = useRef(new Map<Key, ComboBoxTagItem<T>>());
	const warnedKeysRef = useRef(new Set<Key>());
	const warnedUsageRef = useRef(false);
	const selectedKeys: Key[] = Array.isArray(state.value) ? state.value : [];
	const selectedItems = new Map<Key, ComboBoxTagItem<T>>();
	const collectionSnapshot = new Map<Key, ComboBoxTagItem<T>>();

	for (const node of state.selectedItems) {
		selectedItems.set(node.key, toTagItem(node));
	}
	for (const node of state.collection) {
		collectionSnapshot.set(node.key, toTagItem(node));
	}

	const descriptors = selectedKeys.flatMap((key) => {
		const descriptor =
			selectedItems.get(key) ?? cacheRef.current.get(key) ?? previousCollectionRef.current.get(key);
		return descriptor ? [descriptor] : [];
	});
	const unresolvedKeys = selectedKeys.filter(
		(key) =>
			!selectedItems.has(key) &&
			!cacheRef.current.has(key) &&
			!previousCollectionRef.current.has(key),
	);

	useEffect(() => {
		const selectedKeySet = new Set(selectedKeys);
		for (const key of cacheRef.current.keys()) {
			if (!selectedKeySet.has(key)) {
				cacheRef.current.delete(key);
			}
		}
		for (const key of selectedKeys) {
			const descriptor = selectedItems.get(key) ?? previousCollectionRef.current.get(key);
			if (descriptor) {
				cacheRef.current.set(key, descriptor);
			}
		}
		previousCollectionRef.current = collectionSnapshot;
	});

	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			return;
		}

		if (!Array.isArray(state.value)) {
			if (!warnedUsageRef.current) {
				console.warn(
					'ComboBoxTagGroup must be rendered inside a LaunchPad ComboBox with selectionMode="multiple".',
				);
				warnedUsageRef.current = true;
			}
			return;
		}

		warnedUsageRef.current = false;
		const selectedKeySet = new Set(selectedKeys);
		for (const key of warnedKeysRef.current) {
			if (!selectedKeySet.has(key) || !unresolvedKeys.includes(key)) {
				warnedKeysRef.current.delete(key);
			}
		}

		const timeout = setTimeout(() => {
			for (const key of unresolvedKeys) {
				if (!warnedKeysRef.current.has(key)) {
					console.warn(
						`ComboBoxTagGroup cannot render selected key "${String(
							key,
						)}" until it appears in the ComboBox collection.`,
					);
					warnedKeysRef.current.add(key);
				}
			}
		}, 0);
		return () => clearTimeout(timeout);
	});

	if (!Array.isArray(state.value)) {
		return null;
	}

	const {
		children,
		size = 'small',
		variant = 'default',
		className,
		disabledKeys: consumerDisabledKeys,
		...tagGroupProps
	} = props;
	const disabledKeys = new Set(consumerDisabledKeys);
	if (behavior.isDisabled) {
		for (const descriptor of descriptors) {
			disabledKeys.add(descriptor.id);
		}
	}
	const currentValue = state.value;
	const onRemove =
		behavior.isDisabled || behavior.isReadOnly
			? undefined
			: (keys: Set<Key>) => {
					if (Array.isArray(currentValue)) {
						state.setValue(currentValue.filter((key) => !keys.has(key)));
					}
				};

	return (
		<div
			className={comboBoxTagValueStyles()}
			data-combobox-tags
			data-has-tags={descriptors.length > 0 || undefined}
		>
			<TagGroup
				{...tagGroupProps}
				ref={tagGroupRef}
				className={comboBoxTagGroupStyles({ className })}
				disabledKeys={disabledKeys}
				onRemove={onRemove}
			>
				<TagList className={comboBoxTagListStyles()}>
					{descriptors.map((descriptor) => (
						<Tag
							id={descriptor.id}
							key={descriptor.id}
							textValue={descriptor.textValue}
							size={size}
							variant={variant}
							isDisabled={behavior.isDisabled}
						>
							{children ? children(descriptor) : descriptor.textValue}
						</Tag>
					))}
				</TagList>
			</TagGroup>
		</div>
	);
};

/**
 * Renders a multiple-selection ComboBox value as removable tags.
 *
 * Place this inside the ComboBox field before its Input. Each child renders tag content from the
 * selected collection item; ComboBoxTagGroup owns the Tag itself so keys and accessible text stay
 * synchronized with ComboBox state.
 *
 * https://react-spectrum.adobe.com/react-aria/ComboBox.html#taggroup
 */
const ComboBoxTagGroup = <T extends object>({ ref, ...props }: ComboBoxTagGroupProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, ComboBoxTagGroupContext);
	const behavior = useContext(ComboBoxBehaviorContext);
	const warnedUsageRef = useRef(false);

	useEffect(() => {
		if (process.env.NODE_ENV === 'production' || behavior) {
			return;
		}
		if (!warnedUsageRef.current) {
			console.warn(
				'ComboBoxTagGroup must be rendered inside a LaunchPad ComboBox with selectionMode="multiple".',
			);
			warnedUsageRef.current = true;
		}
	});

	if (!behavior) {
		return null;
	}

	return (
		<ComboBoxValue<T>>
			{({ state }) => (
				<ComboBoxTagGroupContent
					behavior={behavior}
					props={props}
					state={state}
					tagGroupRef={ref}
				/>
			)}
		</ComboBoxValue>
	);
};

export {
	ComboBox,
	ComboBoxClearButton,
	ComboBoxContext,
	ComboBoxTagGroup,
	ComboBoxTagGroupContext,
	ComboBoxValue,
	ComboBoxValueContext,
	comboBoxStyles,
	comboBoxValueStyles,
};
export type {
	ComboBoxProps,
	ComboBoxClearButtonProps,
	ComboBoxTagGroupProps,
	ComboBoxTagItem,
	ComboBoxValueProps,
};
