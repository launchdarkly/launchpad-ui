/// <reference types="react" />
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
declare const Slider: ({ value, min, max, step, readOnly, hideTrack, className, disabled, onChange, id, "data-test-id": testId, }: SliderProps) => JSX.Element;
export { Slider };
export type { SliderProps };
//# sourceMappingURL=Slider.d.ts.map