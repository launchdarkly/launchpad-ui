import cx from 'clsx';

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
}: SliderProps) => {
  const valueHandler =
    (callback: (value: number) => void) => (event: React.SyntheticEvent<HTMLInputElement>) =>
      callback(parseFloat(event.currentTarget.value));

  return (
    <div className={cx('Slider', { 'Slider--disabled': disabled || readOnly }, className)}>
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
