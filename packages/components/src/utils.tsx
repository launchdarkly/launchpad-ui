import type { Href } from '@react-types/shared';
import type { Context, ReactNode, Ref } from 'react';
import type { ContextValue, SlotProps } from 'react-aria-components';

import { announce } from '@react-aria/live-announcer';
import { mergeRefs } from '@react-aria/utils';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { mergeProps } from 'react-aria';
import { useSlottedContext } from 'react-aria-components';
import { useHref as useRouterHref } from 'react-router';

import { toastQueue } from './Toast';

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

const useLPContextProps = <T, U extends SlotProps, E>(
	props: T & SlotProps,
	ref: Ref<E> | undefined,
	context: Context<ContextValue<U, E>>,
): [T, Ref<E | null>] => {
	const ctx = useSlottedContext(context, props.slot) || {};
	// @ts-expect-error
	const { ref: contextRef, ...contextProps } = ctx;
	const mergedRef = useMemo(() => mergeRefs(ref, contextRef), [ref, contextRef]);
	const mergedProps = mergeProps(contextProps, props) as unknown as T;

	return [mergedProps, mergedRef];
};

const fallbackCopyToClipboard = (text: string) =>
	new Promise<boolean>((resolve, reject) => {
		// Using setTimeout to ensure we focus the text area after the DOM is updated
		// in cases of dropdown menus
		setTimeout(() => {
			try {
				const textArea = document.createElement('textarea');
				textArea.value = text;

				textArea.style.position = 'fixed';
				textArea.style.left = '-999999px';
				textArea.style.top = '-999999px';
				document.body.appendChild(textArea);

				textArea.focus();
				textArea.select();

				const successful = document.execCommand('copy');
				document.body.removeChild(textArea);

				if (successful) {
					resolve(true);
				} else {
					reject(new Error('execCommand failed'));
				}
			} catch (error) {
				reject(error);
			}
		}, 10); // Small delay to ensure focus operations complete
	});

// navigator.clipboard is only available in secure contexts (https)
// We need to use document.execCommand for insecure contexts (http)
// for example when testing the Sandbox locally
const copyToClipboard = async (
	text: string,
	toastMessage?: string | ReactNode,
	errorMessage?: string | ReactNode,
) => {
	const MAX_WIDTH = 80;

	try {
		if ('clipboard' in navigator) {
			await navigator.clipboard.writeText(text);
		} else {
			await fallbackCopyToClipboard(text);
		}

		toastQueue.add({
			title:
				toastMessage ??
				`'${text.length > MAX_WIDTH ? `${text.slice(0, MAX_WIDTH)}...` : text}' copied to clipboard.`,
			status: 'success',
		});
		announce('Copied!', 'polite', 300);
		return true;
	} catch {
		announce('Failed to copy', 'polite', 300);
		toastQueue.add({ title: errorMessage ?? 'Unable to copy', status: 'error' });
		return false;
	}
};

export { copyToClipboard, useHref, useImageLoadingStatus, useLPContextProps, useMedia };
