import type { ReactElement, Ref, RefAttributes } from 'react';

import { useEffect, useState } from 'react';

// https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/utils.tsx#L20-L24
// biome-ignore lint/complexity/noBannedTypes: <explanation>
declare function forwardRef<T, P = {}>(
	render: (props: P, ref: Ref<T>) => ReactElement | null,
): (props: P & RefAttributes<T>) => ReactElement | null;

type forwardRefType = typeof forwardRef;

const useMedia = (media: string) => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const mediaQueryList = window.matchMedia(media);

			setIsActive(mediaQueryList.matches);

			const listener = (evt: MediaQueryListEvent) => {
				setIsActive(evt.matches);
			};

			mediaQueryList.addEventListener('change', listener);

			return () => {
				mediaQueryList.removeEventListener('change', listener);
			};
		}
		return undefined;
	}, [media]);

	return isActive;
};

export { useMedia };
export type { forwardRefType };
