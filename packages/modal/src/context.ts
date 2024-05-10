import type { ModalProps } from './Modal';

import { createContext, useContext } from 'react';

type ModalContextState = {
	onCancel: ModalProps['onCancel'];
	status: ModalProps['status'];
};

const ModalContext = createContext<ModalContextState>({
	onCancel: undefined,
	status: undefined,
});

const useModalContext = () => {
	const context = useContext(ModalContext);

	if (context === undefined) {
		throw new Error('useModalContext must be used within a ModalContext provider');
	}

	return context;
};

export { ModalContext, useModalContext };
export type { ModalContextState };
