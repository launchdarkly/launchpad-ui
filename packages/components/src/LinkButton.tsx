import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { ContextValue } from 'react-aria-components/slots';

import type { ButtonVariants } from './Button';
import { buttonStyles } from './Button';
import type { LinkProps } from './Link';
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
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, LinkButtonContext);
	const { size = 'medium', variant = 'default' } = mergedProps;

	return (
		<Link
			{...mergedProps}
			ref={mergedRef}
			data-variant={variant}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				buttonStyles({ ...renderProps, size, variant, className }),
			)}
			variant={null}
		/>
	);
};

export { LinkButton, LinkButtonContext };
export type { LinkButtonProps };
