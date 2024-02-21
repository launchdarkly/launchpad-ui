import type { ReactElement } from 'react';

import { useEffect, useState } from 'react';

type DelayedIndicatorProps = {
	children: ReactElement;
	delayMs?: 0 | 50 | 250 | 1000;
};

const DelayedIndicator = ({ children, delayMs = 250 }: DelayedIndicatorProps) => {
	const [renderChildren, setRenderChildren] = useState(false);

	useEffect(() => {
		let delay: ReturnType<typeof setTimeout> | undefined = undefined;

		if (typeof delayMs === 'number') {
			if (delayMs === 0) {
				setRenderChildren(true);
			} else {
				delay = setTimeout(() => {
					setRenderChildren(true);
				}, delayMs);
			}
		}

		return () => {
			if (delay) {
				clearTimeout(delay);
			}
		};
	}, [delayMs]);

	return renderChildren ? children : null;
};

export { DelayedIndicator };
export type { DelayedIndicatorProps };
