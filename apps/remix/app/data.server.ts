export type Component = { name: string; to: string };

export async function getComponents() {
  return [
    // plop start components
    { to: 'components/alert', name: 'Alert' },
    { to: 'components/avatar', name: 'Avatar' },
    { to: 'components/banner', name: 'Banner' },
    { to: 'components/button', name: 'Button' },
    { to: 'components/chip', name: 'Chip' },
    { to: 'components/clipboard', name: 'CopyToClipboard' },
    { to: 'components/counter', name: 'Counter' },
    { to: 'components/drawer', name: 'Drawer' },
    { to: 'components/dropdown', name: 'Dropdown' },
    { to: 'components/filter', name: 'Filter' },
    { to: 'components/form', name: 'Form' },
    { to: 'components/icon', name: 'Icon' },
    { to: 'components/icon-button', name: 'IconButton' },
    { to: 'components/markdown', name: 'Markdown' },
    { to: 'components/menu', name: 'Menu' },
    { to: 'components/modal', name: 'Modal' },
    { to: 'components/pagination', name: 'Pagination' },
    { to: 'components/popover', name: 'Popover' },
    { to: 'components/progress', name: 'Progress' },
    { to: 'components/progress-bubbles', name: 'ProgressBubbles' },
    { to: 'components/slider', name: 'Slider' },
    { to: 'components/snackbar', name: 'Snackbar' },
    { to: 'components/split-button', name: 'SplitButton' },
    { to: 'components/tab-list', name: 'TabList' },
    { to: 'components/table', name: 'Table' },
    { to: 'components/tag', name: 'Tag' },
    { to: 'components/toast', name: 'Toast' },
    { to: 'components/toggle', name: 'Toggle' },
    { to: 'components/tooltip', name: 'Tooltip' },
    // plop end components
  ];
}
