import type { ContextValue } from 'react-aria-components';
import type { ButtonVariants } from './Button';
import type { LinkProps } from './Link';

import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components';

import { buttonStyles } from './Button';
import { Link } from './Link';
import { useLPContextProps } from './utils';

interface LinkButtonProps extends Omit<LinkProps, 'variant'>, ButtonVariants {}

const LinkButtonContext = createContext<ContextValue<LinkButtonProps, HTMLAnchorElement>>(null);

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const LinkButton = ({ ref, ...props }: LinkButtonProps) => {
	[props, ref] = useLPContextProps(props, ref, LinkButtonContext, 'LinkButton');
	const { size = 'medium', variant = 'default' } = props;

	return (
		<Link
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				buttonStyles({ ...renderProps, size, variant, className }),
			)}
			variant={null}
		/>
	);
};

export { LinkButton, LinkButtonContext };
export type { LinkButtonProps };
