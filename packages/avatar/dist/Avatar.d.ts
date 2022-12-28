import type { IconProps } from '@launchpad-ui/icons';
import type { ComponentType, HTMLAttributes } from 'react';
type AvatarProps = HTMLAttributes<HTMLDivElement> & {
    alt?: string;
    url: string;
    size?: 'tiny' | 'small' | 'medium' | 'large';
    initials?: string;
    defaultIcon?: ComponentType<IconProps>;
    'data-test-id'?: string;
};
declare const Avatar: ({ alt, url, defaultIcon: DefaultIcon, className, initials, size, "data-test-id": testId, ...rest }: AvatarProps) => JSX.Element;
export { Avatar };
export type { AvatarProps };
//# sourceMappingURL=Avatar.d.ts.map