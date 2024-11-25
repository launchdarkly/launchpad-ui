import type { ForwardedRef } from 'react';
import type { DropZoneProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { DropZone as AriaDropZone } from 'react-aria-components';

import styles from './styles/DropZone.module.css';

const zone = cva(styles.zone);

const _DropZone = ({ className, ...props }: DropZoneProps, ref: ForwardedRef<HTMLDivElement>) => {
	return <AriaDropZone {...props} ref={ref} className={zone({ className })} />;
};

/**
 * A drop zone is an area into which one or multiple objects can be dragged and dropped.
 *
 * https://react-spectrum.adobe.com/react-aria/DropZone.html
 */
const DropZone = forwardRef(_DropZone);

export { DropZone };
export type { DropZoneProps };
