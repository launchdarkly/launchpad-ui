import type { NavigateOptions, To } from 'react-router-dom';

declare module 'react-aria-components' {
	interface RouterConfig {
		href: To;
		routerOptions: NavigateOptions;
	}
}
