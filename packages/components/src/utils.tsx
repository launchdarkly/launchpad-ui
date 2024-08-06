import type { Href } from '@react-types/shared';

import { useEffect, useState } from 'react';
import { useHref as useRouterHref } from 'react-router-dom';

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

const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

// https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/index.tsx#L957-L962
const useHref = (href: Href) => {
	let absoluteHref: string | undefined;
	if (typeof href === 'string' && ABSOLUTE_URL_REGEX.test(href)) {
		absoluteHref = href;
	}
	const routerHref = useRouterHref(href);
	return absoluteHref || routerHref;
};

export { useHref, useMedia };
