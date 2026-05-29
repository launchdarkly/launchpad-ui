import type { Ref } from 'react';
import type {
	DialogProps as AriaDialogProps,
	DialogTriggerProps,
} from 'react-aria-components/Dialog';
import type { ContextValue } from 'react-aria-components/slots';

import { useSlotId } from '@react-aria/utils';
import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { Dialog as AriaDialog, DialogTrigger } from 'react-aria-components/Dialog';
import { Provider } from 'react-aria-components/slots';
import { TextContext } from 'react-aria-components/Text';

import styles from './styles/Dialog.module.css';
import { useLPContextProps } from './utils';

const dialogStyles = cva(styles.dialog);

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
			className={dialogStyles({ className })}
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

export { Dialog, DialogContext, DialogTrigger, dialogStyles };
export type { DialogProps, DialogTriggerProps };
