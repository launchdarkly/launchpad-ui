const icons = [
	'a-to-b',
	'add',
	'add-circle',
	'add-circle-outline',
	'alert-rhombus',
	'analyze',
	'animal-cat',
	'animal-turtle',
	'anthropic',
	'api',
	'application',
	'application-plus',
	'application-plus-outline',
	'approval-applied',
	'approval-approved',
	'approval-denied',
	'approval-pending',
	'approvals',
	'archive',
	'archive-outline',
	'arrow-connect',
	'arrow-connect-star',
	'arrow-connect-star-outline',
	'arrow-down-thin',
	'arrow-left-thin',
	'arrow-right-thin',
	'arrow-undo',
	'arrow-up-right-circle',
	'arrow-up-right-circle-outline',
	'arrow-up-thin',
	'arrows-maximize',
	'article',
	'backslash',
	'bolt',
	'book',
	'book-code',
	'book-outline',
	'border-all',
	'brain',
	'broom',
	'bug',
	'building',
	'building-arrow-up-right',
	'building-gear',
	'bullhorn',
	'bullseye',
	'bullseye-arrow',
	'calculator',
	'calendar',
	'calendar-cancel',
	'calendar-schedule',
	'cancel',
	'cancel-circle',
	'cancel-circle-outline',
	'caret-down',
	'caret-left',
	'caret-right',
	'caret-up',
	'certificate',
	'change-history',
	'chart-area',
	'chart-bar',
	'chart-cube-root',
	'chart-dashboard',
	'chart-histogram',
	'chart-infographic',
	'chart-line',
	'chart-lines-crossed',
	'chart-pie',
	'chart-venn',
	'chart-venn-bolt',
	'chat-bubble',
	'chat-bubble-outline',
	'check',
	'check-circle',
	'check-circle-outline',
	'checklist',
	'chevron-down',
	'chevron-left',
	'chevron-right',
	'chevron-up',
	'chevrons-in',
	'chevrons-left',
	'chevrons-out',
	'chevrons-right',
	'circle',
	'circle-dashed',
	'circle-outline',
	'click',
	'clipboard-edit',
	'clock',
	'clock-alert',
	'clock-history',
	'cloud',
	'cloud-filter',
	'cloud-search',
	'code-circle',
	'code-circle-outline',
	'coins',
	'compass',
	'compass-outline',
	'confetti',
	'copy-clipboard',
	'copy-code',
	'copy-content',
	'created',
	'credit-card',
	'crown',
	'crown-outline',
	'data',
	'data-export',
	'delete',
	'dependency',
	'device-desktop',
	'device-mobile',
	'device-server',
	'devices',
	'diamond',
	'diamond-outline',
	'document-question',
	'door-exit',
	'download',
	'edit',
	'edit-circle',
	'equal-circle',
	'extension',
	'filter',
	'filter-list',
	'filter-tune',
	'fingerprint',
	'fingerprint-bolt',
	'flag',
	'flag-code',
	'flag-health',
	'flag-outline',
	'flask',
	'flask-arrow',
	'flask-bolt',
	'folders',
	'forward',
	'gear',
	'gear-outline',
	'gemini',
	'globe',
	'globe-check',
	'graduation-cap',
	'graduation-cap-outline',
	'grip-horiz',
	'grip-vert',
	'group',
	'group-outline',
	'half-circle',
	'handshake',
	'help',
	'help-circle',
	'help-circle-outline',
	'holdout',
	'hub',
	'id-badge',
	'id-card',
	'inbox',
	'inbox-outline',
	'individual-target',
	'info',
	'info-circle',
	'info-circle-outline',
	'key',
	'lightbulb',
	'link',
	'link-external',
	'list',
	'lock',
	'magic-wand',
	'mail-question',
	'map',
	'map-check',
	'map-code',
	'map-search',
	'markdown',
	'markdown-off',
	'menu',
	'metric-funnel',
	'metric-group',
	'minus',
	'minus-circle',
	'minus-circle-outline',
	'money',
	'more-horiz',
	'more-vert',
	'network-cloud',
	'notifications',
	'notifications-add',
	'notifications-check',
	'notifications-gear',
	'notifications-outline',
	'notifications-off',
	'notifications-tilt',
	'openai',
	'osmo',
	'package',
	'package-outline',
	'package-outline-bolt',
	'package-send',
	'password',
	'pause',
	'person',
	'person-add',
	'person-check',
	'person-circle',
	'person-circle-outline',
	'person-gear',
	'person-off',
	'person-outline',
	'person-password',
	'person-remove',
	'play',
	'play-circle',
	'play-circle-outline',
	'plug',
	'plug-connect',
	'plug-connect-gear',
	'plug-connect-outline',
	'preview',
	'progress',
	'progress-check',
	'pulse',
	'quick-start',
	'robot',
	'ruler',
	'ruler-bolt',
	'search',
	'shield-account',
	'shield-account-outline',
	'shield-alert',
	'shield-alert-outline',
	'shield-heart',
	'shield-heart-outline',
	'shield-key',
	'shield-key-outline',
	'ship',
	'ship-outline',
	'sidebar-left-collapse',
	'sidebar-left-expand',
	'sidebar-right-collapse',
	'sidebar-right-expand',
	'slash',
	'sort',
	'sparkle',
	'speedometer',
	'star',
	'star-circle',
	'star-outline',
	'status-active',
	'status-inactive',
	'status-launched',
	'status-new',
	'stop',
	'stop-circle',
	'stop-circle-outline',
	'swap-horiz',
	'swap-vertical',
	'sync',
	'tag',
	'temperature',
	'terminal',
	'text-box-search',
	'theme-dark',
	'theme-light',
	'thumb-down-outline',
	'thumb-up',
	'thumb-up-outline',
	'timeline-text',
	'toggle-bolt',
	'toggle-off',
	'toggle-on',
	'toggle-stack',
	'tools',
	'topology-star-3',
	'triangle-square-circle',
	'visibility',
	'visibility-off',
	'visibility-scan',
	'warning',
	'warning-outline',
] as const;
type IconName = (typeof icons)[number];

export type { IconName };
export { icons };
