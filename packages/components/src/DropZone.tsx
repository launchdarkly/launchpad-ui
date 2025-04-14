import type { Ref } from 'react';
import type { DropZoneProps as AriaDropZoneProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { DropZone as AriaDropZone, composeRenderProps } from 'react-aria-components';

import styles from './styles/DropZone.module.css';
import { useLPContextProps } from './utils';

const dropZoneStyles = cva(styles.zone);

interface DropZoneProps extends AriaDropZoneProps {
	ref?: Ref<HTMLDivElement>;
}

const DropZoneContext = createContext<ContextValue<DropZoneProps, HTMLDivElement>>(null);

/**
 * A drop zone is an area into which one or multiple objects can be dragged and dropped.
 *
 * https://react-spectrum.adobe.com/react-aria/DropZone.html
 */
const DropZone = ({ ref, ...props }: DropZoneProps) => {
	[props, ref] = useLPContextProps(props, ref, DropZoneContext);
	return (
		<AriaDropZone
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				dropZoneStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export { DropZone, DropZoneContext, dropZoneStyles };
export type { DropZoneProps };
