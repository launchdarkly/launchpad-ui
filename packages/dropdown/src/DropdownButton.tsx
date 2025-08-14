import type { ButtonProps } from '@launchpad-ui/button';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { Button } from '@launchpad-ui/button';
import { Icon } from '@launchpad-ui/icons';
import { forwardRef } from 'react';

type DropdownButtonProps = ButtonProps & {
	hideCaret?: boolean;
};

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>((props, ref) => {
	const { children, hideCaret, 'data-test-id': testId = 'dropdown-button', ...rest } = props;

	return (
		<Button
			{...addLaunchPadAttribution('DropdownButton')}
			{...rest}
			data-test-id={testId}
			ref={ref}
		>
			{children} {!hideCaret && <Icon name="chevron-down" size="small" />}
		</Button>
	);
});

DropdownButton.displayName = 'DropdownButton';

export { DropdownButton };
export type { DropdownButtonProps };
