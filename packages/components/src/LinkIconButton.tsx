import type { ContextValue } from 'react-aria-components';
import type { IconButtonBaseProps } from './IconButton';
import type { LinkProps } from './Link';

import { Icon } from '@launchpad-ui/icons';
import { cx } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components';

import { buttonStyles } from './Button';
import { iconButtonStyles } from './IconButton';
import { Link } from './Link';
import { useLPContextProps } from './utils';

interface LinkIconButtonProps
	extends Omit<LinkProps, 'variant' | 'children' | 'aria-label'>,
		IconButtonBaseProps {}

const LinkIconButtonContext =
	createContext<ContextValue<LinkIconButtonProps, HTMLAnchorElement>>(null);

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const LinkIconButton = ({ ref, ...props }: LinkIconButtonProps) => {
	[props, ref] = useLPContextProps(props, ref, LinkIconButtonContext);
	const { size = 'medium', variant = 'default', icon } = props;

	return (
		<Link
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(buttonStyles({ ...renderProps, size, variant, className }), iconButtonStyles({ size })),
			)}
			variant={null}
		>
			<Icon name={icon} size="small" aria-hidden />
		</Link>
	);
};

export { LinkIconButton, LinkIconButtonContext };
export type { LinkIconButtonProps };
