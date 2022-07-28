import type { CopyToClipboardHandleRef } from '../src/CopyToClipboard';
import type { ComponentStoryObj, StoryFn } from '@storybook/react';

import { Button, ButtonType } from '@launchpad-ui/button';
import { Add, IconSize } from '@launchpad-ui/icons';
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
    (StoryFn: StoryFn) => (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StoryFn />
      </div>
    ),
  ],
};

type Story = ComponentStoryObj<typeof CopyToClipboard>;

export const Default: Story = {
  args: { text: 'Code content', children: <code>Code content</code> },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await sleep(500);
    await userEvent.click(canvas.getByRole('button'));
  },
};

export const ExampleWithSlottedChild: Story = {
  args: {
    text: 'Code content',
    asChild: true,
    children: <Button icon={<Add size={IconSize.MEDIUM} />} type={ButtonType.ICON} />,
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

export const ImperativeHandleWrapper: Story = {
  render: () => {
    return <WithImperativeHandleWrapper />;
  },
};
