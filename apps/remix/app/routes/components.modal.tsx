import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from '@launchpad-ui/core';
import { useState } from 'react';

export default function Index() {
	const [show, setShow] = useState(true);
	const button = <Button onClick={() => setShow(true)}>Open modal</Button>;
	return show ? (
		<>
			{button}
			<Modal onCancel={() => setShow(!show)}>
				<ModalHeader title='Title' />
				<ModalBody>
					<p>Body text</p>
				</ModalBody>
				<ModalFooter primaryButton={<Button onClick={() => setShow(false)}>Cancel</Button>} />
			</Modal>
		</>
	) : (
		button
	);
}
