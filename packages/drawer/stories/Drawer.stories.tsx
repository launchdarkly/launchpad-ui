/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
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
      type: import.meta.env.PACKAGE_STATUS__DRAWER,
    },
  },
};

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    const button = <Button onClick={() => setShow(true)}>Open drawer</Button>;
    return show ? (
      <div style={{ width: '100vw', height: '100vh' }}>
        {button}
        <Drawer onCancel={() => setShow(!show)}>
          <section>
            <DrawerHeader>Example drawer title</DrawerHeader>
          </section>
          <section>
            <p>This is example drawer content.</p>
          </section>
        </Drawer>
      </div>
    ) : (
      button
    );
  },
};
Default.parameters = { docs: { disable: true } };
