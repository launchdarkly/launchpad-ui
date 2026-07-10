import type { ReactNode } from 'react';

import styles from './styles/DataTableCells.module.css';
import { Tag, TagGroup, TagList } from './TagGroup';

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

/**
 * Cell content patterns from the LaunchPad "Table BETA" design system. Consumers pass
 * these as a column's `cell` renderer so tables get the design's cell anatomy — two-line
 * text, tabular numerics, colored deltas, status dots, tags, monospace — out of the box.
 */

interface TwoLineCellProps {
	/** Primary line — `label/1/medium`, primary text color. */
	primary: ReactNode;
	/** Optional secondary line — `small/1/regular`, muted. */
	secondary?: ReactNode;
	/** Optional leading media (icon, avatar) rendered to the left of the text. */
	media?: ReactNode;
}

/** Text / Composition cell: primary line with optional muted secondary line and leading media. */
const TwoLineCell = ({ primary, secondary, media }: TwoLineCellProps) => {
	const text = (
		<span className={styles.twoLine}>
			<span className={styles.primary}>{primary}</span>
			{secondary != null && <span className={styles.secondary}>{secondary}</span>}
		</span>
	);
	return media != null ? (
		<span className={styles.media}>
			{media}
			{text}
		</span>
	) : (
		text
	);
};

/** Numeric / currency value — tabular figures. Pair with a column `meta.align: 'end'`. */
const NumericValue = ({ children }: { children: ReactNode }) => (
	<span className={styles.numeric}>{children}</span>
);

interface DeltaValueProps {
	/** The signed value, e.g. 1.2 or -0.4. */
	value: number;
	/** Suffix appended to the formatted number. Default `%`. */
	suffix?: string;
	/** Fraction digits. Default 1. */
	fractionDigits?: number;
	/** Invert the good/bad coloring for "lower is better" metrics (error rate, latency). */
	invert?: boolean;
}

/** Delta / trend value: signed, tabular, and colored success / error / neutral. */
const DeltaValue = ({
	value,
	suffix = '%',
	fractionDigits = 1,
	invert = false,
}: DeltaValueProps) => {
	const good = invert ? value < 0 : value > 0;
	const bad = invert ? value > 0 : value < 0;
	const tone = good ? styles.up : bad ? styles.down : styles.zero;
	const sign = value > 0 ? '+' : '';
	return (
		<span className={cx(styles.numeric, tone)}>
			{sign}
			{value.toFixed(fractionDigits)}
			{suffix}
		</span>
	);
};

type StatusTone = 'success' | 'error' | 'info' | 'neutral';

/** Status cell: a colored dot plus a label (e.g. an environment or health indicator). */
const StatusCell = ({ tone = 'neutral', children }: { tone?: StatusTone; children: ReactNode }) => (
	<span className={styles.status}>
		<span className={cx(styles.dot, styles[`dot-${tone}`])} />
		{children}
	</span>
);

/** Tag list cell (References) — composes the LaunchPad `TagGroup`/`Tag` design-system primitive. */
const TagCell = ({ tags, label = 'Tags' }: { tags: string[]; label?: string }) => (
	<TagGroup aria-label={label}>
		<TagList>
			{tags.map((tag) => (
				<Tag key={tag} id={tag} size="small">
					{tag}
				</Tag>
			))}
		</TagList>
	</TagGroup>
);

/** Monospace value (ids, hashes, keys) — CommitMono via the LP code text token. */
const MonoValue = ({ children }: { children: ReactNode }) => (
	<span className={styles.mono}>{children}</span>
);

export { TwoLineCell, NumericValue, DeltaValue, StatusCell, TagCell, MonoValue };
export type { TwoLineCellProps, DeltaValueProps, StatusTone };
