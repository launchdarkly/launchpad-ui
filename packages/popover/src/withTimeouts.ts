import type { Component as ReactComponent } from 'react';

/**
 * Extends a component to include ability to create timeouts with auto-clearing on unmount.
 *
 * @param {Class} Component
 * @return {Class}
 */

const withTimeouts = <P extends object>(Component: typeof ReactComponent) =>
  // eslint-disable-next-line react/display-name
  class extends Component<P> {
    timeoutIds: Array<ReturnType<typeof setTimeout>> = [];

    componentWillUnmount() {
      super.componentWillUnmount && super.componentWillUnmount();
      this.clearTimeouts();
    }

    // Global `setTimeout` method takes a callback with any args
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setTimeout(callback: (...args: any[]) => void, timeout: number) {
      const id: ReturnType<typeof setTimeout> = setTimeout(callback, timeout);
      this.timeoutIds = this.timeoutIds.concat(id);
      return () => clearTimeout(id);
    }

    clearTimeouts = () => {
      this.timeoutIds.forEach(clearTimeout);
    };
  };

export { withTimeouts };
