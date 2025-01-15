import type { RefObject } from 'react';
import type { DropZoneProps as AriaDropZoneProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { DropZone as AriaDropZone } from 'react-aria-components';

import styles from './styles/DropZone.module.css';

const zone = cva(styles.zone);

interface DropZoneProps extends AriaDropZoneProps {
	ref?: RefObject<HTMLDivElement | null>;
}

/**
 * A drop zone is an area into which one or multiple objects can be dragged and dropped.
 *
 * https://react-spectrum.adobe.com/react-aria/DropZone.html
 */
const DropZone = ({ className, ref, ...props }: DropZoneProps) => {
	return <AriaDropZone {...props} ref={ref} className={zone({ className })} />;
};

export { DropZone };
export type { DropZoneProps };
