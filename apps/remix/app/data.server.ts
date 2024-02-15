export type Component = { name: string; to: string };

export async function getComponents() {
  return [
    // plop start components
    { to: 'components/alert', name: 'Alert' },
    { to: 'components/avatar', name: 'Avatar' },
    { to: 'components/banner', name: 'Banner' },
    { to: 'components/box', name: 'Box' },
    { to: 'components/button', name: 'Button' },
    { to: 'components/chip', name: 'Chip' },
    { to: 'components/clipboard', name: 'CopyToClipboard' },
    { to: 'components/columns', name: 'Columns' },
    { to: 'components/counter', name: 'Counter' },
    { to: 'components/data-table', name: 'DataTable' },
    { to: 'components/drawer', name: 'Drawer' },
    { to: 'components/dropdown', name: 'Dropdown' },
    { to: 'components/filter', name: 'Filter' },
    { to: 'components/form', name: 'Form' },
    { to: 'components/icon', name: 'Icon' },
    { to: 'components/icon-button', name: 'IconButton' },
    { to: 'components/inline', name: 'Inline' },
    { to: 'components/inline-edit', name: 'InlineEdit' },
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
    { to: 'components/stack', name: 'Stack' },
    { to: 'components/tab-list', name: 'TabList' },
    { to: 'components/table', name: 'Table' },
    { to: 'components/tag', name: 'TagList' },
    { to: 'components/toast', name: 'Toast' },
    { to: 'components/toggle', name: 'Toggle' },
    { to: 'components/tooltip', name: 'Tooltip' },
    { to: 'rac/button', name: 'RAC Button', role: 'button' },
    { to: 'rac/checkbox', name: 'RAC Checkbox', role: 'checkbox' },
    { to: 'rac/checkbox-group', name: 'RAC Checkbox Group', role: 'group' },
    { to: 'rac/group', name: 'RAC Group', role: 'group' },
    { to: 'rac/link', name: 'RAC Link', role: 'link' },
    { to: 'rac/link-button', name: 'RAC LinkButton', role: 'link' },
    { to: 'rac/list-box', name: 'RAC ListBox', role: 'listbox' },
    { to: 'rac/menu', name: 'RAC Menu', role: 'menu' },
    { to: 'rac/modal', name: 'RAC Modal', role: 'dialog' },
    { to: 'rac/popover', name: 'RAC Popover', role: 'dialog' },
    { to: 'rac/progress-bar', name: 'RAC ProgressBar', role: 'progressbar' },
    { to: 'rac/radio-group', name: 'RAC RadioGroup', role: 'radiogroup' },
    { to: 'rac/search-field', name: 'RAC SearchField', role: 'searchbox' },
    { to: 'rac/select', name: 'RAC Select', role: 'listbox' },
    { to: 'rac/switch', name: 'RAC Switch', role: 'switch' },
    { to: 'rac/tag-group', name: 'RAC TagGroup', role: 'grid' },
    { to: 'rac/text-field', name: 'RAC TextField', role: 'textbox' },
    { to: 'rac/tooltip', name: 'RAC Tooltip', role: 'tooltip' },
    // plop end components
  ];
}
