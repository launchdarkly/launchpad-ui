import type { CSSProperties, InputHTMLAttributes } from 'react';
type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    labelClassName?: string;
    labelStyle?: CSSProperties;
    'data-test-id'?: string;
};
declare const Radio: ({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, checked, children, className, disabled, id, labelClassName, labelStyle, "data-test-id": testId, ...rest }: RadioProps) => JSX.Element;
export { Radio };
export type { RadioProps };
//# sourceMappingURL=Radio.d.ts.map