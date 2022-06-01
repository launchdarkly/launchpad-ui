import { ModalBody, ModalFooter, ModalHeader, ModalTransition, Prompt } from '../src';

export default {
  component: ModalTransition,
  title: 'Components/Modal',
  description: 'Modals presents users information and actions over a page.',
};

export const Default = {
  render: () => (
    <Prompt>
      <ModalTransition transition="pop" withCloseButton>
        <ModalHeader>Example modal title</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </ModalTransition>
    </Prompt>
  ),
};
