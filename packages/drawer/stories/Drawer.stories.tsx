/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { Tooltip } from '@launchpad-ui/tooltip';
import { useState } from '@storybook/client-api';

import { Drawer, DrawerHeader } from '../src';

export default {
  component: Drawer,
  subcomponents: { DrawerHeader },
  title: 'Components/Drawer',
  description: 'A partial overlay that appears from the right side of the screen.',
  parameters: {
    docs: {
      page: null,
    },
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__DRAWER,
    },
  },
};

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    const button = <Button onClick={() => setShow(true)}>Open drawer</Button>;
    return show ? (
      <>
        {button}
        <Drawer onCancel={() => setShow(!show)}>
          <section>
            <DrawerHeader>Example drawer title</DrawerHeader>
          </section>
          <section>
            <p>This is example drawer content.</p>
          </section>
        </Drawer>
      </>
    ) : (
      button
    );
  },
};
Default.parameters = {
  docs: { disable: true },
  a11y: {
    options: {
      rules: {
        // @fixme
        'duplicate-id-aria': { enabled: false },
      },
    },
  },
};

export const ForcedDarkTheme: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    const button = <Button onClick={() => setShow(true)}>Open drawer</Button>;

    return show ? (
      <>
        {button}
        <Drawer theme="dark" onCancel={() => setShow(!show)}>
          <section>
            <DrawerHeader>Example drawer title</DrawerHeader>
          </section>
          <section>
            <p>This is example drawer content.</p>
          </section>
        </Drawer>
      </>
    ) : (
      button
    );
  },
  parameters: {
    docs: { disable: true },
    a11y: {
      options: {
        rules: {
          // @fixme
          'duplicate-id-aria': { enabled: false },
        },
      },
    },
  },
};

export const WithTooltip: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    const button = <Button onClick={() => setShow(true)}>Open drawer</Button>;
    return show ? (
      <>
        {button}
        <Drawer onCancel={() => setShow(!show)}>
          <section>
            <DrawerHeader>Example drawer title</DrawerHeader>
          </section>
          <section>
            <Tooltip content="If you hit the escape key hovering over this tooltip, it should dismiss the tooltip but not the drawer.">
              <button>Hover over me or focus on me!</button>
            </Tooltip>
          </section>
        </Drawer>
      </>
    ) : (
      button
    );
  },
  parameters: {
    docs: { disable: true },
    a11y: {
      options: {
        rules: {
          // @fixme
          'duplicate-id-aria': { enabled: false },
        },
      },
    },
  },
};
