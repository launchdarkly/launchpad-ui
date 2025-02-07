import type { Ref } from 'react';
import type { RadioProps as AriaRadioProps, RadioRenderProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { Radio as AriaRadio, composeRenderProps } from 'react-aria-components';

import styles from './styles/Radio.module.css';

const radio = cva(styles.radio);
const circle = cva(styles.circle);

interface RadioProps extends AriaRadioProps {
	ref?: Ref<HTMLLabelElement>;
}

const RadioInner = ({ isSelected }: Partial<RadioRenderProps>) => (
	<div className={circle()}>
		{isSelected ? (
			<svg aria-hidden="true" className={styles.icon} viewBox="0 0 16 16">
				<path
					fillRule="evenodd"
					clipPath="evenodd"
					d="M6.852 5.228a3 3 0 1 1 2.296 5.544 3 3 0 0 1-2.296-5.544Z"
				/>
			</svg>
		) : null}
	</div>
);

/**
 * A radio represents an individual option within a radio group.
 *
 * https://react-spectrum.adobe.com/react-aria/RadioGroup.html
 */
const Radio = ({ ref, ...props }: RadioProps) => {
	return (
		<AriaRadio
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				radio({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isSelected }) => (
				<>
					<RadioInner isSelected={isSelected} />
					{children}
				</>
			))}
		</AriaRadio>
	);
};

export { Radio, RadioInner, radio };
export type { RadioProps };
