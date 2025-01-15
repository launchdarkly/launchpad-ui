import type { Href } from '@react-types/shared';

import { useEffect, useLayoutEffect, useState } from 'react';
import { useHref as useRouterHref } from 'react-router';

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';

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

// https://github.com/remix-run/react-router/blob/main/packages/react-router/lib/dom/lib.tsx#L577-L585
const useHref = (href: Href) => {
	let absoluteHref: string | undefined;
	if (typeof href === 'string' && ABSOLUTE_URL_REGEX.test(href)) {
		absoluteHref = href;
	}
	const routerHref = useRouterHref(href);
	return absoluteHref || routerHref;
};

const useImageLoadingStatus = (src?: string) => {
	const [loadingStatus, setLoadingStatus] = useState<ImageLoadingStatus>('idle');

	useLayoutEffect(() => {
		if (!src) {
			setLoadingStatus('error');
			return;
		}

		let isMounted = true;
		const image = new window.Image();

		const updateStatus = (status: ImageLoadingStatus) => () => {
			if (!isMounted) return;
			setLoadingStatus(status);
		};

		setLoadingStatus('loading');
		image.onload = updateStatus('loaded');
		image.onerror = updateStatus('error');
		image.src = src;

		return () => {
			isMounted = false;
		};
	}, [src]);

	return loadingStatus;
};

export { useHref, useImageLoadingStatus, useMedia };
