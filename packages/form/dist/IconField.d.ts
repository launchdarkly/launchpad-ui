import type { IconProps } from '@launchpad-ui/icons';
import type { HTMLAttributes } from 'react';
type IconFieldProps = HTMLAttributes<HTMLDivElement> & {
    icon(args: IconProps): JSX.Element;
    children: JSX.Element | JSX.Element[];
    'data-test-id'?: string;
};
declare const IconField: ({ icon, children, className, "data-test-id": testId, ...rest }: IconFieldProps) => JSX.Element;
export { IconField };
export type { IconFieldProps };
//# sourceMappingURL=IconField.d.ts.map