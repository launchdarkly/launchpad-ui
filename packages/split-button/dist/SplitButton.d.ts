import type { ButtonProps } from '@launchpad-ui/button';
import type { HTMLAttributes } from 'react';
import './styles/SplitButton.css';
type SplitButtonProps = HTMLAttributes<HTMLDivElement> & {
    kind?: Extract<ButtonProps['kind'], 'primary' | 'default'>;
    size?: ButtonProps['size'];
    disabled?: boolean;
    'data-test-id'?: string;
};
declare const SplitButton: {
    ({ disabled, kind, size, children, className, "data-test-id": testId, ...rest }: SplitButtonProps): JSX.Element;
    displayName: string;
};
export { SplitButton };
export type { SplitButtonProps };
//# sourceMappingURL=SplitButton.d.ts.map