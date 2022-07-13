# @launchpad-ui/core

## 0.2.2

### Patch Changes

- [#176](https://github.com/launchdarkly/launchpad-ui/pull/176) [`8314a19`](https://github.com/launchdarkly/launchpad-ui/commit/8314a19fbaa532e296b7fcfe5b05b0a1da70447f) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal] Stop escape propagation

* [#174](https://github.com/launchdarkly/launchpad-ui/pull/174) [`3052465`](https://github.com/launchdarkly/launchpad-ui/commit/30524654c1c553623ea7633ca6d27c003acc1729) Thanks [@Niznikr](https://github.com/Niznikr)! - [Notification] Add json prop

- [#172](https://github.com/launchdarkly/launchpad-ui/pull/172) [`4434cca`](https://github.com/launchdarkly/launchpad-ui/commit/4434cca48c1c6025d297fb2ae5f646c726473f64) Thanks [@Niznikr](https://github.com/Niznikr)! - [Button] Update `to` type for rr6

* [#177](https://github.com/launchdarkly/launchpad-ui/pull/177) [`63ebd7e`](https://github.com/launchdarkly/launchpad-ui/commit/63ebd7ef0f7e490bec8852a71f30ee2eb5fb7ba6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Alert] Increase the specificity on .Alert-close to fix style conflict with buttons

- [#178](https://github.com/launchdarkly/launchpad-ui/pull/178) [`111376d`](https://github.com/launchdarkly/launchpad-ui/commit/111376d9e26d00f5d7757e127d539daed1e6e3ed) Thanks [@Niznikr](https://github.com/Niznikr)! - [Tooltip] Expose base component

* [#175](https://github.com/launchdarkly/launchpad-ui/pull/175) [`1601139`](https://github.com/launchdarkly/launchpad-ui/commit/16011393d1c9dda8ebd2647c6b9963984175dd21) Thanks [@jennifro](https://github.com/jennifro)! - [Lozenge] Update flag variant styles

* Updated dependencies [[`8314a19`](https://github.com/launchdarkly/launchpad-ui/commit/8314a19fbaa532e296b7fcfe5b05b0a1da70447f), [`3052465`](https://github.com/launchdarkly/launchpad-ui/commit/30524654c1c553623ea7633ca6d27c003acc1729), [`4434cca`](https://github.com/launchdarkly/launchpad-ui/commit/4434cca48c1c6025d297fb2ae5f646c726473f64), [`63ebd7e`](https://github.com/launchdarkly/launchpad-ui/commit/63ebd7ef0f7e490bec8852a71f30ee2eb5fb7ba6), [`111376d`](https://github.com/launchdarkly/launchpad-ui/commit/111376d9e26d00f5d7757e127d539daed1e6e3ed), [`1601139`](https://github.com/launchdarkly/launchpad-ui/commit/16011393d1c9dda8ebd2647c6b9963984175dd21)]:
  - @launchpad-ui/modal@0.4.1
  - @launchpad-ui/notification@0.2.1
  - @launchpad-ui/button@0.2.2
  - @launchpad-ui/alert@0.1.10
  - @launchpad-ui/tooltip@0.2.5
  - @launchpad-ui/lozenge@0.2.3
  - @launchpad-ui/overlay@0.1.10
  - @launchpad-ui/banner@0.2.2
  - @launchpad-ui/dropdown@0.1.8
  - @launchpad-ui/clipboard@0.2.6
  - @launchpad-ui/menu@0.2.5
  - @launchpad-ui/popover@0.3.1

## 0.2.1

### Patch Changes

- [#168](https://github.com/launchdarkly/launchpad-ui/pull/168) [`4adb50f`](https://github.com/launchdarkly/launchpad-ui/commit/4adb50f20abb36770c0f94fed68dceb80f484aa8) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Expose clipboard handle type

- Updated dependencies [[`4adb50f`](https://github.com/launchdarkly/launchpad-ui/commit/4adb50f20abb36770c0f94fed68dceb80f484aa8)]:
  - @launchpad-ui/clipboard@0.2.5

## 0.2.0

### Minor Changes

- [#166](https://github.com/launchdarkly/launchpad-ui/pull/166) [`d0cadcb`](https://github.com/launchdarkly/launchpad-ui/commit/d0cadcb6f13297e02fd7e8a0007b06a0bc1c66c6) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Remove LazyMotion:

  This requires that you wrap your app with [LazyMotion](https://www.framer.com/docs/lazy-motion/) to use these components:

  ```jsx
  import { LazyMotion, domAnimation } from 'framer-motion';

  <LazyMotion features={domAnimation}>
    <App />
  </LazyMotion>;
  ```

### Patch Changes

- [#164](https://github.com/launchdarkly/launchpad-ui/pull/164) [`e711a77`](https://github.com/launchdarkly/launchpad-ui/commit/e711a7753aedad207d0f8328e34dd8b5471096ae) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal] Add class to body when open

* [#163](https://github.com/launchdarkly/launchpad-ui/pull/163) [`c1321e9`](https://github.com/launchdarkly/launchpad-ui/commit/c1321e934e37b31b3a56ff5c8b8163c53cee2d62) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Clipboard] Expose ref to imperatively call copy function from parent

- [#167](https://github.com/launchdarkly/launchpad-ui/pull/167) [`19ef59b`](https://github.com/launchdarkly/launchpad-ui/commit/19ef59bf64050529d8f6555a5bea1474988a4157) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update font sizing used with lozenge

- Updated dependencies [[`e711a77`](https://github.com/launchdarkly/launchpad-ui/commit/e711a7753aedad207d0f8328e34dd8b5471096ae), [`c1321e9`](https://github.com/launchdarkly/launchpad-ui/commit/c1321e934e37b31b3a56ff5c8b8163c53cee2d62), [`19ef59b`](https://github.com/launchdarkly/launchpad-ui/commit/19ef59bf64050529d8f6555a5bea1474988a4157), [`d0cadcb`](https://github.com/launchdarkly/launchpad-ui/commit/d0cadcb6f13297e02fd7e8a0007b06a0bc1c66c6)]:
  - @launchpad-ui/modal@0.4.0
  - @launchpad-ui/clipboard@0.2.4
  - @launchpad-ui/lozenge@0.2.2
  - @launchpad-ui/notification@0.2.0
  - @launchpad-ui/popover@0.3.0
  - @launchpad-ui/overlay@0.1.9
  - @launchpad-ui/dropdown@0.1.7
  - @launchpad-ui/menu@0.2.4
  - @launchpad-ui/tooltip@0.2.4

## 0.1.1

### Patch Changes

- [#161](https://github.com/launchdarkly/launchpad-ui/pull/161) [`cc0a367`](https://github.com/launchdarkly/launchpad-ui/commit/cc0a367f7d67f8c974b46c0b1ac743e7b020c0f2) Thanks [@Niznikr](https://github.com/Niznikr)! - [Popover] Handle pointer events

- Updated dependencies [[`cc0a367`](https://github.com/launchdarkly/launchpad-ui/commit/cc0a367f7d67f8c974b46c0b1ac743e7b020c0f2), [`dcbbb0d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbbb0ddb030e57bad5a983db873d9311c86df66)]:
  - @launchpad-ui/popover@0.2.3
  - @launchpad-ui/menu@0.2.3
  - @launchpad-ui/dropdown@0.1.6
  - @launchpad-ui/tooltip@0.2.3
  - @launchpad-ui/clipboard@0.2.3

## 0.1.0

### Minor Changes

- [#153](https://github.com/launchdarkly/launchpad-ui/pull/153) [`1333e58`](https://github.com/launchdarkly/launchpad-ui/commit/1333e58355a3343a69ed2167c54267f77d0b8e26) Thanks [@Niznikr](https://github.com/Niznikr)! - Add core package:

  - Expose all components, styles, and tokens under a single package

### Patch Changes

- Updated dependencies [[`11953df`](https://github.com/launchdarkly/launchpad-ui/commit/11953dff46822400fbb218d5a6b09ee539f43ec5), [`5d5b5f3`](https://github.com/launchdarkly/launchpad-ui/commit/5d5b5f389e4bb541da909141710c59cd472d9b30)]:
  - @launchpad-ui/modal@0.3.0
  - @launchpad-ui/overlay@0.1.8
  - @launchpad-ui/popover@0.2.2
  - @launchpad-ui/dropdown@0.1.5
  - @launchpad-ui/menu@0.2.2
  - @launchpad-ui/tooltip@0.2.2
  - @launchpad-ui/clipboard@0.2.2
