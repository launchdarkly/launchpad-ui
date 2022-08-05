import type { ComponentStoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';

import { sleep } from '../../../.storybook/utils';
import { UploadButton } from '../src';

export default {
  component: UploadButton,
  title: 'Components/Button/UploadButton',
  description: 'UploadButtons trigger a native file upload experience.',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__BUTTON,
    },
  },
  argTypes: {
    maxSize: {
      table: {
        category: 'Data attributes',
      },
    },
    accept: {
      table: {
        category: 'Data attributes',
      },
    },
    disabled: {
      table: {
        category: 'Data attributes',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
    onSelect: {
      table: {
        category: 'Functions',
      },
    },
  },
};

type Story = ComponentStoryObj<typeof UploadButton>;

export const Default: Story = {
  args: {
    children: [
      <Button key="1">Target</Button>,
      <div key="2" style={{ padding: '2rem' }}>
        Content to show
      </div>,
    ],
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await sleep(500);
    await userEvent.click(canvas.getByRole('button'));
  },
};
