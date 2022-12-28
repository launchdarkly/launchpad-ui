import type { ChangeEvent, FormEvent, ReactNode } from 'react';
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
declare const RadioGroup: (props: RadioGroupProps) => JSX.Element;
export { RadioGroup };
export type { RadioGroupProps };
//# sourceMappingURL=RadioGroup.d.ts.map