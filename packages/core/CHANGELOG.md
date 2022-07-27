# @launchpad-ui/core

## 0.4.2

### Patch Changes

- [#219](https://github.com/launchdarkly/launchpad-ui/pull/219) [`b2a8ff5`](https://github.com/launchdarkly/launchpad-ui/commit/b2a8ff5f87c95be17c5749998f74f8bcedba65e8) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Add chunk names

- Updated dependencies [[`b2a8ff5`](https://github.com/launchdarkly/launchpad-ui/commit/b2a8ff5f87c95be17c5749998f74f8bcedba65e8)]:
  - @launchpad-ui/modal@0.5.2
  - @launchpad-ui/notification@0.2.7
  - @launchpad-ui/popover@0.5.2
  - @launchpad-ui/overlay@0.1.14
  - @launchpad-ui/dropdown@0.2.4
  - @launchpad-ui/menu@0.3.2
  - @launchpad-ui/navigation@0.2.2
  - @launchpad-ui/progress-bubbles@0.2.4
  - @launchpad-ui/tooltip@0.3.4
  - @launchpad-ui/clipboard@0.2.12

## 0.4.1

### Patch Changes

- [#216](https://github.com/launchdarkly/launchpad-ui/pull/216) [`f567202`](https://github.com/launchdarkly/launchpad-ui/commit/f567202860088b877a2a4edbbb1c90dc0906ab3b) Thanks [@Niznikr](https://github.com/Niznikr)! - [Icons] Add ChevronLeft, ChevronRight, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight

* [#218](https://github.com/launchdarkly/launchpad-ui/pull/218) [`204e574`](https://github.com/launchdarkly/launchpad-ui/commit/204e574344367cdd653b141d067ee6dcef74c17d) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Update framer dynamic import

* Updated dependencies [[`f567202`](https://github.com/launchdarkly/launchpad-ui/commit/f567202860088b877a2a4edbbb1c90dc0906ab3b), [`204e574`](https://github.com/launchdarkly/launchpad-ui/commit/204e574344367cdd653b141d067ee6dcef74c17d)]:
  - @launchpad-ui/icons@0.2.3
  - @launchpad-ui/modal@0.5.1
  - @launchpad-ui/notification@0.2.6
  - @launchpad-ui/popover@0.5.1
  - @launchpad-ui/alert@0.1.14
  - @launchpad-ui/avatar@0.1.1
  - @launchpad-ui/banner@0.2.6
  - @launchpad-ui/clipboard@0.2.11
  - @launchpad-ui/dropdown@0.2.3
  - @launchpad-ui/form@0.2.6
  - @launchpad-ui/menu@0.3.1
  - @launchpad-ui/pagination@0.0.3
  - @launchpad-ui/overlay@0.1.13
  - @launchpad-ui/navigation@0.2.1
  - @launchpad-ui/progress-bubbles@0.2.3
  - @launchpad-ui/tooltip@0.3.3

## 0.4.0

### Minor Changes

- [#215](https://github.com/launchdarkly/launchpad-ui/pull/215) [`1fbb858`](https://github.com/launchdarkly/launchpad-ui/commit/1fbb858c8baaaa2f7cced15c81d1c2b0d49a7836) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Add LazyMotion:

  - Add `LazyMotion` to the individual components to remove the need for consumers to wrap their app with it

* [#211](https://github.com/launchdarkly/launchpad-ui/pull/211) [`b822656`](https://github.com/launchdarkly/launchpad-ui/commit/b82265611bbe1295cf2c4565a0ffed8e19640fd7) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add slot to menu and remove dependency on RR for button & menu

  - [Menu]: Add slot package to remove React Router dependency, add MenuSize enum.
  - [Button]: Remove React Router dependency by generalizing the `to` prop. In the future, we will look into allowing slottable buttons.

### Patch Changes

- [#212](https://github.com/launchdarkly/launchpad-ui/pull/212) [`5cad98b`](https://github.com/launchdarkly/launchpad-ui/commit/5cad98b8b53f54a59f72f23a6c7f948f9a091b63) Thanks [@Niznikr](https://github.com/Niznikr)! - Add table package:

  - [Table] Add table code, stories, and tests

* [#209](https://github.com/launchdarkly/launchpad-ui/pull/209) [`371444d`](https://github.com/launchdarkly/launchpad-ui/commit/371444de984821011c601ad6e45959db66808d56) Thanks [@Niznikr](https://github.com/Niznikr)! - Add slider package:

  - [Slider] Add slider code, stories, and tests

* Updated dependencies [[`5cad98b`](https://github.com/launchdarkly/launchpad-ui/commit/5cad98b8b53f54a59f72f23a6c7f948f9a091b63), [`371444d`](https://github.com/launchdarkly/launchpad-ui/commit/371444de984821011c601ad6e45959db66808d56), [`1fbb858`](https://github.com/launchdarkly/launchpad-ui/commit/1fbb858c8baaaa2f7cced15c81d1c2b0d49a7836), [`b822656`](https://github.com/launchdarkly/launchpad-ui/commit/b82265611bbe1295cf2c4565a0ffed8e19640fd7)]:
  - @launchpad-ui/table@0.1.0
  - @launchpad-ui/slider@0.1.0
  - @launchpad-ui/modal@0.5.0
  - @launchpad-ui/navigation@0.2.0
  - @launchpad-ui/popover@0.5.0
  - @launchpad-ui/menu@0.3.0
  - @launchpad-ui/button@0.2.3
  - @launchpad-ui/overlay@0.1.12
  - @launchpad-ui/dropdown@0.2.2
  - @launchpad-ui/progress-bubbles@0.2.2
  - @launchpad-ui/tooltip@0.3.2
  - @launchpad-ui/alert@0.1.13
  - @launchpad-ui/banner@0.2.5
  - @launchpad-ui/notification@0.2.5
  - @launchpad-ui/pagination@0.0.2
  - @launchpad-ui/clipboard@0.2.10

## 0.3.1

### Patch Changes

- [#202](https://github.com/launchdarkly/launchpad-ui/pull/202) [`6836a14`](https://github.com/launchdarkly/launchpad-ui/commit/6836a148988c7e0907920ecdcfaf4c4d8da086f8) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Alert] Remove legacy styles and reorder css to fix no-descending-specificity

* [#204](https://github.com/launchdarkly/launchpad-ui/pull/204) [`1e74d18`](https://github.com/launchdarkly/launchpad-ui/commit/1e74d1803e22b675abf1195f798da85092a5d33a) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Remove disabling no-descending-specificity rules in packages:

  [Notification]: Refactored stylesheets to remove no-descending-specificity disable rules
  [Form]: Refactored stylesheets to remove no-descending-specificity disable rules
  [ProgressBubbles]: Refactored stylesheets to remove no-descending-specificity disable rules
  [Menu]: Refactored stylesheets to remove no-descending-specificity disable rules

- [#208](https://github.com/launchdarkly/launchpad-ui/pull/208) [`590838e`](https://github.com/launchdarkly/launchpad-ui/commit/590838e7744058324fc5223b6cb39f01a88f6e1a) Thanks [@Niznikr](https://github.com/Niznikr)! - [Popover] Apply strategy to popover position

- Updated dependencies [[`6836a14`](https://github.com/launchdarkly/launchpad-ui/commit/6836a148988c7e0907920ecdcfaf4c4d8da086f8), [`1e74d18`](https://github.com/launchdarkly/launchpad-ui/commit/1e74d1803e22b675abf1195f798da85092a5d33a), [`590838e`](https://github.com/launchdarkly/launchpad-ui/commit/590838e7744058324fc5223b6cb39f01a88f6e1a)]:
  - @launchpad-ui/alert@0.1.12
  - @launchpad-ui/form@0.2.5
  - @launchpad-ui/menu@0.2.8
  - @launchpad-ui/notification@0.2.4
  - @launchpad-ui/progress-bubbles@0.2.1
  - @launchpad-ui/popover@0.4.1
  - @launchpad-ui/banner@0.2.4
  - @launchpad-ui/navigation@0.1.2
  - @launchpad-ui/dropdown@0.2.1
  - @launchpad-ui/tooltip@0.3.1
  - @launchpad-ui/clipboard@0.2.9

## 0.3.0

### Minor Changes

- [#192](https://github.com/launchdarkly/launchpad-ui/pull/192) [`eb6e44c`](https://github.com/launchdarkly/launchpad-ui/commit/eb6e44c7853a7263511cdf7aeaeb0d83a83d78b9) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Change from string literal union type to `PopoverInteractionKind` enum type used across Launchpad:

  - [Popover] Add and export `PopoverInteractionKind` type
  - [ProgressBubbles] Consume `PopoverInteractionKind`
  - [Tooltip] Consume `PopoverInteractionKind`

* [#201](https://github.com/launchdarkly/launchpad-ui/pull/201) [`69aef79`](https://github.com/launchdarkly/launchpad-ui/commit/69aef79a108c5d827fa42a814c249865ab6d7bc2) Thanks [@Niznikr](https://github.com/Niznikr)! - [Dropdown] Rename target class and remove legacy props:

  - Rename `Dropdown` class to `Dropdown-target` on target
  - Add `Dropdown` class to popover
  - Remove legacy tooltip props from `DropdownButton`

### Patch Changes

- [#199](https://github.com/launchdarkly/launchpad-ui/pull/199) [`aa5e5d5`](https://github.com/launchdarkly/launchpad-ui/commit/aa5e5d5af054186cbfae08e5cbbf09beb112c46f) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add counter package:

  - [Counter] Add counter code, stories, and tests

* [#193](https://github.com/launchdarkly/launchpad-ui/pull/193) [`ceaee6b`](https://github.com/launchdarkly/launchpad-ui/commit/ceaee6b61a1fe16dd7b4e70ab4005d40203f2ba4) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Removed or moved styles for u- classes in form package

  - [Form] removed or moved styles for u- classes

- [#194](https://github.com/launchdarkly/launchpad-ui/pull/194) [`814d444`](https://github.com/launchdarkly/launchpad-ui/commit/814d444146667c0f7f384772032a96252e0c1b57) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Removed or moved styles for u- classes in clipboard package

  - [Clipboard] removed or moved styles for u- classes

* [#200](https://github.com/launchdarkly/launchpad-ui/pull/200) [`bf9d67a`](https://github.com/launchdarkly/launchpad-ui/commit/bf9d67a045d20c91f912817adf2d7af3122158f2) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add markdown package:

  - [Markdown] Add markdown code, stories, and tests

* Updated dependencies [[`aa5e5d5`](https://github.com/launchdarkly/launchpad-ui/commit/aa5e5d5af054186cbfae08e5cbbf09beb112c46f), [`eb6e44c`](https://github.com/launchdarkly/launchpad-ui/commit/eb6e44c7853a7263511cdf7aeaeb0d83a83d78b9), [`ceaee6b`](https://github.com/launchdarkly/launchpad-ui/commit/ceaee6b61a1fe16dd7b4e70ab4005d40203f2ba4), [`69aef79`](https://github.com/launchdarkly/launchpad-ui/commit/69aef79a108c5d827fa42a814c249865ab6d7bc2), [`814d444`](https://github.com/launchdarkly/launchpad-ui/commit/814d444146667c0f7f384772032a96252e0c1b57), [`bf9d67a`](https://github.com/launchdarkly/launchpad-ui/commit/bf9d67a045d20c91f912817adf2d7af3122158f2)]:
  - @launchpad-ui/counter@0.1.0
  - @launchpad-ui/popover@0.4.0
  - @launchpad-ui/progress-bubbles@0.2.0
  - @launchpad-ui/tooltip@0.3.0
  - @launchpad-ui/form@0.2.4
  - @launchpad-ui/dropdown@0.2.0
  - @launchpad-ui/clipboard@0.2.8
  - @launchpad-ui/markdown@0.1.0
  - @launchpad-ui/menu@0.2.7
  - @launchpad-ui/navigation@0.1.1
  - @launchpad-ui/notification@0.2.3

## 0.2.3

### Patch Changes

- [#196](https://github.com/launchdarkly/launchpad-ui/pull/196) [`fe655ed`](https://github.com/launchdarkly/launchpad-ui/commit/fe655ed4fbae593826f9f872e80dfbca5cd0baf7) Thanks [@Niznikr](https://github.com/Niznikr)! - [Notification] Increase close button specificity

* [#190](https://github.com/launchdarkly/launchpad-ui/pull/190) [`e267bae`](https://github.com/launchdarkly/launchpad-ui/commit/e267baef8266ecc163866b3ac9e03abed4aef9e7) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add progress-bubbles package:

  - [ProgressBubbles] Add ProgressBubbles code, stories, and tests

- [#191](https://github.com/launchdarkly/launchpad-ui/pull/191) [`0b17691`](https://github.com/launchdarkly/launchpad-ui/commit/0b1769100c9d5d21345ad9636de4fc277c19ba5b) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Menu] Add correct header styles for menu item headers

* [#186](https://github.com/launchdarkly/launchpad-ui/pull/186) [`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4) Thanks [@Niznikr](https://github.com/Niznikr)! - Add avatar package:

  - [Icon] Add dimension enum and person icon
  - [Avatar] Add avatar code, stories, and tests

- [#189](https://github.com/launchdarkly/launchpad-ui/pull/189) [`a73a79b`](https://github.com/launchdarkly/launchpad-ui/commit/a73a79b1ddbb22bb7a1d481720d19015bacd1584) Thanks [@Niznikr](https://github.com/Niznikr)! - Add navigation package:

  - [Navigation] Add navigation code, stories, and tests

- Updated dependencies [[`fe655ed`](https://github.com/launchdarkly/launchpad-ui/commit/fe655ed4fbae593826f9f872e80dfbca5cd0baf7), [`e267bae`](https://github.com/launchdarkly/launchpad-ui/commit/e267baef8266ecc163866b3ac9e03abed4aef9e7), [`0b17691`](https://github.com/launchdarkly/launchpad-ui/commit/0b1769100c9d5d21345ad9636de4fc277c19ba5b), [`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4), [`a73a79b`](https://github.com/launchdarkly/launchpad-ui/commit/a73a79b1ddbb22bb7a1d481720d19015bacd1584)]:
  - @launchpad-ui/notification@0.2.2
  - @launchpad-ui/progress-bubbles@0.1.0
  - @launchpad-ui/menu@0.2.6
  - @launchpad-ui/avatar@0.1.0
  - @launchpad-ui/icons@0.2.2
  - @launchpad-ui/navigation@0.1.0
  - @launchpad-ui/alert@0.1.11
  - @launchpad-ui/banner@0.2.3
  - @launchpad-ui/clipboard@0.2.7
  - @launchpad-ui/dropdown@0.1.9
  - @launchpad-ui/form@0.2.3
  - @launchpad-ui/modal@0.4.2
  - @launchpad-ui/overlay@0.1.11
  - @launchpad-ui/popover@0.3.2
  - @launchpad-ui/tooltip@0.2.6

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
