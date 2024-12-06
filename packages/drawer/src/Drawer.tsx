import type { Variants } from 'framer-motion';
import type { MouseEvent, ReactNode } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { FocusTrap } from '@launchpad-ui/focus-trap';
import { Icon } from '@launchpad-ui/icons';
import { Portal } from '@launchpad-ui/portal';
import { Progress } from '@launchpad-ui/progress';
import { useFocusWithin } from '@react-aria/interactions';
import { usePreventScroll } from '@react-aria/overlays';
import { cx } from 'classix';
import { LazyMotion, m } from 'framer-motion';
import { Suspense, useEffect, useRef, useState } from 'react';

import { DRAWER_LABELLED_BY } from './constants';
import styles from './styles/Drawer.module.css';

const overlay: Variants = {
	visible: { opacity: 1, transition: { duration: 0.15 } },
	hidden: { opacity: 0 },
};

const slideRight: Variants = {
	hidden: { opacity: 0, x: '25%' },
	visible: {
		opacity: 1,
		x: '0%',
		transition: { type: 'spring', delay: 0.15, duration: 0.2, bounce: 0 },
	},
};

const loadFeatures = () =>
	import(
		/* webpackChunkName: "lp-drawer-framer-features" */
		/* webpackExports: "domAnimation" */
		'framer-motion'
	).then((res) => res.domAnimation);

type DrawerProps = {
	children?: ReactNode;
	className?: string;
	onCancel?(): void;
	'data-test-id'?: string;
	size?: 'small' | 'medium' | 'large' | 'xLarge' | 'full';
	theme?: 'dark' | 'default';
	hideCancel?: boolean;
};

/**
 * @deprecated use `Modal` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-overlays-modal--docs#drawer
 */
const Drawer = (props: DrawerProps) => (
	<Portal>
		<DrawerContainer {...props} />
	</Portal>
);

const DrawerContainer = ({
	className,
	children,
	onCancel,
	size = 'small',
	'data-test-id': testId = 'drawer',
	theme,
	hideCancel = false,
}: DrawerProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isFocusWithin, setIsFocusWithin] = useState(false);
	const { focusWithinProps } = useFocusWithin({
		onFocusWithinChange: (isFocusWithin) => setIsFocusWithin(isFocusWithin),
	});

	usePreventScroll();

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			event.stopImmediatePropagation();
			const latest = [...document.querySelectorAll('[data-drawer]')].pop();
			if (event.key === 'Escape' && latest === ref.current && isFocusWithin) {
				close();
			}
		};

		const addOverlayAndEventHandler = () => {
			document.body.classList.add('has-overlay');
			document.addEventListener('keydown', handleEscape);
		};

		const removeOverlayAndEventHandler = () => {
			document.body.classList.remove('has-overlay');
			document.removeEventListener('keydown', handleEscape);
		};

		const close = () => {
			onCancel?.();
		};

		if (isFocusWithin) {
			addOverlayAndEventHandler();
		}

		if (!isFocusWithin) {
			removeOverlayAndEventHandler();
		}

		return () => {
			removeOverlayAndEventHandler();
		};
	}, [onCancel, isFocusWithin]);

	const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			onCancel?.();
		}
	};

	return (
		<LazyMotion strict features={loadFeatures}>
			<div
				{...focusWithinProps}
				className={cx(styles.drawer, styles[size], className)}
				data-drawer
				data-test-id={testId}
				ref={ref}
			>
				<m.div
					initial="hidden"
					animate="visible"
					variants={overlay}
					transition={{ duration: 0.15 }}
					/* @ts-ignore framer */
					role="presentation"
					className={styles.overlay}
					onMouseDown={handleOverlayClick}
				>
					<FocusTrap autoFocus restoreFocus>
						<m.div
							initial="hidden"
							animate="visible"
							variants={slideRight}
							/* @ts-ignore framer */
							role="dialog"
							aria-labelledby={DRAWER_LABELLED_BY}
							aria-describedby={DRAWER_LABELLED_BY}
							aria-modal
							className={styles.content}
							tabIndex={-1}
							{...(theme ? { 'data-theme': theme } : {})}
						>
							{!hideCancel && (
								<IconButton
									aria-label="close"
									icon={<Icon name="cancel" size="medium" />}
									className={styles.closeButton}
									onClick={onCancel}
									data-test-id="drawer-close-button"
								/>
							)}
							<Suspense fallback={<Progress />}>{children}</Suspense>
						</m.div>
					</FocusTrap>
				</m.div>
			</div>
		</LazyMotion>
	);
};

export { Drawer };
export type { DrawerProps };
