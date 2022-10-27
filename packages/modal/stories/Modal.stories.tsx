/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { Check, ClickMetric } from '@launchpad-ui/icons';
import { useState } from '@storybook/client-api';
import { userEvent, within } from '@storybook/testing-library';

import { sleep, REACT_NODE_TYPE_DOCS } from '../../../.storybook/utils';
import { Modal } from '../src';

export default {
  component: Modal,
  title: 'Components/Modal',
  description: 'Modals presents users information and actions over a page.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__MODAL,
    },
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    size: {
      description: 'A configurable width variant.',
      options: ['small', 'normal', 'auto'],
      control: { type: 'radio', description: 'lkfjdslkfds' },
    },
    title: {
      type: { required: true },
      description:
        'Use the heading to state what the purpose of the modal. Start with a verb and use only 2-4 words.',
      control: 'text',
      table: {
        type: REACT_NODE_TYPE_DOCS,
      },
    },
    status: {
      description:
        'Currently, we only have a "warning" status, which should only be used when the modal is destructive.',
      options: ['warning', undefined],
      control: { type: 'radio' },
    },
    description: {
      description:
        'Add a description if it brings clarity to why we are presenting this modal to users.',
      control: 'text',
      table: {
        type: REACT_NODE_TYPE_DOCS,
      },
    },
    hasRequiredField: {
      description: 'Used when the modal contains a form with required field(s).',
      control: 'boolean',
    },
    children: {
      type: { required: true },
      description: 'A slot for adding body components.',
      control: 'text',
      table: {
        type: REACT_NODE_TYPE_DOCS,
      },
    },
    primaryButton: {
      description: 'A slot for adding the main button to the footer.',
      control: 'text',
      table: {
        type: REACT_NODE_TYPE_DOCS,
      },
    },
    secondaryButton: {
      description:
        "A slot for adding the secondary button to the footer. NOTE: While these docs only allow you to pass a string that is rendered into a button's text, you can pass this prop any ReactNode.",
      control: 'text',
      table: {
        type: REACT_NODE_TYPE_DOCS,
      },
    },
    withCloseButton: {
      description: 'When false, hides the close button in the upper right corner.',
      control: 'boolean',
    },
    cancelWithOverlayClick: {
      description: 'When false, disables ability to cancel when clicking overlay.',
      control: 'boolean',
    },
    onReady: {
      table: {
        disable: true,
      },
    },
    onCancel: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    'data-test-id': {
      table: {
        disable: true,
      },
    },
  },
  args: {
    size: 'normal',
    title: 'Heading',
    description: 'Description',
    children: 'Body text',
    primaryButton: 'Okay',
    secondaryButton: 'Cancel',
  },
};

type Story = StoryObj<
  typeof Modal & {
    title: string;
    primaryButton: string;
    secondaryButton: string;
    children: string;
  }
>;

const play = async ({
  canvasElement,
  viewMode,
}: {
  canvasElement: HTMLElement;
  viewMode: 'story' | 'docs';
}) => {
  if (viewMode !== 'docs') {
    const canvas = within(canvasElement);
    await sleep(500);
    await userEvent.click(canvas.getByRole('button'));
  }
};

export const Default: Story = {
  render: ({ primaryButton, secondaryButton, children, ...rest }) => {
    const [show, setShow] = useState(false);
    const button = <Button onClick={() => setShow(true)}>Open modal</Button>;
    return show ? (
      <div style={{ width: '100vw', height: '100vh' }}>
        {button}
        <Modal
          {...rest}
          onCancel={() => setShow(!show)}
          primaryButton={
            <Button kind="primary" onClick={() => setShow(false)}>
              {primaryButton}
            </Button>
          }
          secondaryButton={<Button onClick={() => setShow(false)}>{secondaryButton}</Button>}
        >
          {children}
        </Modal>
      </div>
    ) : (
      button
    );
  },
  play,
  parameters: { docs: { disable: false } },
};
// Default.parameters = { docs: { disable: false } };

export const Destructive: Story = {
  render: () => {
    return (
      <Modal
        status="warning"
        title="Unsaved changes"
        size="small"
        primaryButton={<Button kind="destructive">Leave page</Button>}
        secondaryButton={<Button>Cancel</Button>}
      >
        <p>If you leave this page, any unsaved changes will be lost.</p>
      </Modal>
    );
  },
  parameters: { docs: { disable: true } },
};

export const Small: Story = {
  render: () => {
    return (
      <Modal
        title="Heading"
        size="small"
        primaryButton={<Button kind="primary">Okay</Button>}
        secondaryButton={<Button>Cancel</Button>}
      >
        <p>Body text</p>
      </Modal>
    );
  },
  parameters: { docs: { disable: true } },
};

export const SizeAuto: Story = {
  render: () => {
    return (
      <Modal
        title="Heading"
        size="auto"
        primaryButton={<Button kind="primary">Okay</Button>}
        secondaryButton={<Button>Cancel</Button>}
      >
        <p>Body text</p>
      </Modal>
    );
  },
  parameters: { docs: { disable: true } },
};

export const KitchenSink: Story = {
  render: () => {
    return (
      <Modal
        title={
          <>
            Heading <ClickMetric size="small" />
          </>
        }
        hasRequiredField
        status="warning"
        description={
          <>
            <i>This is a</i> <code>ReactNode</code> <strong>description</strong>
          </>
        }
        size="normal"
        primaryButton={
          <Button icon={<Check />} kind="primary">
            Okay
          </Button>
        }
        secondaryButton={<Button>Cancel</Button>}
      >
        <h3>More information</h3>
        <p>Lorem ipsum</p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ul>
      </Modal>
    );
  },
  parameters: { docs: { disable: true } },
};
