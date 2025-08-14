import type { ChangeEvent, ReactNode } from 'react';
import type { FilterOption } from './FilterMenu';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { Dropdown } from '@launchpad-ui/dropdown';

import { AppliedFilterButton } from './AppliedFilterButton';
import { FilterMenu } from './FilterMenu';

const SEARCH_INPUT_THRESHOLD = 4;

type AppliedFilterProps = {
	searchValue?: string;
	onSearchChange?(event: ChangeEvent<HTMLInputElement>): void;
	onClearFilter?(): void;
	searchPlaceholder?: string;
	name?: ReactNode;
	description: ReactNode;
	options: FilterOption[];
	className?: string;
	onStateChange?({ isOpen }: { isOpen?: boolean }): void;
	onSelect?(item: FilterOption): void;
	isEmpty?: boolean;
	isLoading?: boolean;
	onClickFilterButton?(): void;
	searchAriaLabel?: string;
	searchId?: string;
	'data-test-id'?: string;
};

/**
 * @deprecated use `Menu` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-collections-menu--docs
 */
const AppliedFilter = ({
	searchValue,
	onSearchChange,
	searchPlaceholder,
	name,
	description,
	options,
	className,
	isEmpty,
	isLoading,
	onClickFilterButton,
	onClearFilter,
	searchAriaLabel,
	searchId,
	'data-test-id': testId = 'applied-filter',
	...props
}: AppliedFilterProps) => {
	const enableSearch =
		onSearchChange && (!!searchValue || options.length > SEARCH_INPUT_THRESHOLD || !isEmpty);

	return (
		<Dropdown
			{...addLaunchPadAttribution('AppliedFilter')}
			targetClassName={className}
			placement="bottom-start"
			enableArrow={false}
			{...props}
		>
			<AppliedFilterButton
				data-test-id={testId}
				name={name}
				onClickFilterButton={onClickFilterButton}
			>
				{description}
			</AppliedFilterButton>
			<FilterMenu
				options={options}
				searchValue={searchValue}
				searchPlaceholder={searchPlaceholder}
				enableSearch={enableSearch}
				searchAriaLabel={searchAriaLabel}
				searchId={searchId}
				onSearchChange={onSearchChange}
				onClearFilter={onClearFilter}
				isLoading={isLoading}
			/>
		</Dropdown>
	);
};

export type { AppliedFilterProps };
export { AppliedFilter };
