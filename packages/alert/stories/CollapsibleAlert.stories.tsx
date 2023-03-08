import type { StoryObj } from '@storybook/react';

import { CollapsibleAlert } from '../src';

export default {
  component: CollapsibleAlert,
  title: 'Components/CollapsibleAlert',
  description: 'Actions trigger alerts based on user interaction.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__ALERT,
    },
  },
  argTypes: {
    kind: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
    message: {
      table: {
        category: 'Content',
      },
    },
  },
};

type Story = StoryObj<typeof CollapsibleAlert>;

export const Collapsible: Story = {
  args: {
    kind: 'info',
    message: (
      <>
        This flag is a prerequisite of <strong>2</strong> other flags in <strong>Production</strong>
        .
      </>
    ),
    children: (
      <>
        <div>
          <p>
            <strong>Changes to targeting may impact the variations served by these flags:</strong>
          </p>
          <ul>
            <li>Enable UI Datadog Application Logs Collection</li>
            <li>Enable Web App Data Dog Rum Application Metrics</li>
          </ul>
        </div>
      </>
    ),
  },
};
