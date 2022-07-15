import type { CopyToClipboardHandleRef } from '../src/CopyToClipboard';
import type { ComponentStoryObj, Story } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { useRef } from 'react';

import { sleep } from '../../../.storybook/utils';
import { CopyToClipboard } from '../src';

import './CopyToClipboard.stories.css';

export default {
  component: CopyToClipboard,
  title: 'Components/CopyToClipboard',
  description: 'Clipboards copy text to the clipboard.',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__CLIPBOARD,
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
    (Story: Story) => (
      <div
        style={{
          width: '100vw',
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

type StoryType = ComponentStoryObj<typeof CopyToClipboard>;

export const Default: StoryType = {
  args: { text: 'Code content', children: <code>Code content</code> },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await sleep(500);
    await userEvent.click(canvas.getByRole('button'));
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
        <code>Click the text above</code>
      </CopyToClipboard>
    </div>
  );
};

export const ImperativeHandleWrapper: StoryType = {
  render: () => {
    return <WithImperativeHandleWrapper />;
  },
};
