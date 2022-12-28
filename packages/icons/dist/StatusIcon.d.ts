/// <reference types="react" />
import type { IconProps } from './Icon';
type StatusIconProps = IconProps & {
    kind: 'info' | 'success' | 'warning' | 'error';
};
declare const StatusIcon: ({ kind, size, ...rest }: StatusIconProps) => JSX.Element;
export { StatusIcon };
export type { StatusIconProps };
//# sourceMappingURL=StatusIcon.d.ts.map