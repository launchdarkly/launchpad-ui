import type {
	AriaLabelingProps,
	FocusableDOMProps,
	FocusableProps,
	InputBase,
} from '@react-types/shared';

import { FocusRing } from '@react-aria/focus';
import { useSwitch } from '@react-aria/switch';
import { useToggleState } from '@react-stately/toggle';
import { cx } from 'classix';
import { useId, useRef } from 'react';

import styles from './styles/Toggle.module.css';

type ToggleProps = InputBase &
	FocusableProps &
	FocusableDOMProps &
	AriaLabelingProps & {
		/**
		 * Whether the Switch should be selected (uncontrolled).
		 */
		defaultSelected?: boolean;
		/**
		 * Whether the Switch should be selected (controlled).
		 */
		isSelected?: boolean;
		/**
		 * Handler that is called when the Switch's selection state changes.
		 */
		onChange?: (isSelected: boolean) => void;
		/**
		 * The value of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).
		 */
		value?: string;
		/**
		 * The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
		 */
		name?: string;

		'data-test-id'?: string;

		className?: string;
	};

/**
 * The react-aria library requires us to leverage useToggleState and useRef
 * to pass into the useSwitch hook. The props are deconstructed in the body of the
 * function rather than in the parameters.
 * The VisuallyHidden component from the react-aria library adds some extra
 * goodness (the useFocus hook is leveraged).
 */

/**
 * @deprecated use `Switch` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-switch--docs
 */
const Toggle = (props: ToggleProps) => {
	const { className, isDisabled = false, autoFocus, 'data-test-id': testId = 'toggle' } = props;

	const id = useId();
	const state = useToggleState(props);
	const inputRef = useRef<HTMLInputElement>(null);

	// don't use `checked` prop, instead use `defaultChecked`
	// https://stackoverflow.com/questions/26615779/react-checkbox-not-sending-onchange
	const {
		inputProps: { checked: _checked, ...inputProps },
	} = useSwitch({ ...props, id }, state, inputRef);

	const classes = cx(
		styles.Toggle,
		className,
		state.isSelected && styles['Toggle--on'],
		isDisabled && styles['Toggle--disabled'],
	);

	return (
		<label className={classes} data-test-id="toggle-label">
			<FocusRing autoFocus={autoFocus}>
				<input
					{...inputProps}
					data-test-id={testId}
					className={styles['Toggle-input']}
					ref={inputRef}
					defaultChecked={_checked}
				/>
			</FocusRing>
			<div className={styles['Toggle-wrapper']}>
				<div className={styles['Toggle-labels']} aria-hidden>
					<div className={cx(styles['Toggle-label'], styles['Toggle-on'])}>On</div>
					<div className={cx(styles['Toggle-label'], styles['Toggle-off'])}>Off</div>
				</div>
				<div className={styles['Toggle-pin']} />
			</div>
		</label>
	);
};

export { Toggle };
export type { ToggleProps };
