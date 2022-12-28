import type { AlertProps } from './Alert';
import type { HTMLAttributes } from 'react';
type CollapsibleAlertProps = HTMLAttributes<HTMLElement> & {
    /**
     * Passing in one of `info`, `success`, `warning`, `error`, `striped`
     * displays the style and icon pair associated with the variant.
     * The default is info.
     */
    kind?: AlertProps['kind'];
    /**
     * The message to pass into the Alert.
     */
    message: string | JSX.Element;
    'data-test-id'?: string;
};
declare const CollapsibleAlert: ({ children, className, kind, message, "data-test-id": testId, ...rest }: CollapsibleAlertProps) => JSX.Element;
export { CollapsibleAlert };
export type { CollapsibleAlertProps };
//# sourceMappingURL=CollapsibleAlert.d.ts.map