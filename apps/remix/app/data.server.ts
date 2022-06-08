export type Component = { name: string; to: string };

export async function getComponents() {
  return [
    {
      to: 'components/alert',
      name: 'Alert',
    },
    {
      to: 'components/banner',
      name: 'Banner',
    },
    {
      to: 'components/button',
      name: 'Button',
    },
    {
      to: 'components/clipboard',
      name: 'CopyToClipboard',
    },
    {
      to: 'components/icon',
      name: 'Icon',
    },
    {
      to: 'components/lozenge',
      name: 'Lozenge',
    },
    {
      to: 'components/menu',
      name: 'Menu',
    },
    {
      to: 'components/modal',
      name: 'Modal',
    },
    {
      to: 'components/notification',
      name: 'Notification',
    },
    {
      to: 'components/popover',
      name: 'Popover',
    },
    {
      to: 'components/progress',
      name: 'Progress',
    },
    {
      to: 'components/tab-list',
      name: 'TabList',
    },
    {
      to: 'components/toggle',
      name: 'Toggle',
    },
    {
      to: 'components/tooltip',
      name: 'Tooltip',
    },
  ];
}
