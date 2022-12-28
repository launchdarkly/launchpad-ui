import type { HTMLAttributes } from 'react';
import './styles/ButtonGroup.css';
type ButtonGroupProps = HTMLAttributes<HTMLDivElement> & {
    spacing?: 'compact' | 'normal' | 'large';
    'data-test-id'?: string;
};
declare const ButtonGroup: ({ spacing, className, children, "data-test-id": testId, ...rest }: ButtonGroupProps) => JSX.Element;
export { ButtonGroup };
export type { ButtonGroupProps };
//# sourceMappingURL=ButtonGroup.d.ts.map