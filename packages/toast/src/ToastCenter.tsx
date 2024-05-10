import type { ToastBaseProps } from './Toast';

import { cx } from 'classix';
import { AnimatePresence, LazyMotion, m } from 'framer-motion';

import { Toast } from './Toast';
import styles from './styles/ToastCenter.module.css';

const loadFeatures = () =>
	import(
		/* webpackChunkName: "lp-toast-framer-features" */
		/* webpackExports: "domAnimation" */
		'framer-motion'
	).then((res) => res.domAnimation);

type ToastRecord = Omit<ToastBaseProps, 'onDismiss'> & {
	_id: string;
};

type ToastCenterProps = {
	className?: string;
	toasts: ToastRecord[];
	onDismiss(toastId: string): void;
};

const ToastCenter = ({ toasts, onDismiss, className }: ToastCenterProps) => {
	const classes = cx(styles.ToastCenter, className);

	return (
		<LazyMotion strict features={loadFeatures}>
			<div className={classes}>
				<AnimatePresence initial={false}>
					{toasts.map((item) => (
						<m.div
							className={styles['ToastCenter-item']}
							key={item._id}
							initial={{
								y: '100%',
								opacity: 0,
							}}
							animate={{
								y: 0,
								x: 0,
								opacity: 1,
								scale: 1,
								transition: {
									duration: 0.4,
									ease: [0.4, 0, 0.2, 1],
								},
							}}
							exit={{
								y: 0,
								opacity: 0,
								scale: 0.85,
								transition: {
									duration: 0.15,
									ease: [0.4, 0, 1, 1],
								},
							}}
						>
							<Toast
								kind={item.kind}
								content={item.content}
								onDismiss={() => onDismiss(item._id)}
							/>
						</m.div>
					))}
				</AnimatePresence>
			</div>
		</LazyMotion>
	);
};

export { ToastCenter };
export type { ToastCenterProps, ToastRecord };
