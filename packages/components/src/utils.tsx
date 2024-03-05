import type { ReactNode, Ref, RefAttributes } from 'react';

import { forwardRef as reactForwardRef } from 'react';

/**
 * forwardRef with generics support.
 *
 * https://www.totaltypescript.com/forwardref-with-generic-components#the-solution
 */
// biome-ignore lint/complexity/noBannedTypes: <explanation>
const forwardRef = <T, P = {}>(
	render: (props: P, ref: Ref<T>) => ReactNode,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
): ((props: P & RefAttributes<T>) => ReactNode) => reactForwardRef(render) as any;

export { forwardRef };
