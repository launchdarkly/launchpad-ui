import { useEffect, useState } from 'react';

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
