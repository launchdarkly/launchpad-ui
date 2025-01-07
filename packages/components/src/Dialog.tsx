import type { RefObject } from 'react';
import type { DialogProps as AriaDialogProps, DialogTriggerProps } from 'react-aria-components';

import { useSlotId } from '@react-aria/utils';
import { cva } from 'class-variance-authority';
import {
	Dialog as AriaDialog,
	DialogTrigger,
	Provider,
	TextContext,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Dialog.module.css';

const dialog = cva(styles.dialog);

interface DialogProps extends AriaDialogProps {
	ref?: RefObject<HTMLElement | null>;
}

/**
 * A dialog is an overlay shown above other content in an application.
 *
 * https://react-spectrum.adobe.com/react-aria/Dialog.html
 */
const Dialog = ({ className, ref, ...props }: DialogProps) => {
	const descriptionId = useSlotId();
	return (
		<AriaDialog
			{...props}
			ref={ref}
			className={dialog({ className })}
			aria-describedby={props['aria-describedby'] || descriptionId}
		>
			{composeRenderProps(props.children, (children) => (
				<Provider
					values={[
						[
							TextContext,
							{
								slots: {
									subtitle: { id: descriptionId, elementType: 'h3' },
								},
							},
						],
					]}
				>
					{children}
				</Provider>
			))}
		</AriaDialog>
	);
};

export { Dialog, DialogTrigger };
export type { DialogProps, DialogTriggerProps };
