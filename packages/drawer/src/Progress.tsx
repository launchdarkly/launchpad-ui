import { cx } from 'classix';

import styles from './styles/Progress.module.css';

// The small indeterminate spinner the drawer shows while suspended content
// loads. It previously came from `@launchpad-ui/progress`, which is deprecated
// and is no longer part of this workspace, so the markup and styles live here
// unchanged. Only the drawer's usage is kept: no value, no size, no delay.
const DIAMETER = 16;
const STROKE_WIDTH = DIAMETER * 0.1;
const RADIUS = DIAMETER * 0.5 - STROKE_WIDTH * 0.5;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Progress = () => (
	<svg
		className={cx(styles.Progress, styles['Progress--indeterminate'])}
		width={DIAMETER}
		height={DIAMETER}
		viewBox={`0 0 ${DIAMETER} ${DIAMETER}`}
		data-test-id="progress"
		role="progressbar"
		aria-valuemin={0}
		aria-valuetext="loading"
		aria-valuemax={100}
	>
		<circle
			className={styles['Progress-track']}
			cx={DIAMETER / 2}
			cy={DIAMETER / 2}
			r={RADIUS}
			strokeWidth={STROKE_WIDTH}
		/>
		<circle
			className={styles['Progress-head']}
			cx={DIAMETER / 2}
			cy={DIAMETER / 2}
			r={RADIUS}
			strokeWidth={STROKE_WIDTH}
			strokeDasharray={CIRCUMFERENCE}
			strokeDashoffset={CIRCUMFERENCE * 0.75}
		/>
	</svg>
);

export { Progress };
