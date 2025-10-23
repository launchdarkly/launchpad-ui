import type { IconProps } from '@launchpad-ui/icons';

import { Icon } from '@launchpad-ui/icons';
import { VisuallyHidden } from 'react-aria';

import { Link } from './Link';
import styles from './styles/NewTabLink.module.css';

type NewTabLinkProps = {
	href: string;
	text?: string;
	showIcon?: boolean;
	onClick?: () => void;
	className?: string;
	size?: IconProps['size'];
	renderIconFirst?: boolean;
};

export function NewTabLink({
	className,
	href,
	text = 'read the documentation',
	showIcon = true,
	size = 'small',
	renderIconFirst = false,
	onClick,
}: NewTabLinkProps) {
	const shouldRenderIconFirst = showIcon && renderIconFirst;
	const shouldRenderIconLast = showIcon && !renderIconFirst;
	const icon = (
		<Icon
			name="link-external"
			data-test-id="new-tab-link-icon"
			className={`Icon ${styles.icon}${shouldRenderIconFirst ? ` ${styles.first}` : ''}${shouldRenderIconLast ? ` ${styles.last}` : ''}`}
			size={size}
		/>
	);

	return (
		<Link
			href={href}
			rel="noopener noreferrer"
			target="_blank"
			onPress={onClick}
			className={className}
		>
			{shouldRenderIconFirst && icon}
			{text}
			<VisuallyHidden elementType="span">(Link opens in new tab)</VisuallyHidden>
			{shouldRenderIconLast && icon}
		</Link>
	);
}
