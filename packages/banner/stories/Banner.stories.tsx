import type { ComponentStoryObj } from '@storybook/react';

import { Banner } from '../src';

export default {
  component: Banner,
  title: 'Components/Banner',
  description: 'Banners contain a system-wide message or status.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__BANNER,
    },
  },
  argTypes: {
    testId: {
      control: 'text',
      table: {
        category: 'Testing',
        subcategory: 'Data attributes',
      },
    },
    className: {
      table: {
        category: 'Presentation',
      },
    },
    dismissible: {
      control: 'boolean',
      table: {
        category: 'Presentation',
      },
    },
    kind: {
      table: {
        category: 'Presentation',
      },
    },
    onDismiss: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
  },
};

type Story = ComponentStoryObj<typeof Banner>;

export const Error: Story = {
  args: { children: 'Error banner with icon', dismissible: true, kind: 'error' },
};

export const Warning: Story = {
  args: { children: 'Warning banner with icon', dismissible: true, kind: 'warning' },
};

export const Info: Story = {
  args: { children: 'Info banner with icon', dismissible: true, kind: 'info' },
};

export const WithStackedBanners: Story = {
  render: () => {
    return (
      <>
        <Banner kind="error">This is an example of Banners that are stacked</Banner>
        <Banner kind="error">This is an example of Banners that are stacked</Banner>
      </>
    );
  },
};

export const WithHeader: Story = {
  args: {
    header: 'Banner header',
    children: 'This is an example of a banner with a header',
    dismissible: true,
    kind: 'error',
  },
};
