import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@launchpad-ui/vars';
import { userEvent, within } from '@storybook/test';

import { Link } from '../src';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'React Aria Components/Link',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Example: Story = {
  args: {
    children: 'Link',
    href: '#',
  },
};

export const States: Story = {
  render: (args) => {
    const styles = { width: 'fit-content' };
    return (
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          gap: vars.spacing[400],
        }}
      >
        <Link style={styles} {...args}>
          Hover
        </Link>
        <Link style={styles} {...args}>
          Focus Visible
        </Link>
        <Link style={styles} isDisabled {...args}>
          Disabled
        </Link>
        <Link style={styles} {...args}>
          Active
        </Link>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const links = canvas.getAllByRole('link');
    await userEvent.hover(links[0]);
    await userEvent.pointer([{ keys: '[TouchA>]', target: links[3] }]);
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
  },
  args: {
    href: '#',
  },
};
