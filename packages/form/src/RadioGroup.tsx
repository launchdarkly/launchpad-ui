import type { ChangeEvent, FormEvent, ReactElement, ReactNode } from 'react';

import { VisuallyHidden } from '@react-aria/visually-hidden';
import { Children, cloneElement, isValidElement, useRef } from 'react';

import { Label } from './Label';
import { Radio } from './Radio';

type RadioGroupProps = {
	/**
	 * The legend that describes this groups of radio buttons. The legend
	 * is important for screen reader users.
	 */
	legend?: string;
	/**
	 * The children passed into the RadioGroup.
	 */
	children?: ReactNode;
	/**
	 * Custom classname(s) passed to the fieldset inner div.
	 */
	className?: string;
	/**
	 * Set the underlying Radio to disabled if the Radio's disabled prop is undefined.
	 */
	disabled?: boolean;
	/**
	 * The RadioGroup's id.
	 */
	id?: string;
	/**
	 * Name to apply to the underlying Radio. The same name value is passed to each Radio when grouping in a RadioGroup for screen reader support.
	 */
	name: string;
	/**
	 * This function is passed into each Radio onChange synthetic event handler.
	 */
	onChange?(e: ChangeEvent | FormEvent<HTMLInputElement>): void;
	/**
	 * The value to compare against the Radio's value to determine if the Radio will be checked.
	 */
	value: string;

	'data-test-id'?: string;
};

/**
 * @deprecated use `RadioGroup` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-radiogroup--docs
 */
const RadioGroup = (props: RadioGroupProps) => {
	const {
		name,
		value,
		onChange,
		children,
		disabled,
		legend,
		'data-test-id': testId = 'radio-group',
		...rest
	} = props;
	const fieldsetRef = useRef<HTMLFieldSetElement>(null);

	function updateRadioElems(elem: ReactNode): ReactNode {
		if (!isValidElement(elem)) {
			return elem;
		}

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const item = elem as ReactElement<any>;

		if (item?.type && item.type === Radio) {
			return cloneElement(item, {
				...item.props,
				name,
				checked: item.props.value === value,
				onChange,
				disabled: typeof item.props?.disabled !== 'undefined' ? item.props.disabled : disabled,
			});
		}

		if (item?.type && item.type === Label) {
			return cloneElement(item, {
				...item.props,
				onChange,
				disabled,
			});
		}

		const elemChildren = item?.props?.children;
		if (elemChildren) {
			if (Array.isArray(elemChildren)) {
				return cloneElement(item, {
					children: Children.map(elemChildren, (elemChild) => updateRadioElems(elemChild)),
				});
			}
			return cloneElement(item, {
				children: updateRadioElems(elemChildren),
			});
		}

		if (item?.type && item.type !== Radio && item.type !== Label) {
			return item;
		}

		return null;
	}

	const radios = Children.map(children, (child) => updateRadioElems(child));
	return (
		<fieldset data-test-id={testId} ref={fieldsetRef}>
			{legend && (
				<legend>
					<VisuallyHidden>{legend}</VisuallyHidden>
				</legend>
			)}
			<div {...rest}>{radios}</div>
		</fieldset>
	);
};

export { RadioGroup };
export type { RadioGroupProps };
