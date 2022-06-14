/* eslint-disable react-prefer-function-component/react-prefer-function-component */
import { Component } from 'react';

import { AnimationDelay } from './types';

type DelayedIndicatorProps = {
  children: React.ReactNode;
  delayMs?: number;
};

type DelayedIndicatorState = {
  renderChildren: boolean;
};

class DelayedIndicator extends Component<DelayedIndicatorProps> {
  static defaultProps = {
    delayMs: AnimationDelay.DEFAULT,
  };

  _delay?: ReturnType<typeof setTimeout> = undefined;

  state: DelayedIndicatorState = {
    renderChildren: false,
  };

  componentDidMount() {
    const { delayMs } = this.props;

    if (typeof delayMs === 'number') {
      if (delayMs === 0) {
        this.setState({ renderChildren: true });
      } else {
        this._delay = setTimeout(() => {
          this.setState({ renderChildren: true });
        }, delayMs);
      }
    }
  }

  componentWillUnmount() {
    if (this._delay) {
      clearTimeout(this._delay);
    }
  }

  render() {
    const { children } = this.props;
    return this.state.renderChildren ? children : null;
  }
}

export { DelayedIndicator };
export type { DelayedIndicatorProps };
