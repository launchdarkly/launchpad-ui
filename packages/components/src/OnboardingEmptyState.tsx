import type { HTMLAttributes, Key, ReactNode, Ref } from 'react';
import { cx } from 'class-variance-authority';

import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { Gallery } from './Gallery';
import type { MediaItem } from './Gallery';
import { Heading } from './Heading';
import { LinkButton } from './LinkButton';
import { Text } from './Text';

import styles from './styles/OnboardingEmptyState.module.css';

/**
 * A single call to action rendered inside the onboarding empty state. Supply exactly one of `href`
 * or `onPress`:
 *
 * - `href` set → renders a `LinkButton` (an `<a>`), for navigation.
 * - `onPress` set → renders a `Button`, for an in-app action.
 *
 * The variant (primary vs. default) and size are controlled by `OnboardingEmptyState`; consumers
 * only provide the content.
 */
interface OnboardingAction {
	/** Visible label for the button. */
	label: string;
	/** Destination URL. When set, the action renders as a `LinkButton` (`<a href>`). */
	href?: string;
	/** Press handler. When set (and `href` is not), the action renders as a `Button`. */
	onPress?: () => void;
}

interface OnboardingEmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	ref?: Ref<HTMLDivElement>;
	/** Plain-text onboarding title. Rendered as an `h1` with fixed editorial styling. */
	heading: string;
	/** Optional body copy beneath the heading. May contain an inline link. */
	description?: ReactNode;
	/**
	 * Media rendered in the gallery panel. A single item shows a static image; more than one renders
	 * an auto-advancing, keyboard-navigable carousel.
	 */
	media: MediaItem[];
	/** The required primary call to action. Always rendered with the primary variant. */
	primaryAction: OnboardingAction;
	/**
	 * Up to two secondary calls to action, each rendered with the default (non-emphasized) variant.
	 * The tuple type caps the count at two at author time; omit the prop for none.
	 */
	secondaryActions?: [OnboardingAction] | [OnboardingAction, OnboardingAction];
}

/**
 * Renders a single onboarding action with a component-controlled variant and a fixed `large` size.
 * `href` wins over `onPress`: an action with an `href` is always a `LinkButton`.
 */
const renderAction = (action: OnboardingAction, variant: 'primary' | 'default', key?: Key) =>
	action.href !== undefined ? (
		<LinkButton key={key} variant={variant} size="large" href={action.href}>
			{action.label}
		</LinkButton>
	) : (
		<Button key={key} variant={variant} size="large" onPress={action.onPress}>
			{action.label}
		</Button>
	);

/**
 * A first-time onboarding empty state: a 50/50 editorial layout with heading, body copy, and calls
 * to action on one side and a media gallery (single image or auto-advancing carousel) on the other.
 *
 * The API is locked and fully controlled — consumers supply only content (`heading`, `description`,
 * `media`, and the action props) and cannot change the variants, sizes, or editorial styling the
 * component applies. The heading renders as a top-level `h1`; the `primaryAction` uses the primary
 * button variant and each of `secondaryActions` uses the default variant. For each action, an `href`
 * renders a `LinkButton` and an `onPress` renders a `Button`.
 *
 * @example
 * ```tsx
 * <OnboardingEmptyState
 *   heading="Release code safely in production"
 *   description="Control how and when changes reach your users."
 *   media={[{ src: light, darkSrc: dark, alt: 'Targeting' }]}
 *   primaryAction={{ label: 'Get started', href: createHref }}
 *   secondaryActions={[{ label: 'See an example', href: docsHref }]}
 * />
 * ```
 */
const OnboardingEmptyState = ({
	ref,
	className,
	heading,
	description,
	media,
	primaryAction,
	secondaryActions,
	...props
}: OnboardingEmptyStateProps) => {
	return (
		<div {...props} ref={ref} className={cx(styles.root, className)}>
			<div className={styles.content}>
				<div className={styles.contentInner}>
					<Heading size="large" className={styles.heading}>
						{heading}
					</Heading>
					{description !== undefined ? <Text className={styles.description}>{description}</Text> : null}
					<ButtonGroup className={styles.ctas}>
						{renderAction(primaryAction, 'primary')}
						{secondaryActions?.map((action, index) => renderAction(action, 'default', index))}
					</ButtonGroup>
				</div>
			</div>
			<div className={styles.galleryPanel}>
				<Gallery media={media} />
			</div>
		</div>
	);
};

export { OnboardingEmptyState };
export type { MediaItem, OnboardingAction, OnboardingEmptyStateProps };
