import type { FormHTMLAttributes } from 'react';
type FormProps = FormHTMLAttributes<HTMLFormElement> & {
    inline?: boolean;
    hasIncreasedErrorMargin?: boolean;
    'data-test-id'?: string;
};
declare const Form: (props: FormProps) => JSX.Element;
export { Form };
export type { FormProps };
//# sourceMappingURL=Form.d.ts.map