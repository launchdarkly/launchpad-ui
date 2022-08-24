import type { Offset } from '@launchpad-ui/popover';

import { Popover, PopoverInteractionKind } from '@launchpad-ui/popover';
import { cx } from 'classix';
import { Fragment } from 'react';

import './styles/ProgressBubbles.css';
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
            'ProgressBubbles-icon',
            hasMultipleIcons && 'ProgressBubbles-icon--multiple',
            idx === currentBubble && 'ProgressBubbles-icon--current',
            idx > currentBubble && 'ProgressBubbles-icon--pending',
            item.isWarning && 'ProgressBubbles-icon--warning'
          )}
          style={{ width: `${iconWidth}rem` }}
        >
          {item.icons}
          <label
            id={item.popover?.props.stageId}
            aria-hidden={hideLabel}
            className="ProgressBubbles-label"
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
                'ProgressBubblesUsingItems-line',
                idx <= currentBubble && 'ProgressBubblesUsingItems-line--completed'
              )}
            />
          )}
          <div className="ProgressBubblesIconContainer">
            {item.popover ? (
              <Popover
                targetClassName="ProgressBubblesPopoverTarget"
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
                'ProgressBubbles-line',
                i <= currentBubble && 'ProgressBubbles--filled'
              )}
            ></div>
          )}
          <div
            className={cx(
              'ProgressBubbles-bubble',
              i <= currentBubble && 'ProgressBubbles--filled',
              i === 0 && 'ProgressBubbles-bubble--first',
              i === numBubbles - 1 && 'ProgressBubbles-bubble--last'
            )}
          >
            <span className="ProgressBubbles-text">
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
      className={cx('ProgressBubbles', className, vertical && 'ProgressBubbles--vertical')}
      ref={ref}
    >
      {children}
    </div>
  );
};

export { ProgressBubbles };
export type { ProgressBubbleInfo, ProgressBubblesProps };
