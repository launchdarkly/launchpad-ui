/// <reference types="react" />
import type { DropdownButtonProps } from '@launchpad-ui/dropdown';
import './styles/SplitButton.css';
type SplitButtonDropdownButtonProps = Omit<DropdownButtonProps, 'kind' | 'size' | 'children'>;
declare const SplitButtonDropdownButton: import("react").ForwardRefExoticComponent<SplitButtonDropdownButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { SplitButtonDropdownButton };
export type { SplitButtonDropdownButtonProps };
//# sourceMappingURL=SplitButtonDropdownButton.d.ts.map