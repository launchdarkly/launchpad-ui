import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { DropZoneProps as AriaDropZoneProps } from 'react-aria-components/DropZone';
import { DropZone as AriaDropZone } from 'react-aria-components/DropZone';
import type { ContextValue } from 'react-aria-components/slots';
import { cva } from 'class-variance-authority';

import { useLPContextProps } from './utils';

import styles from './styles/DropZone.module.css';

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
	// oxlint-disable-next-line no-param-reassign -- sanctioned useLPContextProps merge pattern (see AGENTS.md context+prop-merging convention)
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
