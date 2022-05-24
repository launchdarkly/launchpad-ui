/* eslint-disable no-var */
declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;

  namespace PlaywrightTest {
    interface Matchers<R> {
      toHaveNoViolations(): R;
    }
  }
}

export {};
