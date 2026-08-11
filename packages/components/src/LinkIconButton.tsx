import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { ContextValue } from 'react-aria-components/slots';
import { cx } from 'class-variance-authority';

import { Icon } from '@launchpad-ui/icons';

import { buttonStyles } from './Button';
import type { IconButtonBaseProps } from './IconButton';
import { iconButtonStyles } from './IconButton';
import type { LinkProps } from './Link';
import { Link } from './Link';
import { useLPContextProps } from './utils';

interface LinkIconButtonProps extends Omit<LinkProps, 'variant' | 'children' | 'aria-label'>, IconButtonBaseProps {}

const LinkIconButtonContext = createContext<ContextValue<LinkIconButtonProps, HTMLAnchorElement>>(null);

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const LinkIconButton = ({ ref, ...props }: LinkIconButtonProps) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, LinkIconButtonContext);
	const { size = 'medium', variant = 'default', icon } = mergedProps;

	return (
		<Link
			{...mergedProps}
			ref={mergedRef}
			data-lp-variant={variant}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
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
