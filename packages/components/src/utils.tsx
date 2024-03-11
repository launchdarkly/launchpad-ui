import type { ReactElement, Ref, RefAttributes } from 'react';

// https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/utils.tsx#L20-L24
// biome-ignore lint/complexity/noBannedTypes: <explanation>
declare function forwardRef<T, P = {}>(
	render: (props: P, ref: Ref<T>) => ReactElement | null,
): (props: P & RefAttributes<T>) => ReactElement | null;

type forwardRefType = typeof forwardRef;

export type { forwardRefType };
