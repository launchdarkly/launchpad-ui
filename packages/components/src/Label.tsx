import type { Ref } from 'react';
import type { LabelProps as AriaLabelProps, ContextValue } from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import { Label as AriaLabel } from 'react-aria-components';

import styles from './styles/Label.module.css';
import { useLPContextProps } from './utils';

const labelStyles = cva(styles.label);

interface LabelProps extends AriaLabelProps {
	ref?: Ref<HTMLLabelElement>;
}

const LabelContext = createContext<ContextValue<LabelProps, HTMLLabelElement>>(null);

const Label = ({ ref, ...props }: LabelProps) => {
	[props, ref] = useLPContextProps(props, ref, LabelContext);
	const { className } = props;

	return <AriaLabel {...props} ref={ref} className={cx(labelStyles({ className }))} />;
};

export { Label, LabelContext, labelStyles };
export type { LabelProps };
