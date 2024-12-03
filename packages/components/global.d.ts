import type { NavigateOptions, To } from 'react-router';

declare module 'react-aria-components' {
	interface RouterConfig {
		href: To;
		routerOptions: NavigateOptions;
	}
}
