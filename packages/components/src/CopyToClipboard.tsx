import type { ReactNode } from 'react';

import { PressResponder } from '@react-aria/interactions';

import { Tooltip, TooltipTrigger } from './Tooltip';
import { copyToClipboard } from './utils';

type CopyToClipboardProps = {
	onCopy?: () => void;
	children: ReactNode;
	text: string;
	tooltip?: string;
	showTooltip?: boolean;
};

export const CopyToClipboard = ({
	onCopy,
	children,
	text,
	tooltip = 'Copy to clipboard',
	showTooltip = true,
}: CopyToClipboardProps) => {
	const handlePress = async () => {
		await copyToClipboard(text, 'Copied!');
		if (onCopy) {
			onCopy();
		}
	};

	return (
		<TooltipTrigger>
			<PressResponder onPress={handlePress}>{children}</PressResponder>
			{showTooltip && <Tooltip placement="bottom">{tooltip}</Tooltip>}
		</TooltipTrigger>
	);
};
