import type { ComponentStoryObj } from '@storybook/react';

import { UploadButton } from '../src';

export default {
  component: UploadButton,
  title: 'Components/Button/UploadButton',
  description: 'UploadButtons trigger a native file upload experience.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__BUTTON,
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
    onSelect: (file) => {
      alert(file?.name);
    },
    id: 'upload-button',
    children: 'Select file',
  },
};
