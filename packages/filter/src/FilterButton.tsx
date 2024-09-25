import type { MouseEvent, ReactNode, SyntheticEvent } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Icon } from '@launchpad-ui/icons';
import { Tooltip } from '@launchpad-ui/tooltip';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { cx } from 'classix';
import { Children, forwardRef, useId } from 'react';

import styles from './styles/Filter.module.css';

type FilterButtonProps = {
	name: ReactNode;
	hideName?: boolean;
	isClearable?: boolean;
	onClear?(event: SyntheticEvent): void;
	className?: string;
	isSelected?: boolean;
	clearTooltip?: string | JSX.Element;
	children?: ReactNode;
	disabled?: boolean;
	onClickFilterButton?(): void;
	'data-test-id'?: string;
	ariaLabel?: string;
};

type Ref = HTMLButtonElement;

const FilterButton = forwardRef<Ref, FilterButtonProps>((props, ref) => {
	const {
		children,
		name,
		hideName,
		isClearable,
		clearTooltip,
		onClear,
		disabled,
		isSelected,
		onClickFilterButton,
		className,
		'data-test-id': testId = 'filter-button',
		ariaLabel = 'Clear filter',
		...rest
	} = props;
	const nameId = useId();
	const descriptionId = useId();

	const hasDescription = Children.count(children) !== 0;

	const nameElement = (
		<span className={styles.name}>
			{name}
			{hasDescription && ':'}
		</span>
	);

	const isDisabled = disabled;

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (isDisabled) return event.preventDefault();
		onClickFilterButton?.();
	};

	return (
		<div className={styles.buttonContainer} data-test-id={testId}>
			<button
				{...rest}
				type="button"
				aria-labelledby={`${nameId} ${hasDescription ? descriptionId : ''}`}
				aria-haspopup
				disabled={isDisabled}
				aria-disabled={isDisabled}
				className={cx(styles.button, className, (isClearable || isSelected) && styles.isClearable)}
				ref={ref}
				onClick={handleClick}
			>
				{hideName ? (
					<VisuallyHidden id={nameId}>{nameElement}</VisuallyHidden>
				) : (
					<span id={nameId}>{nameElement}</span>
				)}
				{hasDescription && (
					<span id={descriptionId} className={styles.description}>
						{children}
					</span>
				)}
				{!isClearable && <Icon name="chevron-down" size="small" />}
			</button>
			{isClearable && (
				<Tooltip targetClassName={styles.clearTooltip} content={clearTooltip}>
					<IconButton
						aria-label={ariaLabel}
						className={styles.clear}
						data-test-id="clear-filter-button"
						icon={<Icon name="cancel" size="small" />}
						size="small"
						onClick={onClear}
					/>
				</Tooltip>
			)}
		</div>
	);
});

FilterButton.defaultProps = {
	clearTooltip: 'Clear filter',
};

FilterButton.displayName = 'FilterButton';

export { FilterButton };
export type { FilterButtonProps };
