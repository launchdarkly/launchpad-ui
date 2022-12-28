import type { HTMLProps } from 'react';
type IconProps = Omit<HTMLProps<HTMLSpanElement>, 'size'> & {
    name?: string;
    subtle?: boolean;
    size?: 'micro' | 'tiny' | 'small' | 'medium' | 'mlarge' | 'large' | 'xlarge' | 'huge';
    'data-test-id'?: string;
};
declare const Icon: ({ name, subtle, className, size, children, "data-test-id": testId, ...props }: IconProps) => JSX.Element;
export { Icon };
export type { IconProps };
//# sourceMappingURL=Icon.d.ts.map