import type { CopyToClipboardHandleRef } from '../src/CopyToClipboard';
import type { StoryObj, StoryFn } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { useRef } from 'react';

import { CopyToClipboard } from '../src';

export default {
  component: CopyToClipboard,
  title: 'Components/CopyToClipboard',
  description: 'Clipboards copy text to the clipboard.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__CLIPBOARD,
    },
  },
  argTypes: {
    children: {
      table: {
        category: 'Content',
      },
    },
    onClick: {
      table: {
        category: 'Functions',
      },
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <div
        style={{
          height: '100vh',
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof CopyToClipboard>;

export const Default: Story = {
  args: { text: 'Code content', children: 'Copy content' },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    const buttons = canvas.getAllByRole('button');
    userEvent.hover(buttons[0]);
    userEvent.click(buttons[1]);
  },
};

export const Basic: Story = {
  args: { text: 'Code content', children: 'Copy content', kind: 'basic' },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    const buttons = canvas.getAllByRole('button');
    userEvent.hover(buttons[0]);
    userEvent.click(buttons[1]);
  },
};

export const Minimal: Story = {
  args: { text: 'Code content', children: 'Copy content', kind: 'minimal' },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    const buttons = canvas.getAllByRole('button');
    userEvent.hover(buttons[0]);
    userEvent.click(buttons[1]);
  },
};

export const ExampleWithSlottedCodeChild: Story = {
  args: {
    text: 'Code content',
    asChild: true,
    children: <code>Code content</code>,
  },
};

const WithImperativeHandleWrapper = () => {
  const ref = useRef<CopyToClipboardHandleRef>(null);

  const handleClick = () => {
    ref.current?.handleCopy();
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={handleClick}
      style={{ border: '3px solid #efefef', padding: '2rem', maxWidth: '500px' }}
    >
      <h2>Triggering copy imperatively</h2>
      <p>
        This whole container is clickable, even though only the button is wrapped in the{' '}
        <code>CopyToClipboard</code> component. This is useful when you need to handle the copy
        event in a customized way from the parent.
      </p>
      <CopyToClipboard text="Content" ref={ref}>
        Copy content
      </CopyToClipboard>
    </div>
  );
};

export const ImperativeHandleWrapper: Story = {
  render: () => {
    return <WithImperativeHandleWrapper />;
  },
};
