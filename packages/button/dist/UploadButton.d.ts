/// <reference types="react" />
import type { ButtonProps } from './Button';
type UploadButtonProps = Omit<ButtonProps, 'onSelect'> & {
    onSelect(file?: File | null): void;
    maxSize: number;
    accept?: string;
    id: string;
};
declare const UploadButton: ({ id, className, children, disabled, accept, maxSize, onSelect, "data-test-id": testId, ...rest }: UploadButtonProps) => JSX.Element;
export { UploadButton };
export type { UploadButtonProps };
//# sourceMappingURL=UploadButton.d.ts.map