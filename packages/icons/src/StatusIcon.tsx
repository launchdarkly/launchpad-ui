import type { IconProps } from './Icon';

import { Icon } from './Icon';

type StatusIconProps = Omit<IconProps, 'name'> & {
	kind: 'info' | 'success' | 'warning' | 'error' | 'notification';
};

const StatusIcon = ({ kind, size = 'medium', ...rest }: StatusIconProps) => {
	let name: IconProps['name'];
	let ariaLabel = '';

	switch (kind) {
		case 'success':
			name = 'check-circle';
			ariaLabel = 'Success';
			break;
		case 'warning':
			name = 'warning';
			ariaLabel = 'Warning';
			break;
		case 'error':
			name = 'alert-rhombus';
			ariaLabel = 'Error';
			break;
		case 'info':
			name = 'info-circle';
			ariaLabel = 'Info';
			break;
		case 'notification':
			name = 'notifications';
			ariaLabel = 'Notification';
			break;
	}

	return <Icon aria-label={`${ariaLabel} icon`} role="img" size={size} {...rest} name={name} />;
};

export { StatusIcon };
export type { StatusIconProps };
