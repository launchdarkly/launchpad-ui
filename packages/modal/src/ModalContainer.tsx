import type { Variants } from 'framer-motion';
import type { MouseEvent } from 'react';
import type { ModalProps } from './Modal';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { FocusTrap } from '@launchpad-ui/focus-trap';
import { useFocusWithin } from '@react-aria/interactions';
import { usePreventScroll } from '@react-aria/overlays';
import { cx } from 'classix';
import { LazyMotion, m } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { MODAL_DESCRIBED_BY, MODAL_LABELLED_BY } from './constants';
import styles from './styles/Modal.module.css';
import { useMediaQuery } from './utils';

const overlay: Variants = {
	visible: { opacity: 1, transition: { duration: 0.15 } },
	hidden: { opacity: 0 },
};

const transitions: Record<string, Variants> = {
	desktopPop: {
		hidden: { opacity: 0, scale: 0.9 },
		visible: { opacity: 1, scale: 1, transition: { type: 'spring', delay: 0.1, duration: 0.15 } },
	},
	mobileSlideUp: {
		hidden: { opacity: 0, y: '25%' },
		visible: {
			opacity: 1,
			y: '0%',
			transition: { type: 'spring', delay: 0.15, duration: 0.2, bounce: 0 },
		},
	},
};

const loadFeatures = () =>
	import(
		/* webpackChunkName: "lp-modal-framer-features" */
		/* webpackExports: "domAnimation" */
		'framer-motion'
	).then((res) => res.domAnimation);

type ModalContainerProps = Pick<
	ModalProps,
	| 'children'
	| 'cancelWithOverlayClick'
	| 'onCancel'
	| 'size'
	| 'className'
	| 'onReady'
	| 'theme'
	| 'data-test-id'
>;

const ModalContainer = ({
	cancelWithOverlayClick = true,
	children,
	onCancel,
	size = 'medium',
	className,
	onReady,
	theme,
	'data-test-id': testId,
}: ModalContainerProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const initialized = useRef(false);
	const [isFocusWithin, setIsFocusWithin] = useState(false);
	const { focusWithinProps } = useFocusWithin({
		onFocusWithinChange: (isFocusWithin) => setIsFocusWithin(isFocusWithin),
	});

	usePreventScroll();

	const isDesktopViewport = useMediaQuery('(min-width: 430px)', true);

	const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
		if (cancelWithOverlayClick && event.target === event.currentTarget) {
			onCancel?.();
		}
	};

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			event.stopImmediatePropagation();
			const latest = [...document.querySelectorAll('[data-modal]')].pop();
			if (event.key === 'Escape' && latest === ref.current && isFocusWithin) {
				close();
			}
		};

		const close = () => {
			onCancel?.();
		};

		const addOverlayAndEventHandler = () => {
			document.body.classList.add('has-overlay');
			document.addEventListener('keydown', handleEscape);
		};

		const removeOverlayAndEventHandler = () => {
			document.body.classList.remove('has-overlay');
			document.removeEventListener('keydown', handleEscape);
		};

		if (!initialized.current) {
			initialized.current = true;
			onReady?.();
		}

		if (isFocusWithin) {
			addOverlayAndEventHandler();
		}

		if (!isFocusWithin) {
			removeOverlayAndEventHandler();
		}

		return () => {
			removeOverlayAndEventHandler();
		};
	}, [onReady, onCancel, isFocusWithin]);

	return (
		<LazyMotion strict features={loadFeatures}>
			<div
				{...addLaunchPadAttribution('Modal')}
				{...focusWithinProps}
				className={styles.overlayContainer}
				data-modal
				data-test-id="modal-overlay-container"
				ref={ref}
				{...(theme ? { 'data-theme': theme } : {})}
			>
				<m.div
					initial="hidden"
					animate="visible"
					variants={overlay}
					transition={{ duration: 0.15 }}
					/* @ts-ignore framer */
					role="presentation"
					className={styles.overlay}
					data-test-id="modal-overlay"
					onMouseDown={handleOverlayClick}
				>
					<FocusTrap autoFocus restoreFocus>
						<m.div
							initial="hidden"
							animate="visible"
							variants={isDesktopViewport ? transitions.desktopPop : transitions.mobileSlideUp}
							/* @ts-ignore framer */
							role="dialog"
							aria-labelledby={MODAL_LABELLED_BY}
							aria-describedby={MODAL_DESCRIBED_BY}
							aria-modal
							data-test-id={testId}
							className={cx(styles.modal, styles[size], className)}
							tabIndex={-1}
						>
							{children}
						</m.div>
					</FocusTrap>
				</m.div>
			</div>
		</LazyMotion>
	);
};

export { ModalContainer };
export type { ModalContainerProps };
