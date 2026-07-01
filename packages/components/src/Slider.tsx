import type { Ref } from 'react';
import type {
	SliderFillProps as AriaSliderFillProps,
	SliderOutputProps as AriaSliderOutputProps,
	SliderProps as AriaSliderProps,
	SliderThumbProps as AriaSliderThumbProps,
	SliderTrackProps as AriaSliderTrackProps,
} from 'react-aria-components/Slider';
import type { ContextValue } from 'react-aria-components/slots';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import {
	Slider as AriaSlider,
	SliderFill as AriaSliderFill,
	SliderOutput as AriaSliderOutput,
	SliderThumb as AriaSliderThumb,
	SliderTrack as AriaSliderTrack,
} from 'react-aria-components/Slider';

import styles from './styles/Slider.module.css';
import { useLPContextProps } from './utils';

const sliderStyles = cva(styles.slider);
const sliderTrackStyles = cva(styles.track);
const sliderThumbStyles = cva(styles.thumb);
const sliderFillStyles = cva(styles.fill);
const sliderOutputStyles = cva(styles.output);

interface SliderProps<T extends number | number[] = number | number[]> extends AriaSliderProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface SliderTrackProps extends AriaSliderTrackProps {
	ref?: Ref<HTMLDivElement>;
}

interface SliderThumbProps extends AriaSliderThumbProps {
	ref?: Ref<HTMLDivElement>;
}

interface SliderFillProps extends AriaSliderFillProps {
	ref?: Ref<HTMLDivElement>;
}

interface SliderOutputProps extends AriaSliderOutputProps {
	ref?: Ref<HTMLOutputElement>;
}

const SliderContext =
	createContext<ContextValue<SliderProps<number | number[]>, HTMLDivElement>>(null);

/**
 * A slider allows a user to select one or more values within a range.
 *
 * Compose with `SliderTrack`, `SliderThumb`, `SliderFill`, `SliderOutput`, and `Label`.
 *
 * https://react-spectrum.adobe.com/react-aria/Slider.html
 */
const Slider = <T extends number | number[]>({ ref, ...props }: SliderProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, SliderContext);
	return (
		<AriaSlider
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				sliderStyles({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A slider track is a container for one or more slider thumbs and the slider fill.
 *
 * https://react-spectrum.adobe.com/react-aria/Slider.html
 */
const SliderTrack = ({ ref, ...props }: SliderTrackProps) => {
	return (
		<AriaSliderTrack
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				sliderTrackStyles({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A slider thumb represents an individual value that the user can adjust within a slider track.
 *
 * https://react-spectrum.adobe.com/react-aria/Slider.html
 */
const SliderThumb = ({ ref, ...props }: SliderThumbProps) => {
	return (
		<AriaSliderThumb
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				sliderThumbStyles({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A slider fill displays the selected range of a slider.
 *
 * https://react-spectrum.adobe.com/react-aria/Slider.html
 */
const SliderFill = ({ ref, ...props }: SliderFillProps) => {
	return (
		<AriaSliderFill
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				sliderFillStyles({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A slider output displays the current value of a slider as text.
 *
 * https://react-spectrum.adobe.com/react-aria/Slider.html
 */
const SliderOutput = ({ ref, ...props }: SliderOutputProps) => {
	return (
		<AriaSliderOutput
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				sliderOutputStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export {
	Slider,
	SliderContext,
	SliderFill,
	SliderOutput,
	SliderThumb,
	SliderTrack,
	sliderFillStyles,
	sliderOutputStyles,
	sliderStyles,
	sliderThumbStyles,
	sliderTrackStyles,
};
export type { SliderFillProps, SliderOutputProps, SliderProps, SliderThumbProps, SliderTrackProps };
