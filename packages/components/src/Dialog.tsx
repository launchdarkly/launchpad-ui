import type { Ref } from 'react';
import type {
	DialogProps as AriaDialogProps,
	ContextValue,
	DialogTriggerProps,
} from 'react-aria-components';

import { useSlotId } from '@react-aria/utils';
import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	Dialog as AriaDialog,
	DialogTrigger,
	Provider,
	TextContext,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Dialog.module.css';
import { useLPContextProps } from './utils';

const dialog = cva(styles.dialog);

interface DialogProps extends AriaDialogProps {
	ref?: Ref<HTMLElement>;
}

const DialogContext = createContext<ContextValue<DialogProps, HTMLElement>>(null);

/**
 * A dialog is an overlay shown above other content in an application.
 *
 * https://react-spectrum.adobe.com/react-aria/Dialog.html
 */
const Dialog = ({ ref, ...props }: DialogProps) => {
	[props, ref] = useLPContextProps(props, ref, DialogContext);
	const { className } = props;
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

export { Dialog, DialogContext, DialogTrigger };
export type { DialogProps, DialogTriggerProps };
