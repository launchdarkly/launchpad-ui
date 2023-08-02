# @launchpad-ui/menu

## 0.11.5

### Patch Changes

- [#947](https://github.com/launchdarkly/launchpad-ui/pull/947) [`29e2b26c`](https://github.com/launchdarkly/launchpad-ui/commit/29e2b26c7f2a5496adb11a72fd79fcadd33717ff) Thanks [@Niznikr](https://github.com/Niznikr)! - Annotate pure functions

- Updated dependencies [[`29e2b26c`](https://github.com/launchdarkly/launchpad-ui/commit/29e2b26c7f2a5496adb11a72fd79fcadd33717ff)]:
  - @launchpad-ui/form@0.9.3
  - @launchpad-ui/icons@0.9.3
  - @launchpad-ui/popover@0.10.10
  - @launchpad-ui/tooltip@0.7.20

## 0.11.4

### Patch Changes

- Updated dependencies [[`9bbdd9e2`](https://github.com/launchdarkly/launchpad-ui/commit/9bbdd9e20bcbd5af8ab60ab3c03869c8665a8962)]:
  - @launchpad-ui/popover@0.10.9
  - @launchpad-ui/tooltip@0.7.19

## 0.11.3

### Patch Changes

- Updated dependencies [[`bc04510d`](https://github.com/launchdarkly/launchpad-ui/commit/bc04510d8adfeb899e25638979b5b6a6526e9986)]:
  - @launchpad-ui/popover@0.10.8
  - @launchpad-ui/tooltip@0.7.18

## 0.11.2

### Patch Changes

- Updated dependencies [[`c025b013`](https://github.com/launchdarkly/launchpad-ui/commit/c025b013c5c7ccdfb520103d82bd8395e7b1bbe6)]:
  - @launchpad-ui/icons@0.9.2
  - @launchpad-ui/form@0.9.2

## 0.11.1

### Patch Changes

- Updated dependencies [[`420b7c9b`](https://github.com/launchdarkly/launchpad-ui/commit/420b7c9b51fc18910b163aed562983a2a7d2db51)]:
  - @launchpad-ui/icons@0.9.1
  - @launchpad-ui/form@0.9.1

## 0.11.0

### Minor Changes

- [#917](https://github.com/launchdarkly/launchpad-ui/pull/917) [`f95ac68d`](https://github.com/launchdarkly/launchpad-ui/commit/f95ac68d2ddae67ae99520dca76721f6e07525cc) Thanks [@Niznikr](https://github.com/Niznikr)! - [Icons] Use sprites for icons instead of individual components

  **Before**

  ```js
  import { Add } from '@launchpad-ui/icons';

  const MyIcon = () => <Add size="medium" />;
  ```

  **After**

  ```js
  import { Icon } from '@launchpad-ui/icons';

  const MyIcon = () => <Icon name="add" size="medium" />;
  ```

  By default, the component expects `@launchpad-ui/icons/dist/sprite.svg` to be available from `APP_ROOT/static/sprite.svg` in your app. A custom path to the sprite can be set via the `IconContext` provider.

  For example, if importing a static asset returns a resolved URL you can do the following in your app to load the icons:

  ```js
  import { IconContext } from '@launchpad-ui/icons';
  import icons from '@launchpad-ui/icons/sprite.svg';
  import { createRoot } from 'react-dom/client';

  const domNode = document.getElementById('root');
  const root = createRoot(domNode);

  root.render(
    <IconContext.Provider value={{ path: icons }}>
      <App />
    </IconContext.Provider>
  );
  ```

### Patch Changes

- [#922](https://github.com/launchdarkly/launchpad-ui/pull/922) [`8f489f12`](https://github.com/launchdarkly/launchpad-ui/commit/8f489f1263f8641ed6b16f21765b41e23c0e7409) Thanks [@Niznikr](https://github.com/Niznikr)! - [Tokens] Add `0` and `base` suffix to default tokens:

  Primitives:

  - `lp-color-black-0`
  - `lp-color-white-0`

  Aliases:

  - `lp-color-bg-interactive-primary-base`
  - `lp-color-bg-interactive-secondary-base`
  - `lp-color-bg-interactive-tertiary-base`
  - `lp-color-bg-interactive-destructive-base`
  - `lp-color-bg-field-base`
  - `lp-color-border-field-base`
  - `lp-color-border-interactive-primary-base`
  - `lp-color-border-interactive-secondary-base`
  - `lp-color-fill-field-base`
  - `lp-color-text-feedback-base`
  - `lp-color-text-interactive-base`
  - `lp-color-text-ui-primary-base`
  - `lp-color-text-field-base`

- Updated dependencies [[`f95ac68d`](https://github.com/launchdarkly/launchpad-ui/commit/f95ac68d2ddae67ae99520dca76721f6e07525cc), [`8f489f12`](https://github.com/launchdarkly/launchpad-ui/commit/8f489f1263f8641ed6b16f21765b41e23c0e7409)]:
  - @launchpad-ui/form@0.9.0
  - @launchpad-ui/icons@0.9.0
  - @launchpad-ui/tokens@0.6.0
  - @launchpad-ui/popover@0.10.7
  - @launchpad-ui/tooltip@0.7.17

## 0.10.7

### Patch Changes

- Updated dependencies [[`2c189dc2`](https://github.com/launchdarkly/launchpad-ui/commit/2c189dc22de54ff76497a5f0326fcbfae6afca15)]:
  - @launchpad-ui/form@0.8.18

## 0.10.6

### Patch Changes

- Updated dependencies [[`068bf1cc`](https://github.com/launchdarkly/launchpad-ui/commit/068bf1cc5418a264c5be167cd5030b4f56bef03f)]:
  - @launchpad-ui/tokens@0.5.8
  - @launchpad-ui/form@0.8.17
  - @launchpad-ui/icons@0.8.8
  - @launchpad-ui/popover@0.10.6
  - @launchpad-ui/tooltip@0.7.16

## 0.10.5

### Patch Changes

- [#900](https://github.com/launchdarkly/launchpad-ui/pull/900) [`4c9695e7`](https://github.com/launchdarkly/launchpad-ui/commit/4c9695e777b80c7a64d5ec6ef707acb0cce9dec0) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

- Updated dependencies [[`864b63c5`](https://github.com/launchdarkly/launchpad-ui/commit/864b63c5bdcdf0d52b322be6469b6edfedad4f31), [`4c9695e7`](https://github.com/launchdarkly/launchpad-ui/commit/4c9695e777b80c7a64d5ec6ef707acb0cce9dec0)]:
  - @launchpad-ui/tokens@0.5.7
  - @launchpad-ui/form@0.8.16
  - @launchpad-ui/icons@0.8.7
  - @launchpad-ui/popover@0.10.5
  - @launchpad-ui/tooltip@0.7.15

## 0.10.4

### Patch Changes

- Updated dependencies [[`3d3c0b5d`](https://github.com/launchdarkly/launchpad-ui/commit/3d3c0b5de4c95d4d75e97f2e3b166e36d3c32726), [`f0d6fffb`](https://github.com/launchdarkly/launchpad-ui/commit/f0d6fffb04a96184caedc5d5c95c231240c6e28f)]:
  - @launchpad-ui/popover@0.10.4
  - @launchpad-ui/tooltip@0.7.14

## 0.10.3

### Patch Changes

- [#863](https://github.com/launchdarkly/launchpad-ui/pull/863) [`9b488612`](https://github.com/launchdarkly/launchpad-ui/commit/9b488612b0b685c6f0c1c08086c7696eb7dc3a61) Thanks [@renovate](https://github.com/apps/renovate)! - Update React Aria to v3.25.0

- Updated dependencies [[`16578d54`](https://github.com/launchdarkly/launchpad-ui/commit/16578d54e9c7d51c9c3f29b8891f93d6caaafca9), [`9b488612`](https://github.com/launchdarkly/launchpad-ui/commit/9b488612b0b685c6f0c1c08086c7696eb7dc3a61), [`8168b7a0`](https://github.com/launchdarkly/launchpad-ui/commit/8168b7a01eb59ec1a417604ba2414b1e7420733f)]:
  - @launchpad-ui/form@0.8.15
  - @launchpad-ui/popover@0.10.3
  - @launchpad-ui/tooltip@0.7.13

## 0.10.2

### Patch Changes

- Updated dependencies [[`ac2dea48`](https://github.com/launchdarkly/launchpad-ui/commit/ac2dea48df7325bf6d47b3587be310ea35c33143)]:
  - @launchpad-ui/form@0.8.14

## 0.10.1

### Patch Changes

- Updated dependencies [[`be9448b1`](https://github.com/launchdarkly/launchpad-ui/commit/be9448b154e7ea5ff56a65448e83da2808bd1782)]:
  - @launchpad-ui/form@0.8.13
  - @launchpad-ui/popover@0.10.2
  - @launchpad-ui/tooltip@0.7.12

## 0.10.0

### Minor Changes

- [#846](https://github.com/launchdarkly/launchpad-ui/pull/846) [`92f717d8`](https://github.com/launchdarkly/launchpad-ui/commit/92f717d89956143995afa1a5e4b46b59ce89f1a5) Thanks [@jagarnica](https://github.com/jagarnica)! - [Menu] Fix clipping for menu items when virtualized

## 0.9.0

### Minor Changes

- [#835](https://github.com/launchdarkly/launchpad-ui/pull/835) [`25296f82`](https://github.com/launchdarkly/launchpad-ui/commit/25296f82d0fb7c361055efbf46da296db81f757f) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Menu] Deprecate MenuItemLink in favor of using `asChild`

## 0.8.11

### Patch Changes

- [#836](https://github.com/launchdarkly/launchpad-ui/pull/836) [`5eaa7d1a`](https://github.com/launchdarkly/launchpad-ui/commit/5eaa7d1a663467f1d60f02ec8321a822196a54f0) Thanks [@jagarnica](https://github.com/jagarnica)! - [Filter] add searchId prop to associate label with search field

## 0.8.10

### Patch Changes

- Updated dependencies [[`2c8bf545`](https://github.com/launchdarkly/launchpad-ui/commit/2c8bf54535a7e7cdb7f1da23d00e7ede36bdffc8)]:
  - @launchpad-ui/icons@0.8.6
  - @launchpad-ui/form@0.8.12

## 0.8.9

### Patch Changes

- Updated dependencies [[`ebf41fff`](https://github.com/launchdarkly/launchpad-ui/commit/ebf41fff2abc752874849572eaa6b62e7f876223)]:
  - @launchpad-ui/icons@0.8.5
  - @launchpad-ui/form@0.8.11

## 0.8.8

### Patch Changes

- Updated dependencies [[`dff6096f`](https://github.com/launchdarkly/launchpad-ui/commit/dff6096f806ad84b5238fb4f2320e70c907af4dc)]:
  - @launchpad-ui/popover@0.10.1
  - @launchpad-ui/tooltip@0.7.11

## 0.8.7

### Patch Changes

- Updated dependencies [[`72d37d74`](https://github.com/launchdarkly/launchpad-ui/commit/72d37d74c553e2a3c5cfe0f8bc77ee3a47222d80), [`1314c9f0`](https://github.com/launchdarkly/launchpad-ui/commit/1314c9f0515e47d4d5cfde99e33be537b4df78c9), [`35dafc44`](https://github.com/launchdarkly/launchpad-ui/commit/35dafc4417a11926f6b43815ee5856ce0e8b3fe9), [`1314c9f0`](https://github.com/launchdarkly/launchpad-ui/commit/1314c9f0515e47d4d5cfde99e33be537b4df78c9), [`3269e0b5`](https://github.com/launchdarkly/launchpad-ui/commit/3269e0b5cc32b19241e7f0fa8de72d0127c76859)]:
  - @launchpad-ui/tokens@0.5.6
  - @launchpad-ui/popover@0.10.0
  - @launchpad-ui/icons@0.8.4
  - @launchpad-ui/form@0.8.10
  - @launchpad-ui/tooltip@0.7.10

## 0.8.6

### Patch Changes

- Updated dependencies [[`7760fefe`](https://github.com/launchdarkly/launchpad-ui/commit/7760fefea91fddf17f15163ce05f555215dc4b90), [`6bd95d9f`](https://github.com/launchdarkly/launchpad-ui/commit/6bd95d9f8c3911c8d53d61f59b304881043c6fd9)]:
  - @launchpad-ui/tokens@0.5.5
  - @launchpad-ui/icons@0.8.3
  - @launchpad-ui/form@0.8.9
  - @launchpad-ui/popover@0.9.8
  - @launchpad-ui/tooltip@0.7.9

## 0.8.5

### Patch Changes

- [#780](https://github.com/launchdarkly/launchpad-ui/pull/780) [`b2c0418c`](https://github.com/launchdarkly/launchpad-ui/commit/b2c0418c94e0daefdfd9a42c93bb8fdfd24cbaa7) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Revert back to focus trap version 3.10.0

- Updated dependencies []:
  - @launchpad-ui/popover@0.9.7
  - @launchpad-ui/tooltip@0.7.8

## 0.8.4

### Patch Changes

- Updated dependencies [[`e3f04b71`](https://github.com/launchdarkly/launchpad-ui/commit/e3f04b71608540f8bee79a01f577ee0eb3609833)]:
  - @launchpad-ui/form@0.8.8

## 0.8.3

### Patch Changes

- Updated dependencies [[`42c857c3`](https://github.com/launchdarkly/launchpad-ui/commit/42c857c3100b6fcab4bb7609482d34cce0ccfe79)]:
  - @launchpad-ui/icons@0.8.2
  - @launchpad-ui/form@0.8.7

## 0.8.2

### Patch Changes

- [#767](https://github.com/launchdarkly/launchpad-ui/pull/767) [`b6a6b17f`](https://github.com/launchdarkly/launchpad-ui/commit/b6a6b17f4635dc1c32365a81cecaf22a9c088b3b) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Bump react-aria and react-stately versions

- Updated dependencies [[`b6a6b17f`](https://github.com/launchdarkly/launchpad-ui/commit/b6a6b17f4635dc1c32365a81cecaf22a9c088b3b)]:
  - @launchpad-ui/form@0.8.6
  - @launchpad-ui/popover@0.9.6
  - @launchpad-ui/tooltip@0.7.7

## 0.8.1

### Patch Changes

- Updated dependencies [[`ac2cab06`](https://github.com/launchdarkly/launchpad-ui/commit/ac2cab06ac8794a84948a59417a62e13fc08dac7)]:
  - @launchpad-ui/popover@0.9.5
  - @launchpad-ui/tooltip@0.7.6

## 0.8.0

### Minor Changes

- [#763](https://github.com/launchdarkly/launchpad-ui/pull/763) [`09f3490c`](https://github.com/launchdarkly/launchpad-ui/commit/09f3490cb0c015ec34c96ad218b7173562752f4c) Thanks [@apucacao](https://github.com/apucacao)! - update to react-router-dom@6.9.0

## 0.7.12

### Patch Changes

- Updated dependencies [[`c120d56c`](https://github.com/launchdarkly/launchpad-ui/commit/c120d56c7b4045cefa5520954dc7683159768625)]:
  - @launchpad-ui/tokens@0.5.4
  - @launchpad-ui/form@0.8.5
  - @launchpad-ui/icons@0.8.1
  - @launchpad-ui/popover@0.9.4
  - @launchpad-ui/tooltip@0.7.5

## 0.7.11

### Patch Changes

- Updated dependencies [[`f07d8c7d`](https://github.com/launchdarkly/launchpad-ui/commit/f07d8c7df396ada9d30780d56e97470382a6b350), [`5d7c3eed`](https://github.com/launchdarkly/launchpad-ui/commit/5d7c3eed060658abcaa2dc13c6471e424405f54b)]:
  - @launchpad-ui/icons@0.8.0
  - @launchpad-ui/form@0.8.4

## 0.7.10

### Patch Changes

- Updated dependencies [[`d5bd5d0d`](https://github.com/launchdarkly/launchpad-ui/commit/d5bd5d0de1cedc2d341beced3ac8239167a85108), [`304c87bc`](https://github.com/launchdarkly/launchpad-ui/commit/304c87bcd9050fd64c1ce997bb96c6b6e3aa9701)]:
  - @launchpad-ui/tokens@0.5.3
  - @launchpad-ui/icons@0.7.5
  - @launchpad-ui/form@0.8.3
  - @launchpad-ui/popover@0.9.3
  - @launchpad-ui/tooltip@0.7.4

## 0.7.9

### Patch Changes

- Updated dependencies [[`152aef91`](https://github.com/launchdarkly/launchpad-ui/commit/152aef9126c5291586b09b703795030f52a01bb1)]:
  - @launchpad-ui/tokens@0.5.2
  - @launchpad-ui/form@0.8.2
  - @launchpad-ui/icons@0.7.4
  - @launchpad-ui/popover@0.9.2
  - @launchpad-ui/tooltip@0.7.3

## 0.7.8

### Patch Changes

- Updated dependencies [[`909a0fde`](https://github.com/launchdarkly/launchpad-ui/commit/909a0fdebf57634d5c100626cb432c35eac1c661)]:
  - @launchpad-ui/tokens@0.5.1
  - @launchpad-ui/form@0.8.1
  - @launchpad-ui/icons@0.7.3
  - @launchpad-ui/popover@0.9.1
  - @launchpad-ui/tooltip@0.7.2

## 0.7.7

### Patch Changes

- Updated dependencies [[`74ddde60`](https://github.com/launchdarkly/launchpad-ui/commit/74ddde60d233fd489860f89aacb908e20f525674)]:
  - @launchpad-ui/tooltip@0.7.1

## 0.7.6

### Patch Changes

- Updated dependencies [[`3cf45ed4`](https://github.com/launchdarkly/launchpad-ui/commit/3cf45ed4df4c4472cb8dcf48ef1cd5e7916a35ad)]:
  - @launchpad-ui/popover@0.9.0
  - @launchpad-ui/tooltip@0.7.0
  - @launchpad-ui/tokens@0.5.0
  - @launchpad-ui/form@0.8.0
  - @launchpad-ui/icons@0.7.2

## 0.7.5

### Patch Changes

- Updated dependencies [[`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10)]:
  - @launchpad-ui/popover@0.8.37
  - @launchpad-ui/tooltip@0.6.38
  - @launchpad-ui/tokens@0.4.10
  - @launchpad-ui/icons@0.7.1
  - @launchpad-ui/form@0.7.4

## 0.7.4

### Patch Changes

- Updated dependencies [[`2b29f91e`](https://github.com/launchdarkly/launchpad-ui/commit/2b29f91e21002d352f18c2dbfd0ed807f0598da0)]:
  - @launchpad-ui/icons@0.7.0
  - @launchpad-ui/form@0.7.3

## 0.7.3

### Patch Changes

- Updated dependencies [[`d06d6a42`](https://github.com/launchdarkly/launchpad-ui/commit/d06d6a42824309be167d754c4642ab6b97375e1f)]:
  - @launchpad-ui/icons@0.6.21
  - @launchpad-ui/form@0.7.2

## 0.7.2

### Patch Changes

- Updated dependencies [[`3790e0d2`](https://github.com/launchdarkly/launchpad-ui/commit/3790e0d294726e6722d45a7aa66e5ce51194c464)]:
  - @launchpad-ui/icons@0.6.20
  - @launchpad-ui/form@0.7.1

## 0.7.1

### Patch Changes

- Updated dependencies [[`f0505293`](https://github.com/launchdarkly/launchpad-ui/commit/f050529389a66fec35bcd8392839e80f875f2562)]:
  - @launchpad-ui/popover@0.8.36
  - @launchpad-ui/tooltip@0.6.37

## 0.7.0

### Minor Changes

- [#690](https://github.com/launchdarkly/launchpad-ui/pull/690) [`9408be46`](https://github.com/launchdarkly/launchpad-ui/commit/9408be4695f3fb43023c127edef98e081b5706a0) Thanks [@kwatkins-ld](https://github.com/kwatkins-ld)! - update to react-router-dom@6.7.0

## 0.6.50

### Patch Changes

- Updated dependencies [[`6ac80f0e`](https://github.com/launchdarkly/launchpad-ui/commit/6ac80f0e18a65afea1e6a764b216d03f6d6081b5)]:
  - @launchpad-ui/form@0.7.0

## 0.6.49

### Patch Changes

- Updated dependencies [[`4bde854c`](https://github.com/launchdarkly/launchpad-ui/commit/4bde854c1bd1f41397b0a6347b35f84e8275a9da)]:
  - @launchpad-ui/form@0.6.35

## 0.6.48

### Patch Changes

- Updated dependencies [[`990af4a5`](https://github.com/launchdarkly/launchpad-ui/commit/990af4a5c7490a322604272cf9edc16ce9427cf1)]:
  - @launchpad-ui/icons@0.6.19
  - @launchpad-ui/form@0.6.34

## 0.6.47

### Patch Changes

- Updated dependencies [[`20439f2d`](https://github.com/launchdarkly/launchpad-ui/commit/20439f2d0533bf574b613d16d5d31eb688cb629f), [`808902f7`](https://github.com/launchdarkly/launchpad-ui/commit/808902f71c0b410adf86b0ee1683a2d36c4cdb22)]:
  - @launchpad-ui/popover@0.8.35
  - @launchpad-ui/tooltip@0.6.36
  - @launchpad-ui/tokens@0.4.9
  - @launchpad-ui/form@0.6.33
  - @launchpad-ui/icons@0.6.18

## 0.6.46

### Patch Changes

- Updated dependencies [[`f873c6f3`](https://github.com/launchdarkly/launchpad-ui/commit/f873c6f3af18b55e72883464e9698ea172021c8e)]:
  - @launchpad-ui/icons@0.6.17
  - @launchpad-ui/form@0.6.32

## 0.6.45

### Patch Changes

- Updated dependencies [[`cd1b58c5`](https://github.com/launchdarkly/launchpad-ui/commit/cd1b58c5c117d37b2939fe879606011c49b18ced)]:
  - @launchpad-ui/icons@0.6.16
  - @launchpad-ui/form@0.6.31

## 0.6.44

### Patch Changes

- [#649](https://github.com/launchdarkly/launchpad-ui/pull/649) [`020d99e2`](https://github.com/launchdarkly/launchpad-ui/commit/020d99e2fc88a9ee18d4b127c24312b27d836c57) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Menu] update divider color

## 0.6.43

### Patch Changes

- Updated dependencies [[`ab07d28a`](https://github.com/launchdarkly/launchpad-ui/commit/ab07d28ac113d528566fd990fd8ac9a6de86bd33)]:
  - @launchpad-ui/popover@0.8.34
  - @launchpad-ui/tooltip@0.6.35

## 0.6.42

### Patch Changes

- Updated dependencies [[`f2ae1a80`](https://github.com/launchdarkly/launchpad-ui/commit/f2ae1a80d678a1a61dee407b8574e4c52f55299f)]:
  - @launchpad-ui/form@0.6.30
  - @launchpad-ui/popover@0.8.33
  - @launchpad-ui/tokens@0.4.8
  - @launchpad-ui/tooltip@0.6.34
  - @launchpad-ui/icons@0.6.15

## 0.6.41

### Patch Changes

- [#633](https://github.com/launchdarkly/launchpad-ui/pull/633) [`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update third party dependencies to pin versions to match consumer app

- Updated dependencies [[`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15)]:
  - @launchpad-ui/form@0.6.29
  - @launchpad-ui/icons@0.6.14
  - @launchpad-ui/popover@0.8.32
  - @launchpad-ui/tooltip@0.6.33

## 0.6.40

### Patch Changes

- [#629](https://github.com/launchdarkly/launchpad-ui/pull/629) [`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update Vite build tool to 4.0

- Updated dependencies [[`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde), [`b744011d`](https://github.com/launchdarkly/launchpad-ui/commit/b744011dccd525faa534f8def5ee8af2e346268a), [`94fe4b9a`](https://github.com/launchdarkly/launchpad-ui/commit/94fe4b9ada726c190701555c0f5bdca3e8ec610d)]:
  - @launchpad-ui/form@0.6.28
  - @launchpad-ui/icons@0.6.13
  - @launchpad-ui/popover@0.8.31
  - @launchpad-ui/tokens@0.4.7
  - @launchpad-ui/tooltip@0.6.32

## 0.6.39

### Patch Changes

- Updated dependencies [[`9064d45c`](https://github.com/launchdarkly/launchpad-ui/commit/9064d45cf157f7ded1a11a100940bd144f410fd6)]:
  - @launchpad-ui/form@0.6.27
  - @launchpad-ui/tokens@0.4.6
  - @launchpad-ui/icons@0.6.12
  - @launchpad-ui/popover@0.8.30
  - @launchpad-ui/tooltip@0.6.31

## 0.6.38

### Patch Changes

- Updated dependencies [[`c48e0b4f`](https://github.com/launchdarkly/launchpad-ui/commit/c48e0b4fff3e0792b453f9173459fd197871f3d0)]:
  - @launchpad-ui/form@0.6.26
  - @launchpad-ui/tokens@0.4.5
  - @launchpad-ui/icons@0.6.11
  - @launchpad-ui/popover@0.8.29
  - @launchpad-ui/tooltip@0.6.30

## 0.6.37

### Patch Changes

- Updated dependencies [[`57484ab9`](https://github.com/launchdarkly/launchpad-ui/commit/57484ab9998ef50a32ab51bb9c0286b7be84fdb2), [`4c2dc031`](https://github.com/launchdarkly/launchpad-ui/commit/4c2dc0315fe0742ad78b706552d7c7e8e87f8e0e)]:
  - @launchpad-ui/tokens@0.4.4
  - @launchpad-ui/form@0.6.25
  - @launchpad-ui/icons@0.6.10
  - @launchpad-ui/popover@0.8.28
  - @launchpad-ui/tooltip@0.6.29

## 0.6.36

### Patch Changes

- Updated dependencies [[`9b37d196`](https://github.com/launchdarkly/launchpad-ui/commit/9b37d196a691fd6a4ca0f989c4121b8683d8f7cb)]:
  - @launchpad-ui/tokens@0.4.3
  - @launchpad-ui/form@0.6.24
  - @launchpad-ui/icons@0.6.9
  - @launchpad-ui/popover@0.8.27
  - @launchpad-ui/tooltip@0.6.28

## 0.6.35

### Patch Changes

- Updated dependencies [[`c0840e07`](https://github.com/launchdarkly/launchpad-ui/commit/c0840e07ba5a4f3da47b792d27680bc2549169f5)]:
  - @launchpad-ui/tokens@0.4.2
  - @launchpad-ui/form@0.6.23
  - @launchpad-ui/icons@0.6.8
  - @launchpad-ui/popover@0.8.26
  - @launchpad-ui/tooltip@0.6.27

## 0.6.34

### Patch Changes

- Updated dependencies [[`353eccef`](https://github.com/launchdarkly/launchpad-ui/commit/353eccefd155dd95c0221c7e8960ca14afb4baad)]:
  - @launchpad-ui/popover@0.8.25
  - @launchpad-ui/tokens@0.4.1
  - @launchpad-ui/tooltip@0.6.26
  - @launchpad-ui/form@0.6.22
  - @launchpad-ui/icons@0.6.7

## 0.6.33

### Patch Changes

- [#595](https://github.com/launchdarkly/launchpad-ui/pull/595) [`9c9429e3`](https://github.com/launchdarkly/launchpad-ui/commit/9c9429e3707c9f229357875f9278755b3f3d7eda) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update theme tokens

  [Tokens]:

  - Add `lp-color-shadow-ui-primary`
  - Add a dark theme value to `lp-color-border-ui-primary`
  - Rename `lp-border-radius` to `lp-border-radius-regular` and add `lp-border-radius-medium`

  [Alert]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Button]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Chip]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Alert]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Form]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Menu]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Popover]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Clipboard]: Support theming in `CopyCodeButton`

  [Filter]:

  - Rename `lp-border-radius` to `lp-border-radius-regular`
  - Support theming in filter button and applied filter button components

  [Modal]: Support theming for border and box shadow on modal

  [Notification]:

  - Rename `lp-border-radius` to `lp-border-radius-regular`
  - Improve theming for links in notifications

- Updated dependencies [[`71549774`](https://github.com/launchdarkly/launchpad-ui/commit/71549774aad5dcd0887379beba474e2371d320e6), [`9c9429e3`](https://github.com/launchdarkly/launchpad-ui/commit/9c9429e3707c9f229357875f9278755b3f3d7eda)]:
  - @launchpad-ui/tokens@0.4.0
  - @launchpad-ui/form@0.6.21
  - @launchpad-ui/popover@0.8.24
  - @launchpad-ui/icons@0.6.6
  - @launchpad-ui/tooltip@0.6.25

## 0.6.32

### Patch Changes

- Updated dependencies [[`6dc1470`](https://github.com/launchdarkly/launchpad-ui/commit/6dc1470e52b9f2f1b4dae8800fa8fd6d2bc74a46)]:
  - @launchpad-ui/tokens@0.3.2
  - @launchpad-ui/form@0.6.20
  - @launchpad-ui/icons@0.6.5
  - @launchpad-ui/popover@0.8.23
  - @launchpad-ui/tooltip@0.6.24

## 0.6.31

### Patch Changes

- Updated dependencies [[`da177e9`](https://github.com/launchdarkly/launchpad-ui/commit/da177e9c71e37f0ca4de21f5ab938f29f911ddf1)]:
  - @launchpad-ui/icons@0.6.4
  - @launchpad-ui/form@0.6.19

## 0.6.30

### Patch Changes

- [`6f95e6f`](https://github.com/launchdarkly/launchpad-ui/commit/6f95e6f608459ec4e812ae36e79cad0e128db377) Thanks [@renovate[bot]](https://github.com/renovate%5Bbot%5D)! - Update dependencies

- Updated dependencies [[`6f95e6f`](https://github.com/launchdarkly/launchpad-ui/commit/6f95e6f608459ec4e812ae36e79cad0e128db377)]:
  - @launchpad-ui/form@0.6.18
  - @launchpad-ui/popover@0.8.22
  - @launchpad-ui/tooltip@0.6.23

## 0.6.29

### Patch Changes

- Updated dependencies [[`3a11bcf`](https://github.com/launchdarkly/launchpad-ui/commit/3a11bcf9085da9058c716841bf5d6b03ef5459a9), [`d1526c2`](https://github.com/launchdarkly/launchpad-ui/commit/d1526c21a4d637ce67d13c65dd8d34c4797d44ec)]:
  - @launchpad-ui/icons@0.6.3
  - @launchpad-ui/form@0.6.17

## 0.6.28

### Patch Changes

- [#574](https://github.com/launchdarkly/launchpad-ui/pull/574) [`3b0f5bb`](https://github.com/launchdarkly/launchpad-ui/commit/3b0f5bb1d4747bd83a2bdb1119df0b75d5ac7020) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Menu] Pin react-router-dom dependency to 6.4.2
  [Navigation] Pin react-router-dom dependency to 6.4.2

## 0.6.27

### Patch Changes

- Updated dependencies [[`d80297f`](https://github.com/launchdarkly/launchpad-ui/commit/d80297fad893c9db566ed029e302702d5f245a98)]:
  - @launchpad-ui/popover@0.8.21
  - @launchpad-ui/tokens@0.3.1
  - @launchpad-ui/tooltip@0.6.22
  - @launchpad-ui/form@0.6.16
  - @launchpad-ui/icons@0.6.2

## 0.6.26

### Patch Changes

- Updated dependencies [[`baeacd7`](https://github.com/launchdarkly/launchpad-ui/commit/baeacd7b80d60f36f4962f090d87a0009f28b44e)]:
  - @launchpad-ui/tokens@0.3.0
  - @launchpad-ui/form@0.6.15
  - @launchpad-ui/icons@0.6.1
  - @launchpad-ui/popover@0.8.20
  - @launchpad-ui/tooltip@0.6.21

## 0.6.25

### Patch Changes

- Updated dependencies [[`0deac4f`](https://github.com/launchdarkly/launchpad-ui/commit/0deac4f7cb58781e56d864f50b659f5c885339dc)]:
  - @launchpad-ui/icons@0.6.0
  - @launchpad-ui/popover@0.8.19
  - @launchpad-ui/form@0.6.14
  - @launchpad-ui/tooltip@0.6.20

## 0.6.24

### Patch Changes

- Updated dependencies [[`d87e683`](https://github.com/launchdarkly/launchpad-ui/commit/d87e68388354cd5318e60344f8d855bd27521d19)]:
  - @launchpad-ui/popover@0.8.18
  - @launchpad-ui/tooltip@0.6.19

## 0.6.23

### Patch Changes

- Updated dependencies [[`4090f93`](https://github.com/launchdarkly/launchpad-ui/commit/4090f93ba98ea6f75a7f9f7b902fafcfb9b005b3)]:
  - @launchpad-ui/tokens@0.2.0
  - @launchpad-ui/form@0.6.13
  - @launchpad-ui/icons@0.5.9
  - @launchpad-ui/popover@0.8.17
  - @launchpad-ui/tooltip@0.6.18

## 0.6.22

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.16
  - @launchpad-ui/tooltip@0.6.17

## 0.6.21

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.15
  - @launchpad-ui/tooltip@0.6.16

## 0.6.20

### Patch Changes

- Updated dependencies [[`b7302a3`](https://github.com/launchdarkly/launchpad-ui/commit/b7302a3015591df0b24e19a4444029c21d0cf9de)]:
  - @launchpad-ui/icons@0.5.8
  - @launchpad-ui/form@0.6.12
  - @launchpad-ui/popover@0.8.14
  - @launchpad-ui/tooltip@0.6.15

## 0.6.19

### Patch Changes

- [#509](https://github.com/launchdarkly/launchpad-ui/pull/509) [`1e5796b`](https://github.com/launchdarkly/launchpad-ui/commit/1e5796b7b99a2704bba22623a518ff7e8776ebf8) Thanks [@Niznikr](https://github.com/Niznikr)! - Update dependencies

- Updated dependencies [[`1e5796b`](https://github.com/launchdarkly/launchpad-ui/commit/1e5796b7b99a2704bba22623a518ff7e8776ebf8)]:
  - @launchpad-ui/form@0.6.11
  - @launchpad-ui/popover@0.8.13
  - @launchpad-ui/tooltip@0.6.14

## 0.6.18

### Patch Changes

- Updated dependencies [[`5e82186`](https://github.com/launchdarkly/launchpad-ui/commit/5e82186a765012cf79501dccf2a3305e66b16fc6)]:
  - @launchpad-ui/popover@0.8.12
  - @launchpad-ui/tooltip@0.6.13

## 0.6.17

### Patch Changes

- Updated dependencies [[`a1d141d`](https://github.com/launchdarkly/launchpad-ui/commit/a1d141d98a77c134c6a0b2ef403d1c443e114425)]:
  - @launchpad-ui/form@0.6.10

## 0.6.16

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.11
  - @launchpad-ui/tooltip@0.6.12

## 0.6.15

### Patch Changes

- Updated dependencies [[`f51d3be`](https://github.com/launchdarkly/launchpad-ui/commit/f51d3be21a948a316880c6e245fc2b7a326619fe)]:
  - @launchpad-ui/form@0.6.9

## 0.6.14

### Patch Changes

- Updated dependencies [[`6c602af`](https://github.com/launchdarkly/launchpad-ui/commit/6c602afba6b7073314b0e5592c98a616aff586c1)]:
  - @launchpad-ui/icons@0.5.7
  - @launchpad-ui/form@0.6.8
  - @launchpad-ui/popover@0.8.10
  - @launchpad-ui/tooltip@0.6.11

## 0.6.13

### Patch Changes

- Updated dependencies [[`f67056a`](https://github.com/launchdarkly/launchpad-ui/commit/f67056ae6df4c2647833d7fe3f742af8e686824f)]:
  - @launchpad-ui/icons@0.5.6
  - @launchpad-ui/form@0.6.7
  - @launchpad-ui/popover@0.8.9
  - @launchpad-ui/tooltip@0.6.10

## 0.6.12

### Patch Changes

- [#472](https://github.com/launchdarkly/launchpad-ui/pull/472) [`1469d32`](https://github.com/launchdarkly/launchpad-ui/commit/1469d3230348a3f4fd37d7c8e963002c8dd1432e) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Filter] Convert to CSS Modules
  [Menu] Removed Filter styles from CSS

## 0.6.11

### Patch Changes

- Updated dependencies [[`c5c07b0`](https://github.com/launchdarkly/launchpad-ui/commit/c5c07b0a47bcde0fbc7f0e6144ad8349e26b637e)]:
  - @launchpad-ui/popover@0.8.8
  - @launchpad-ui/tooltip@0.6.9

## 0.6.10

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.7
  - @launchpad-ui/tooltip@0.6.8

## 0.6.9

### Patch Changes

- [#467](https://github.com/launchdarkly/launchpad-ui/pull/467) [`c9ebe17`](https://github.com/launchdarkly/launchpad-ui/commit/c9ebe17c51b4b974036d8ffb598cedbbb0932f44) Thanks [@apucacao](https://github.com/apucacao)! - [Navigation] Upgrade React Router to 6.4
  [Menu] Upgrade React Router to 6.4

## 0.6.8

### Patch Changes

- [#449](https://github.com/launchdarkly/launchpad-ui/pull/449) [`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Pin monorepo packages

- Updated dependencies [[`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa), [`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa)]:
  - @launchpad-ui/icons@0.5.5
  - @launchpad-ui/form@0.6.6
  - @launchpad-ui/popover@0.8.6
  - @launchpad-ui/tooltip@0.6.7

## 0.6.7-alpha.1

### Patch Changes

- Updated dependencies [[`ba1abe9`](https://github.com/launchdarkly/launchpad-ui/commit/ba1abe951c8e88a543654dada0030fdfa66627d9)]:
  - @launchpad-ui/icons@0.5.4-alpha.2
  - @launchpad-ui/form@0.6.5-alpha.2
  - @launchpad-ui/popover@0.8.5-alpha.1
  - @launchpad-ui/tooltip@0.6.6-alpha.1

## 0.6.7

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.5
  - @launchpad-ui/tooltip@0.6.6

## 0.6.6

### Patch Changes

- Updated dependencies [[`519cac2`](https://github.com/launchdarkly/launchpad-ui/commit/519cac2751d8e33be95850b4671e608c55dd9e4b), [`8548b71`](https://github.com/launchdarkly/launchpad-ui/commit/8548b71cbb0dd329e64ded5568f9ee6320fc2a13)]:
  - @launchpad-ui/icons@0.5.4
  - @launchpad-ui/form@0.6.5
  - @launchpad-ui/popover@0.8.4
  - @launchpad-ui/tooltip@0.6.5

## 0.6.5

### Patch Changes

- Updated dependencies [[`69c763b`](https://github.com/launchdarkly/launchpad-ui/commit/69c763b62431a9a647313f725c2e15a0c597014d)]:
  - @launchpad-ui/icons@0.5.3
  - @launchpad-ui/form@0.6.4
  - @launchpad-ui/popover@0.8.3
  - @launchpad-ui/tooltip@0.6.4

## 0.6.4

### Patch Changes

- Updated dependencies [[`a7c53bc`](https://github.com/launchdarkly/launchpad-ui/commit/a7c53bcfef64a49c9e87acdd1db1bd9aac83906b)]:
  - @launchpad-ui/tooltip@0.6.3

## 0.6.3

### Patch Changes

- Updated dependencies [[`9bf79e4`](https://github.com/launchdarkly/launchpad-ui/commit/9bf79e4d07192858e723900d8ab4c208872894a5), [`f4334d3`](https://github.com/launchdarkly/launchpad-ui/commit/f4334d3601d1f675eab6d0430354bd80d46bea01)]:
  - @launchpad-ui/icons@0.5.2
  - @launchpad-ui/popover@0.8.2
  - @launchpad-ui/tooltip@0.6.2
  - @launchpad-ui/form@0.6.3

## 0.6.2

### Patch Changes

- Updated dependencies [[`aa81e52`](https://github.com/launchdarkly/launchpad-ui/commit/aa81e527b911d0ec240e5231292071aa2a4e3ccf)]:
  - @launchpad-ui/form@0.6.2

## 0.6.1

### Patch Changes

- [#409](https://github.com/launchdarkly/launchpad-ui/pull/409) [`b641978`](https://github.com/launchdarkly/launchpad-ui/commit/b64197803c1ea2a38f8cc755daca4c55760718ab) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Added explicit `data-test-id` properties to components and reworked e2e test to use them instead of classname, in preparation for removal of stable class names

  [Alert] Add `data-test-id` with default value to components
  [Avatar] Add `data-test-id` with default value to components
  [Banner] Add `data-test-id` with default value to components
  [Button] Add `data-test-id` with default value to components
  [Chip] Add `data-test-id` with default value to components
  [Clipboard] Add `data-test-id` with default value to components
  [Counter] Add `data-test-id` with default value to components
  [Dropdown] Add `data-test-id` with default value to components
  [Filter] Add `data-test-id` with default value to components
  [Form] Add `data-test-id` with default value to components
  [Icons] Add `data-test-id` with default value to components
  [Markdown] Add `data-test-id` with default value to components
  [Menu] Add `data-test-id` with default value to components
  [Modal] Add `data-test-id` with default value to components
  [Navigation] Add `data-test-id` with default value to components
  [Notification] Add `data-test-id` with default value to components
  [Pagination] Add `data-test-id` with default value to components
  [Popover] Add `data-test-id` with default value to components
  [Progress] Add `data-test-id` with default value to components
  [Progress] Add `data-test-id` with default value to components
  [Slider] Add `data-test-id` with default value to components
  [Split] Add `data-test-id` with default value to components
  [Tab] Add `data-test-id` with default value to components
  [Table] Add `data-test-id` with default value to components
  [Toggle] Add `data-test-id` with default value to components
  [Tooltip] Add `data-test-id` with default value to components

- Updated dependencies [[`b641978`](https://github.com/launchdarkly/launchpad-ui/commit/b64197803c1ea2a38f8cc755daca4c55760718ab)]:
  - @launchpad-ui/form@0.6.1
  - @launchpad-ui/icons@0.5.1
  - @launchpad-ui/popover@0.8.1
  - @launchpad-ui/tooltip@0.6.1

## 0.6.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

### Patch Changes

- Updated dependencies [[`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd)]:
  - @launchpad-ui/form@0.6.0
  - @launchpad-ui/icons@0.5.0
  - @launchpad-ui/popover@0.8.0
  - @launchpad-ui/tooltip@0.6.0

## 0.5.7

### Patch Changes

- Updated dependencies [[`91d68ca`](https://github.com/launchdarkly/launchpad-ui/commit/91d68ca61f45c4f7a0f38b4e869f650a5202a74c)]:
  - @launchpad-ui/popover@0.7.6
  - @launchpad-ui/tooltip@0.5.6

## 0.5.7-alpha.0

### Patch Changes

- Updated dependencies [[`e860080`](https://github.com/launchdarkly/launchpad-ui/commit/e86008076dc61cfcfc4c22317021e793d4fd59a9)]:
  - @launchpad-ui/icons@0.4.1-alpha.0
  - @launchpad-ui/form@0.5.1-alpha.0
  - @launchpad-ui/popover@0.7.6-alpha.0
  - @launchpad-ui/tooltip@0.5.6-alpha.0

## 0.5.6

### Patch Changes

- Updated dependencies [[`c392a08`](https://github.com/launchdarkly/launchpad-ui/commit/c392a08a3d83fcd3cbc0213510c5a19174f925af)]:
  - @launchpad-ui/popover@0.7.5
  - @launchpad-ui/tooltip@0.5.5

## 0.5.5

### Patch Changes

- Updated dependencies [[`77d3033`](https://github.com/launchdarkly/launchpad-ui/commit/77d30335d2f4e04b5775d4e3bdde7c35a176f211)]:
  - @launchpad-ui/form@0.5.0

## 0.5.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.7.4
  - @launchpad-ui/tooltip@0.5.4

## 0.5.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.7.3
  - @launchpad-ui/tooltip@0.5.3

## 0.5.2

### Patch Changes

- Updated dependencies [[`28ffe4d`](https://github.com/launchdarkly/launchpad-ui/commit/28ffe4dd8608c71a5ff20c8b574b1a6d0e592a11)]:
  - @launchpad-ui/popover@0.7.2
  - @launchpad-ui/tooltip@0.5.2

## 0.5.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.7.1
  - @launchpad-ui/tooltip@0.5.1

## 0.5.0

### Minor Changes

- [#324](https://github.com/launchdarkly/launchpad-ui/pull/324) [`0ce0a50`](https://github.com/launchdarkly/launchpad-ui/commit/0ce0a50b8401ec39ef290605a2789c987c6264ce) Thanks [@Niznikr](https://github.com/Niznikr)! - Use vite for builds:

  Each package's styles are now located in a single `style.css` within the root:

  Before:

  ```js
  import alertStyles from '@launchpad-ui/alert/styles/Alert.css';
  ```

  After:

  ```js
  import alertStyles from '@launchpad-ui/alert/style.css';
  ```

  The `core` package no longer bundles styles. If you need to import stylesheets for the components (in a Remix app for example) simply import them from the individual packages that come included when you install the `core` package.

### Patch Changes

- Updated dependencies [[`0ce0a50`](https://github.com/launchdarkly/launchpad-ui/commit/0ce0a50b8401ec39ef290605a2789c987c6264ce)]:
  - @launchpad-ui/form@0.4.0
  - @launchpad-ui/icons@0.4.0
  - @launchpad-ui/popover@0.7.0
  - @launchpad-ui/tooltip@0.5.0

## 0.4.8

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.6.6
  - @launchpad-ui/tooltip@0.4.6

## 0.4.7

### Patch Changes

- Updated dependencies [[`5938ae8`](https://github.com/launchdarkly/launchpad-ui/commit/5938ae86eb6c28d57a4ef185c306c8328007cfd9)]:
  - @launchpad-ui/form@0.3.5

## 0.4.6

### Patch Changes

- Updated dependencies [[`f3e9080`](https://github.com/launchdarkly/launchpad-ui/commit/f3e90806342f7faeb20936c0b25d0695e1e83c06)]:
  - @launchpad-ui/form@0.3.4

## 0.4.5

### Patch Changes

- [#306](https://github.com/launchdarkly/launchpad-ui/pull/306) [`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d) Thanks [@Niznikr](https://github.com/Niznikr)! - [Filter, Icons, Menu, Popover] Create ids with useId

* [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

* Updated dependencies [[`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d), [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43)]:
  - @launchpad-ui/icons@0.3.3
  - @launchpad-ui/popover@0.6.5
  - @launchpad-ui/form@0.3.3
  - @launchpad-ui/tooltip@0.4.5

## 0.4.4

### Patch Changes

- Updated dependencies [[`534ebde`](https://github.com/launchdarkly/launchpad-ui/commit/534ebde2f8bb6abb53cb0443f4e3b2eee0a2064f)]:
  - @launchpad-ui/popover@0.6.4
  - @launchpad-ui/tooltip@0.4.4

## 0.4.3

### Patch Changes

- Updated dependencies [[`273180e`](https://github.com/launchdarkly/launchpad-ui/commit/273180e0a8d6851292a6c33bcccaadc9efe215f6), [`c5d00b2`](https://github.com/launchdarkly/launchpad-ui/commit/c5d00b204a9682a5ba3f883de4c830b67caf0c8b)]:
  - @launchpad-ui/popover@0.6.3
  - @launchpad-ui/icons@0.3.2
  - @launchpad-ui/tooltip@0.4.3
  - @launchpad-ui/form@0.3.2

## 0.4.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.6.2
  - @launchpad-ui/tooltip@0.4.2

## 0.4.1

### Patch Changes

- Updated dependencies [[`7fb3d52`](https://github.com/launchdarkly/launchpad-ui/commit/7fb3d5256821e10a4ad4892e47fa88a2a8cee94c)]:
  - @launchpad-ui/icons@0.3.1
  - @launchpad-ui/form@0.3.1
  - @launchpad-ui/popover@0.6.1
  - @launchpad-ui/tooltip@0.4.1

## 0.4.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356), [`dfe9d18`](https://github.com/launchdarkly/launchpad-ui/commit/dfe9d1861a1b3cc3e84583539b2446f63932512e)]:
  - @launchpad-ui/form@0.3.0
  - @launchpad-ui/icons@0.3.0
  - @launchpad-ui/popover@0.6.0
  - @launchpad-ui/tooltip@0.4.0

## 0.3.8

### Patch Changes

- Updated dependencies [[`ff2e97f`](https://github.com/launchdarkly/launchpad-ui/commit/ff2e97f1675f30c95ffa0b7772477a1961d163a3)]:
  - @launchpad-ui/tooltip@0.3.10

## 0.3.7

### Patch Changes

- Updated dependencies [[`d8d52bc`](https://github.com/launchdarkly/launchpad-ui/commit/d8d52bca9583789c0f1cb155812585f03d682f3f)]:
  - @launchpad-ui/popover@0.5.7
  - @launchpad-ui/tooltip@0.3.9

## 0.3.6

### Patch Changes

- [#256](https://github.com/launchdarkly/launchpad-ui/pull/256) [`36ad0da`](https://github.com/launchdarkly/launchpad-ui/commit/36ad0dafa1bb25f68401221df0a221c2924bc163) Thanks [@vroske-ld](https://github.com/vroske-ld)! - Updating styles for Filter components

  - [Filter] Minor updates to styles
  - [Menu] Use TextField in MenuSearch rather than raw input; minor updates to styles

- Updated dependencies [[`a276064`](https://github.com/launchdarkly/launchpad-ui/commit/a27606486f3aa56cd8e7772bbdda0bc0f4aa1ec6), [`ffb8b91`](https://github.com/launchdarkly/launchpad-ui/commit/ffb8b91991020e15a44ded38e02947c445ca1900), [`5e4a3bd`](https://github.com/launchdarkly/launchpad-ui/commit/5e4a3bd1c3c332cb698664a0c753485af3068a82)]:
  - @launchpad-ui/icons@0.2.4
  - @launchpad-ui/tooltip@0.3.8
  - @launchpad-ui/form@0.2.9
  - @launchpad-ui/popover@0.5.6

## 0.3.5

### Patch Changes

- [#241](https://github.com/launchdarkly/launchpad-ui/pull/241) [`58d91e4`](https://github.com/launchdarkly/launchpad-ui/commit/58d91e4e9606bc509f0cb9dfa68a0203df70b97c) Thanks [@Niznikr](https://github.com/Niznikr)! - [Menu] Remove lodash

- Updated dependencies [[`532cbe4`](https://github.com/launchdarkly/launchpad-ui/commit/532cbe4ecb0a41f4eef3725a2ccfacf7d6586011), [`e5e01c2`](https://github.com/launchdarkly/launchpad-ui/commit/e5e01c26a4d20686489aac7d2106b939d5071037)]:
  - @launchpad-ui/popover@0.5.5
  - @launchpad-ui/tooltip@0.3.7

## 0.3.4

### Patch Changes

- [#237](https://github.com/launchdarkly/launchpad-ui/pull/237) [`d2d29a2`](https://github.com/launchdarkly/launchpad-ui/commit/d2d29a2489ab111511e98ce1036d419d97ffa0ed) Thanks [@Niznikr](https://github.com/Niznikr)! - Update `@react-aria` for smaller bundle sizes

* [#230](https://github.com/launchdarkly/launchpad-ui/pull/230) [`8500c8c`](https://github.com/launchdarkly/launchpad-ui/commit/8500c8cea32760b9ca5abf5495045f29062d4c19) Thanks [@Niznikr](https://github.com/Niznikr)! - [Menu] Use simple not selectors to fix item styles

* Updated dependencies [[`d2d29a2`](https://github.com/launchdarkly/launchpad-ui/commit/d2d29a2489ab111511e98ce1036d419d97ffa0ed)]:
  - @launchpad-ui/popover@0.5.4
  - @launchpad-ui/tooltip@0.3.6

## 0.3.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.5.3
  - @launchpad-ui/tooltip@0.3.5

## 0.3.2

### Patch Changes

- Updated dependencies [[`b2a8ff5`](https://github.com/launchdarkly/launchpad-ui/commit/b2a8ff5f87c95be17c5749998f74f8bcedba65e8)]:
  - @launchpad-ui/popover@0.5.2
  - @launchpad-ui/tooltip@0.3.4

## 0.3.1

### Patch Changes

- Updated dependencies [[`f567202`](https://github.com/launchdarkly/launchpad-ui/commit/f567202860088b877a2a4edbbb1c90dc0906ab3b), [`204e574`](https://github.com/launchdarkly/launchpad-ui/commit/204e574344367cdd653b141d067ee6dcef74c17d)]:
  - @launchpad-ui/icons@0.2.3
  - @launchpad-ui/popover@0.5.1
  - @launchpad-ui/tooltip@0.3.3

## 0.3.0

### Minor Changes

- [#211](https://github.com/launchdarkly/launchpad-ui/pull/211) [`b822656`](https://github.com/launchdarkly/launchpad-ui/commit/b82265611bbe1295cf2c4565a0ffed8e19640fd7) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add slot to menu and remove dependency on RR for button & menu

  - [Menu]: Add slot package to remove React Router dependency, add MenuSize enum.
  - [Button]: Remove React Router dependency by generalizing the `to` prop. In the future, we will look into allowing slottable buttons.

### Patch Changes

- Updated dependencies [[`1fbb858`](https://github.com/launchdarkly/launchpad-ui/commit/1fbb858c8baaaa2f7cced15c81d1c2b0d49a7836)]:
  - @launchpad-ui/popover@0.5.0
  - @launchpad-ui/tooltip@0.3.2

## 0.2.8

### Patch Changes

- [#204](https://github.com/launchdarkly/launchpad-ui/pull/204) [`1e74d18`](https://github.com/launchdarkly/launchpad-ui/commit/1e74d1803e22b675abf1195f798da85092a5d33a) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Remove disabling no-descending-specificity rules in packages:

  [Notification]: Refactored stylesheets to remove no-descending-specificity disable rules
  [Form]: Refactored stylesheets to remove no-descending-specificity disable rules
  [ProgressBubbles]: Refactored stylesheets to remove no-descending-specificity disable rules
  [Menu]: Refactored stylesheets to remove no-descending-specificity disable rules

- Updated dependencies [[`590838e`](https://github.com/launchdarkly/launchpad-ui/commit/590838e7744058324fc5223b6cb39f01a88f6e1a)]:
  - @launchpad-ui/popover@0.4.1
  - @launchpad-ui/tooltip@0.3.1

## 0.2.7

### Patch Changes

- Updated dependencies [[`eb6e44c`](https://github.com/launchdarkly/launchpad-ui/commit/eb6e44c7853a7263511cdf7aeaeb0d83a83d78b9)]:
  - @launchpad-ui/popover@0.4.0
  - @launchpad-ui/tooltip@0.3.0

## 0.2.6

### Patch Changes

- [#191](https://github.com/launchdarkly/launchpad-ui/pull/191) [`0b17691`](https://github.com/launchdarkly/launchpad-ui/commit/0b1769100c9d5d21345ad9636de4fc277c19ba5b) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Menu] Add correct header styles for menu item headers

- Updated dependencies [[`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4)]:
  - @launchpad-ui/icons@0.2.2
  - @launchpad-ui/popover@0.3.2
  - @launchpad-ui/tooltip@0.2.6

## 0.2.5

### Patch Changes

- Updated dependencies [[`111376d`](https://github.com/launchdarkly/launchpad-ui/commit/111376d9e26d00f5d7757e127d539daed1e6e3ed)]:
  - @launchpad-ui/tooltip@0.2.5
  - @launchpad-ui/popover@0.3.1

## 0.2.4

### Patch Changes

- Updated dependencies [[`d0cadcb`](https://github.com/launchdarkly/launchpad-ui/commit/d0cadcb6f13297e02fd7e8a0007b06a0bc1c66c6)]:
  - @launchpad-ui/popover@0.3.0
  - @launchpad-ui/tooltip@0.2.4

## 0.2.3

### Patch Changes

- [#152](https://github.com/launchdarkly/launchpad-ui/pull/152) [`dcbbb0d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbbb0ddb030e57bad5a983db873d9311c86df66) Thanks [@Niznikr](https://github.com/Niznikr)! - Upgrade react-router-dom

- Updated dependencies [[`cc0a367`](https://github.com/launchdarkly/launchpad-ui/commit/cc0a367f7d67f8c974b46c0b1ac743e7b020c0f2)]:
  - @launchpad-ui/popover@0.2.3
  - @launchpad-ui/tooltip@0.2.3

## 0.2.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.2.2
  - @launchpad-ui/tooltip@0.2.2

## 0.2.1

### Patch Changes

- [#146](https://github.com/launchdarkly/launchpad-ui/pull/146) [`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alias tokens:

  - Add alias tokens and use in component styles
  - Add dark theme custom properties and deliver as `dark.css`
  - Add theme toggle in Storybook

- Updated dependencies [[`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea)]:
  - @launchpad-ui/icons@0.2.1
  - @launchpad-ui/popover@0.2.1
  - @launchpad-ui/tokens@0.1.5
  - @launchpad-ui/tooltip@0.2.1

## 0.2.0

### Minor Changes

- [#139](https://github.com/launchdarkly/launchpad-ui/pull/139) [`982ce37`](https://github.com/launchdarkly/launchpad-ui/commit/982ce37db3605f091a5689a245e4517f63b67524) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Move stylesheets to styles folder in src for more consistency across packages

### Patch Changes

- Updated dependencies [[`7918749`](https://github.com/launchdarkly/launchpad-ui/commit/79187498674a2218102f2835e58d7a735129d4f4), [`735ebd5`](https://github.com/launchdarkly/launchpad-ui/commit/735ebd5ac2983af54fe1e55ced68435f432476cf), [`982ce37`](https://github.com/launchdarkly/launchpad-ui/commit/982ce37db3605f091a5689a245e4517f63b67524)]:
  - @launchpad-ui/popover@0.2.0
  - @launchpad-ui/icons@0.2.0
  - @launchpad-ui/tooltip@0.2.0

## 0.1.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.1.4
  - @launchpad-ui/tooltip@0.1.4

## 0.1.1

### Patch Changes

- Updated dependencies [[`c325186`](https://github.com/launchdarkly/launchpad-ui/commit/c325186e06042d5b87ec93ed2f7fb150e96c9024)]:
  - @launchpad-ui/icons@0.1.6
  - @launchpad-ui/popover@0.1.3
  - @launchpad-ui/tooltip@0.1.3

## 0.1.0

### Minor Changes

- [#102](https://github.com/launchdarkly/launchpad-ui/pull/102) [`a8a8b06`](https://github.com/launchdarkly/launchpad-ui/commit/a8a8b06d9f6aa83408f029742bd25ef8443721e8) Thanks [@Niznikr](https://github.com/Niznikr)! - Add menu package:

  - Add menu code, stories, and tests

### Patch Changes

- [#109](https://github.com/launchdarkly/launchpad-ui/pull/109) [`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Migrate from classnames to clsx package

* [#107](https://github.com/launchdarkly/launchpad-ui/pull/107) [`dbf5449`](https://github.com/launchdarkly/launchpad-ui/commit/dbf544921e400a5b9709f676e38cbc63207cab10) Thanks [@Niznikr](https://github.com/Niznikr)! - Add dropdown package:

  - Add dropdown code, stories, and tests
  - Fix menu arrow key nav by removing legacy code

* Updated dependencies [[`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28)]:
  - @launchpad-ui/icons@0.1.5
  - @launchpad-ui/popover@0.1.2
  - @launchpad-ui/tooltip@0.1.2
