/// <reference types="react" />
import type { DropdownProps } from '@launchpad-ui/dropdown';
import './styles/SplitButton.css';
type SplitButtonDropdownProps = Omit<DropdownProps<string | number | object>, 'enableArrow' | 'restrictWidth'>;
declare const SplitButtonDropdown: ({ disabled, children, placement, "data-test-id": testId, ...rest }: SplitButtonDropdownProps) => JSX.Element;
export { SplitButtonDropdown };
export type { SplitButtonDropdownProps };
//# sourceMappingURL=SplitButtonDropdown.d.ts.map