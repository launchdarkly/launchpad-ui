import type { ForwardedRef } from 'react';
import type { IconButtonBaseProps } from './IconButton';
import type { LinkProps } from './Link';

import { Icon } from '@launchpad-ui/icons';
import { cx } from 'class-variance-authority';
import { forwardRef } from 'react';
import { composeRenderProps } from 'react-aria-components';

import { button } from './Button';
import { iconButton } from './IconButton';
import { Link } from './Link';

interface LinkIconButtonProps
	extends Omit<LinkProps, 'variant' | 'children' | 'aria-label'>,
		IconButtonBaseProps {}

const _LinkIconButton = (
	{ size = 'medium', variant = 'default', icon, ...props }: LinkIconButtonProps,
	ref: ForwardedRef<HTMLAnchorElement>,
) => {
	return (
		<Link
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(button({ ...renderProps, size, variant, className }), iconButton({ size })),
			)}
			variant={null}
		>
			<Icon name={icon} size="small" aria-hidden />
		</Link>
	);
};

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const LinkIconButton = forwardRef(_LinkIconButton);

export { LinkIconButton };
export type { LinkIconButtonProps };
