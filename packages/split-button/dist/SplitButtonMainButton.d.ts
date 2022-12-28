/// <reference types="react" />
import type { ButtonProps } from '@launchpad-ui/button';
import './styles/SplitButton.css';
type SplitButtonMainButtonProps = Omit<ButtonProps, 'kind' | 'size'>;
declare const SplitButtonMainButton: import("react").ForwardRefExoticComponent<SplitButtonMainButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { SplitButtonMainButton };
export type { SplitButtonMainButtonProps };
//# sourceMappingURL=SplitButtonMainButton.d.ts.map