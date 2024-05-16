import type { NavigateOptions } from 'react-router-dom';

declare module 'react-aria-components' {
	interface RouterConfig {
		routerOptions: NavigateOptions;
	}
}
