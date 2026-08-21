import type { HTMLAttributes, Ref } from 'react';
import { createContext } from 'react';
import { HeadingContext } from 'react-aria-components/Heading';
import { Provider } from 'react-aria-components/slots';
import type { ContextValue } from 'react-aria-components/slots';
import { TextContext } from 'react-aria-components/Text';
import { cva } from 'class-variance-authority';

import { ButtonGroupContext } from './ButtonGroup';
import { Gallery } from './Gallery';
import type { MediaItem } from './Gallery';
import { LinkButtonContext } from './LinkButton';
import { useLPContextProps } from './utils';

import styles from './styles/OnboardingEmptyState.module.css';

const onboardingEmptyStateStyles = cva(styles.root);

interface OnboardingEmptyStateProps extends HTMLAttributes<HTMLDivElement> {
	ref?: Ref<HTMLDivElement>;
	/**
	 * Media rendered in the gallery panel. A single item shows a static image; more than one renders
	 * an auto-advancing, keyboard-navigable carousel.
	 */
	media: MediaItem[];
}

const OnboardingEmptyStateContext = createContext<ContextValue<OnboardingEmptyStateProps, HTMLDivElement>>(null);

/**
 * A first-time onboarding empty state: a 50/50 editorial layout with heading, body copy, and calls
 * to action on one side and a media gallery (single image or auto-advancing carousel) on the other.
 *
 * Content is composed with slots, following the `EmptyState` pattern — pass a `Heading`, `Text`, and
 * a `ButtonGroup` of `LinkButton`s as children; the component themes them via context. Use
 * `<Heading size="large">` so the onboarding title is a top-level `h1`. The gallery is supplied
 * through the `media` prop.
 *
 * @example
 * ```tsx
 * <OnboardingEmptyState media={[{ src: light, darkSrc: dark, alt: 'Targeting' }]}>
 *   <Heading size="large">Release code safely in production</Heading>
 *   <Text>Control how and when changes reach users.</Text>
 *   <ButtonGroup>
 *     <LinkButton variant="primary" href={createHref}>Get started</LinkButton>
 *     <LinkButton href={docsHref}>See an example</LinkButton>
 *   </ButtonGroup>
 * </OnboardingEmptyState>
 * ```
 */
const OnboardingEmptyState = ({ ref, media, children, ...props }: OnboardingEmptyStateProps) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, OnboardingEmptyStateContext);
	const { className, ...rest } = mergedProps;

	return (
		<div {...rest} ref={mergedRef} className={onboardingEmptyStateStyles({ className })}>
			<div className={styles.content}>
				<div className={styles.contentInner}>
					<Provider
						values={[
							[HeadingContext, { className: styles.heading }],
							[TextContext, { className: styles.description }],
							[ButtonGroupContext, { className: styles.ctas }],
							[LinkButtonContext, { size: 'large' }],
						]}
					>
						{children}
					</Provider>
				</div>
			</div>
			<div className={styles.galleryPanel}>
				<Gallery media={media} />
			</div>
		</div>
	);
};

export { OnboardingEmptyState, OnboardingEmptyStateContext, onboardingEmptyStateStyles };
export type { OnboardingEmptyStateProps, MediaItem };
