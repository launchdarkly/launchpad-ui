import type { AriaListBoxOptions } from '@react-aria/listbox';
import type { SingleSelectListState } from '@react-stately/list';
import type { Node } from '@react-types/shared';
import type { ComponentProps, ElementType, RefObject } from 'react';
import type { MultiSelectState } from './MultiSelect';
import type { MultiSelectListState } from './MultiSelect/useMultiSelectListState';
import type { SelectItemProps } from './SelectItem';
import type { SingleSelectState } from './SingleSelect';

import { Icon } from '@launchpad-ui/icons';
import { getItemId, useListBox, useListBoxSection, useOption } from '@react-aria/listbox';
import { useTextField } from '@react-aria/textfield';
import { useObjectRef } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { cx } from 'classix';
import { useRef } from 'react';

import styles from './styles/Select.module.css';

type SelectListBoxProps<T extends object> = AriaListBoxOptions<T> & {
	listBoxRef?: RefObject<HTMLDivElement>;
	filterInputRef?: RefObject<HTMLInputElement>;
	state: SingleSelectState<T> | MultiSelectState<T>;
	filterInputProps: ComponentProps<'input'>;
	hasFilter?: boolean;
};

const SelectListBox = <T extends object>(props: SelectListBoxProps<T>) => {
	const { state, hasFilter } = props;

	const listBoxRef = useObjectRef<HTMLDivElement>(props.listBoxRef);

	const filterInputRef = useObjectRef<HTMLInputElement>(props.filterInputRef);

	const { listBoxProps } = useListBox(props, state, listBoxRef);

	const { inputProps: filterInputProps, labelProps: filterLabelProps } = useTextField(
		{
			autoFocus: true,
			onChange: state.setFilterValue,
			onKeyDown: props.filterInputProps.onKeyDown,
			'aria-label': 'Search options',
			label: 'Search options',
			value: state.filterValue,
		},
		filterInputRef,
	);

	const focusedItem =
		state.selectionManager.focusedKey != null
			? state.collection.getItem(state.selectionManager.focusedKey)
			: undefined;

	return (
		<>
			{hasFilter && (
				<div data-test-id="search-filter" className={styles.search}>
					<Icon name="search" size="medium" className={styles.searchIcon} />
					<VisuallyHidden>
						<label id={filterLabelProps.id} htmlFor={filterInputProps.id}>
							Search options
						</label>
					</VisuallyHidden>
					<input
						{...filterInputProps}
						aria-controls={listBoxProps.id}
						role="combobox"
						placeholder="Search"
						aria-expanded
						aria-activedescendant={focusedItem ? getItemId(state, focusedItem.key) : undefined}
						ref={filterInputRef}
					/>
				</div>
			)}

			<div className={styles.listBox}>
				{/* biome-ignore lint/a11y/useFocusableInteractive: <explanation> */}
				<div
					{...listBoxProps}
					ref={listBoxRef}
					role="listbox"
					className={styles.options}
					data-test-id="select-menu"
				>
					{[...state.collection].map((item) =>
						item.type === 'section' ? (
							<Section key={item.key} section={item} state={state} />
						) : (
							<Option key={item.key} item={item} state={state} />
						),
					)}
				</div>
			</div>
		</>
	);
};

type SectionProps<T extends object> = {
	section: Omit<Node<T>, 'props'> & {
		props?: SelectItemProps<T, ElementType>;
	};
	state: SingleSelectListState<T> | MultiSelectListState<T>;
};

const Section = <T extends object>({ section, state }: SectionProps<T>) => {
	const { itemProps, headingProps, groupProps } = useListBoxSection({
		heading: section.rendered,
		'aria-label': section['aria-label'],
	});

	return (
		<>
			<li {...itemProps} className={styles.section}>
				{section.rendered && (
					<div {...headingProps} className={styles.sectionHeader}>
						{section.rendered}
					</div>
				)}
				<ul {...groupProps} className={styles.sectionOptions}>
					{[...section.childNodes].map((node) => (
						<Option key={node.key} item={node} state={state} />
					))}
				</ul>
			</li>
		</>
	);
};

type OptionProps<T extends object> = {
	item: Omit<Node<T>, 'props'> & {
		props?: SelectItemProps<T, ElementType>;
	};
	state: SingleSelectListState<T> | MultiSelectListState<T>;
};

const Option = <T extends object>({ item, state }: OptionProps<T>) => {
	const ref = useRef<HTMLLIElement>(null);
	const { optionProps, isDisabled, isSelected, isFocused } = useOption(
		{
			key: item.key,
		},
		state,
		ref,
	);

	const { as: Component = 'div', ...itemProps } = item.props || {};

	return (
		<Component
			{...optionProps}
			{...itemProps}
			ref={ref}
			className={cx(
				styles.option,
				isDisabled && styles.isDisabled,
				isFocused && styles.isFocused,
				isSelected && styles.isSelected,
			)}
		>
			{state.selectionManager.selectionMode === 'multiple' && (
				<input type="checkbox" disabled={isDisabled} checked={isSelected} readOnly />
			)}
			{typeof item.rendered === 'string' ? <span>{item.rendered}</span> : item.rendered}
		</Component>
	);
};

export { SelectListBox };
