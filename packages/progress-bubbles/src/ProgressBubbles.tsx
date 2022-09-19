import type { Offset } from '@launchpad-ui/popover';

import { Popover, PopoverInteractionKind } from '@launchpad-ui/popover';
import { cx } from 'classix';
import { Fragment } from 'react';

import styles from './styles/ProgressBubbles.module.css';
import { useDimensions } from './utils';

const ICON_WIDTH = 2.8;

type ProgressBubbleInfo = {
  label: string;
  icons?: JSX.Element;
  popover?: JSX.Element;
  popoverOffset?: Offset;
  isWarning?: boolean;
  stageId?: string;
};

type ProgressBubblesProps = {
  numBubbles?: number;
  currentBubble: number;
  bubbleLabels?: string[];
  showCurrentLabelOnly?: boolean;
  vertical?: boolean;
  className?: string;
  items?: ProgressBubbleInfo[];
  popoverInteraction?: PopoverInteractionKind;
};

const ProgressBubbles = ({
  className,
  vertical,
  numBubbles,
  currentBubble,
  bubbleLabels,
  showCurrentLabelOnly = true,
  items,
  popoverInteraction = PopoverInteractionKind.HOVER_OR_FOCUS,
}: ProgressBubblesProps) => {
  const { ref, dimensions } = useDimensions();
  let children = [];

  if (items && items.length) {
    children = items.map((item, idx) => {
      // If multiple icons exist, then children is populated on props
      const hasMultipleIcons =
        item.icons && item.icons.props.children && item.icons.props.children.length;
      let numIcons = 0;
      if (item.icons) {
        numIcons = hasMultipleIcons ? item.icons.props.children.length : 1;
      }
      const iconWidth = hasMultipleIcons ? numIcons * ICON_WIDTH : ICON_WIDTH;
      const labelWidth = dimensions.width / items.length;
      const hideLabel = showCurrentLabelOnly && idx !== currentBubble;

      const bubble = (
        <div
          className={cx(
            styles['ProgressBubbles-icon'],
            hasMultipleIcons && styles['ProgressBubbles-icon--multiple'],
            idx === currentBubble && styles['ProgressBubbles-icon--current'],
            idx > currentBubble && styles['ProgressBubbles-icon--pending'],
            item.isWarning && styles['ProgressBubbles-icon--warning']
          )}
          style={{ width: `${iconWidth}rem` }}
        >
          {item.icons}
          <label
            id={item.popover?.props.stageId}
            aria-hidden={hideLabel}
            className={styles['ProgressBubbles-label']}
            style={{ width: `${labelWidth}px` }}
          >
            {showCurrentLabelOnly ? idx === currentBubble && item.label : item.label}
          </label>
        </div>
      );

      return (
        <Fragment key={idx}>
          {!!idx && (
            <div
              className={cx(
                styles['ProgressBubblesUsingItems-line'],
                idx <= currentBubble && styles['ProgressBubblesUsingItems-line--completed']
              )}
            />
          )}
          <div className={styles['ProgressBubblesIconContainer']}>
            {item.popover ? (
              <Popover
                targetClassName={styles['ProgressBubblesPopoverTarget']}
                restrictWidth={false}
                interactionKind={popoverInteraction}
                offset={item.popoverOffset}
                target={item.icons}
              >
                <div role="button" tabIndex={0}>
                  {bubble}
                </div>
                {item.popover}
              </Popover>
            ) : (
              bubble
            )}
          </div>
        </Fragment>
      );
    });
  } else if (numBubbles) {
    for (let i = 0; i < numBubbles; i++) {
      children.push(
        <Fragment key={i}>
          {!!i && (
            <div
              className={cx(
                styles['ProgressBubbles-line'],
                i <= currentBubble && styles['ProgressBubbles--filled']
              )}
            ></div>
          )}
          <div
            className={cx(
              styles['ProgressBubbles-bubble'],
              i <= currentBubble && styles['ProgressBubbles--filled'],
              i === 0 && styles['ProgressBubbles-bubble--first'],
              i === numBubbles - 1 && styles['ProgressBubbles-bubble--last']
            )}
          >
            <span className={styles['ProgressBubbles-text']}>
              {!!bubbleLabels &&
                (showCurrentLabelOnly
                  ? i === currentBubble && bubbleLabels[currentBubble]
                  : bubbleLabels[i])}
            </span>
          </div>
        </Fragment>
      );
    }
  }

  return (
    <div
      className={cx(
        'ProgressBubbles',
        styles.ProgressBubbles,
        className,
        vertical && styles['ProgressBubbles--vertical']
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};

export { ProgressBubbles };
export type { ProgressBubbleInfo, ProgressBubblesProps };
