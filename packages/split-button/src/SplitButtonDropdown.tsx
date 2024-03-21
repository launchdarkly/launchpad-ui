import type { DropdownProps } from '@launchpad-ui/dropdown';

import { Dropdown } from '@launchpad-ui/dropdown';
import { useContext } from 'react';

import { SplitButtonContext } from './context';

type SplitButtonDropdownProps = Omit<
	DropdownProps<string | number | object>,
	'enableArrow' | 'restrictWidth'
>;

const SplitButtonDropdown = ({
	disabled,
	children,
	placement = 'bottom-end',
	'data-test-id': testId = 'split-button-dropdown',
	...rest
}: SplitButtonDropdownProps) => {
	const { disabled: parentDisabled } = useContext(SplitButtonContext);

	const isDisabled = parentDisabled || disabled;

	return (
		<Dropdown
			{...rest}
			placement={placement}
			enableArrow={false}
			restrictWidth={false}
			disabled={isDisabled}
			data-test-id={testId}
		>
			{children}
		</Dropdown>
	);
};

export { SplitButtonDropdown };
export type { SplitButtonDropdownProps };
