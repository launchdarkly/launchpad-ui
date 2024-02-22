import type { ChangeEventHandler, KeyboardEvent } from 'react';
import type { ButtonProps } from './Button';

import { useRef } from 'react';

import { Button } from './Button';

type UploadButtonProps = Omit<ButtonProps, 'onSelect'> & {
	onSelect(file?: File | null): void;
	maxSize: number;
	accept?: string;
	id: string;
};

const UploadButton = ({
	id,
	className,
	children,
	disabled,
	accept,
	maxSize,
	onSelect,
	'data-test-id': testId = 'upload-button',
	...rest
}: UploadButtonProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		inputRef.current?.click();
	};

	const handleKeyDown = (event: KeyboardEvent<Element>) => {
		const actionKeys = ['Spacebar', ' ', 'Enter'];

		if (actionKeys.includes(event.key)) {
			event.preventDefault();
			inputRef.current?.click();
		}
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		let file;

		if (event) {
			const e = event;
			file = e.target.files?.[0];
		}

		if (file && file.size > maxSize) {
			return;
		}

		event?.persist();
		onSelect(file);

		if (inputRef.current) {
			inputRef.current.value = '';
		}
	};

	return (
		<span className={className} data-test-id={testId}>
			<input
				ref={inputRef}
				id={id}
				style={{ display: 'none' }}
				type="file"
				onChange={handleChange}
				disabled={disabled}
				accept={accept}
				data-test-id="upload-button-input"
			/>
			<label htmlFor={id}>
				<Button
					{...rest}
					disabled={disabled}
					tabIndex={disabled ? -1 : 0}
					role="button"
					onKeyDown={handleKeyDown}
					onClick={handleClick}
				>
					{children}
				</Button>
			</label>
		</span>
	);
};

export { UploadButton };
export type { UploadButtonProps };
