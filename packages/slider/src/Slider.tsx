import type { SyntheticEvent } from 'react';

import { cx } from 'classix';

import './styles/Slider.css';

type SliderProps = {
  value: number;
  onChange(x?: number): void;
  min?: number;
  max?: number;
  step?: number;
  readOnly?: boolean;
  className?: string;
  disabled?: boolean;
  hideTrack?: boolean;
  id?: string;
  'data-test-id'?: string;
};

const Slider = ({
  value,
  min,
  max,
  step,
  readOnly,
  hideTrack,
  className,
  disabled,
  onChange,
  id,
  'data-test-id': testId = 'slider',
}: SliderProps) => {
  const valueHandler =
    (callback: (value: number) => void) => (event: SyntheticEvent<HTMLInputElement>) =>
      callback(parseFloat(event.currentTarget.value));

  return (
    <div
      className={cx('Slider', (disabled || readOnly) && 'Slider--disabled', className)}
      data-test-id={testId}
    >
      {!hideTrack && <div className="Slider-track" />}
      {!hideTrack && <div className="Slider-fill" style={{ width: `${value}%` }} />}
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        readOnly={readOnly}
        disabled={disabled || readOnly}
        id={id}
        onChange={valueHandler(onChange)}
      />
    </div>
  );
};

export { Slider };
export type { SliderProps };
