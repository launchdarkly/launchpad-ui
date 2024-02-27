import type { BaseEvent } from '@react-types/shared';
import type { FocusEvent, KeyboardEvent, RefObject } from 'react';
import type { MultiSelectProps, MultiSelectState } from './MultiSelect';
import type { SingleSelectProps, SingleSelectState } from './SingleSelect';
import type { SelectAria, SharedUseSelectProps } from './types';

import { setInteractionModality } from '@react-aria/interactions';
import { useField } from '@react-aria/label';
import { listData } from '@react-aria/listbox';
import { useMenuTrigger } from '@react-aria/menu';
import { ListKeyboardDelegate, useTypeSelect } from '@react-aria/selection';
import { useTextField } from '@react-aria/textfield';
import { chain, filterDOMProps, mergeProps, useId, useLabels } from '@react-aria/utils';
import { useMemo } from 'react';

type UseSelectRefs = {
	triggerRef: RefObject<HTMLElement>;

	listBoxRef: RefObject<HTMLElement>;

	filterInputRef: RefObject<HTMLInputElement>;
};

type UseSelectProps<T extends object> = (MultiSelectProps<T> | SingleSelectProps<T>) &
	SharedUseSelectProps<T>;

/* c8 ignore start */

const useSelect = <T extends object>(
	props: Omit<UseSelectProps<T>, 'trigger'>,
	state: MultiSelectState<T> | SingleSelectState<T>,
	refs: UseSelectRefs,
): SelectAria<T> => {
	const { disabled: isDisabled, hasFilter } = props;
	const { triggerRef, listBoxRef, filterInputRef } = refs;

	const delegate = useMemo(
		() => new ListKeyboardDelegate(state.collection, state.disabledKeys, listBoxRef),
		[state.collection, state.disabledKeys, listBoxRef],
	);

	const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
		{
			isDisabled,
			type: 'listbox',
		},
		state,
		triggerRef,
	);

	// Set listbox id so it can be used when calling getItemId later
	listData.set(state, { id: menuProps.id as string });

	// For textfield specific keydown operations
	const onFilterInputKeyDown = (e: BaseEvent<KeyboardEvent>) => {
		switch (e.key) {
			case 'Enter':
			case 'Tab':
			case ' ':
				// If there is not a focusedKey, it means that the user intentionally arrowed right or left
				// to focus only on the input. If this is the case, don't prevent default.
				if (state.selectionManager.focusedKey || e.key === 'Enter') {
					// Prevent form submission if menu is open since we may be selecting a option
					e.preventDefault();
				}

				state.commit();
				break;
			case 'Escape':
				if (
					state.selectionManager.selectedKeys.size !== 0 ||
					state.filterValue === '' ||
					props.allowsCustomValue
				) {
					e.continuePropagation();
				}
				state.revert();
				break;
			case 'ArrowDown': {
				e.preventDefault();

				const key =
					delegate.getKeyBelow(state.selectionManager.focusedKey) || delegate.getFirstKey();

				if (key) {
					state.selectionManager.setFocusedKey(key);
				}
				break;
			}
			case 'ArrowUp': {
				e.preventDefault();

				const key =
					delegate.getKeyAbove(state.selectionManager.focusedKey) || delegate.getLastKey();

				if (key) {
					state.selectionManager.setFocusedKey(key);
				}
				break;
			}
			case 'ArrowRight':
			case 'ArrowLeft': {
				e.preventDefault();

				state.selectionManager.setFocusedKey(null);
				break;
			}
		}
	};

	const { labelProps: filterLabelProps, inputProps: filterInputProps } = useTextField(
		{
			...props,
			onChange: state.setFilterValue,
			onKeyDown: onFilterInputKeyDown,
			value: state.filterValue,
			autoComplete: 'off',
		},
		filterInputRef,
	);

	const listBoxProps = useLabels({
		id: menuProps.id,
		'aria-label': 'Show suggestions',
		'aria-labelledby': props['aria-labelledby'] || filterLabelProps.id,
	});

	// Typeahead functionality - imitating default `<select>` behaviour.
	const { typeSelectProps } = useTypeSelect({
		keyboardDelegate: delegate,
		selectionManager: state.selectionManager,
		onTypeSelect(key) {
			state.selectionManager.setSelectedKeys([key]);
			// state.setSelectedKeys([key]); // NOTE MIGHT NOT WORK FOR BOTH
		},
	});

	const { labelProps, fieldProps } = useField({
		...props,
		labelElementType: 'span',
	});

	typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture;
	typeSelectProps.onKeyDownCapture = undefined;

	const domProps = filterDOMProps(props, { labelable: true });
	const triggerProps = mergeProps(!hasFilter ? typeSelectProps : {}, menuTriggerProps, fieldProps);

	const valueId = useId();

	return {
		labelProps: {
			...labelProps,
			onClick: () => {
				if (!props.disabled) {
					triggerRef.current?.focus();

					// Show the focus ring so the user knows where focus went
					setInteractionModality('keyboard');
				}
			},
		},
		triggerProps: mergeProps(domProps, {
			...triggerProps,
			onKeyDown: chain(triggerProps.onKeyDown, props.onKeyDown),
			onKeyUp: props.onKeyUp,
			'aria-labelledby': [
				triggerProps['aria-labelledby'],
				triggerProps['aria-label'] && !triggerProps['aria-labelledby'] ? triggerProps.id : null,
				valueId,
			]
				.filter(Boolean)
				.join(' '),
			onFocus(e: FocusEvent) {
				if (state.isFocused) {
					return;
				}

				if (props.onFocus) {
					props.onFocus(e);
				}

				state.setFocused(true);
			},
			onBlur(e: FocusEvent) {
				if (state.isOpen) {
					return;
				}

				if (props.onBlur) {
					props.onBlur(e);
				}

				state.setFocused(false);
			},
		}),
		valueProps: {
			id: valueId,
		},
		menuProps: mergeProps(menuProps, listBoxProps, {
			autoFocus: !hasFilter,
			shouldUseVirtualFocus: hasFilter,
			shouldSelectOnPressUp: true,
			shouldFocusOnHover: true,
		}),
		filterInputProps,
		delegate,
	};
};

/* c8 ignore stop */

export { useSelect };
