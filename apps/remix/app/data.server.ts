export type Component = { name: string; to: string };

export async function getComponents() {
  return [
    // plop start components
    { to: 'components/alert', name: 'Alert' },
    { to: 'components/avatar', name: 'Avatar' },
    { to: 'components/banner', name: 'Banner' },
    { to: 'components/button', name: 'Button' },
    { to: 'components/clipboard', name: 'CopyToClipboard' },
    { to: 'components/counter', name: 'Counter' },
    { to: 'components/dropdown', name: 'Dropdown' },
    { to: 'components/form', name: 'Form' },
    { to: 'components/icon', name: 'Icon' },
    { to: 'components/lozenge', name: 'Lozenge' },
    { to: 'components/menu', name: 'Menu' },
    { to: 'components/modal', name: 'Modal' },
    { to: 'components/navigation', name: 'Navigation' },
    { to: 'components/notification', name: 'Notification' },
    { to: 'components/popover', name: 'Popover' },
    { to: 'components/progress', name: 'Progress' },
    { to: 'components/progress-bubbles', name: 'ProgressBubbles' },
    { to: 'components/tab-list', name: 'TabList' },
    { to: 'components/toggle', name: 'Toggle' },
    { to: 'components/tooltip', name: 'Tooltip' },
    // plop end components
  ];
}
