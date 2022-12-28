/// <reference types="react" />
import type { Offset, PopoverProps } from '@launchpad-ui/popover';
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
    popoverInteraction?: PopoverProps['interactionKind'];
    'data-test-id'?: string;
};
declare const ProgressBubbles: ({ className, vertical, numBubbles, currentBubble, bubbleLabels, showCurrentLabelOnly, items, popoverInteraction, "data-test-id": testId, }: ProgressBubblesProps) => JSX.Element;
export { ProgressBubbles };
export type { ProgressBubbleInfo, ProgressBubblesProps };
//# sourceMappingURL=ProgressBubbles.d.ts.map