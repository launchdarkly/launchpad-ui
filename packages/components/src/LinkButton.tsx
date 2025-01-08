import type { ButtonVariants } from './Button';
import type { LinkProps } from './Link';

import { composeRenderProps } from 'react-aria-components';

import { button } from './Button';
import { Link } from './Link';

interface LinkButtonProps extends Omit<LinkProps, 'variant'>, ButtonVariants {}

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * https://react-spectrum.adobe.com/react-aria/Link.html
 */
const LinkButton = ({ size = 'medium', variant = 'default', ref, ...props }: LinkButtonProps) => {
	return (
		<Link
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				button({ ...renderProps, size, variant, className }),
			)}
			variant={null}
		/>
	);
};

export { LinkButton };
export type { LinkButtonProps };
