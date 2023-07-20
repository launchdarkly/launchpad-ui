# @launchpad-ui/split-button

## 0.8.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/button@0.9.2
  - @launchpad-ui/dropdown@0.6.55

## 0.8.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/button@0.9.1
  - @launchpad-ui/dropdown@0.6.54

## 0.8.0

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
  - @launchpad-ui/button@0.9.0
  - @launchpad-ui/tokens@0.6.0
  - @launchpad-ui/popover@0.10.7
  - @launchpad-ui/tooltip@0.7.17
  - @launchpad-ui/dropdown@0.6.53

## 0.7.22

### Patch Changes

- Updated dependencies [[`068bf1cc`](https://github.com/launchdarkly/launchpad-ui/commit/068bf1cc5418a264c5be167cd5030b4f56bef03f)]:
  - @launchpad-ui/tokens@0.5.8
  - @launchpad-ui/button@0.8.15
  - @launchpad-ui/dropdown@0.6.52
  - @launchpad-ui/popover@0.10.6
  - @launchpad-ui/tooltip@0.7.16

## 0.7.21

### Patch Changes

- Updated dependencies [[`864b63c5`](https://github.com/launchdarkly/launchpad-ui/commit/864b63c5bdcdf0d52b322be6469b6edfedad4f31), [`4c9695e7`](https://github.com/launchdarkly/launchpad-ui/commit/4c9695e777b80c7a64d5ec6ef707acb0cce9dec0)]:
  - @launchpad-ui/tokens@0.5.7
  - @launchpad-ui/dropdown@0.6.51
  - @launchpad-ui/button@0.8.14
  - @launchpad-ui/popover@0.10.5
  - @launchpad-ui/tooltip@0.7.15

## 0.7.20

### Patch Changes

- Updated dependencies [[`3d3c0b5d`](https://github.com/launchdarkly/launchpad-ui/commit/3d3c0b5de4c95d4d75e97f2e3b166e36d3c32726), [`f0d6fffb`](https://github.com/launchdarkly/launchpad-ui/commit/f0d6fffb04a96184caedc5d5c95c231240c6e28f)]:
  - @launchpad-ui/popover@0.10.4
  - @launchpad-ui/dropdown@0.6.50
  - @launchpad-ui/tooltip@0.7.14

## 0.7.19

### Patch Changes

- Updated dependencies [[`9b488612`](https://github.com/launchdarkly/launchpad-ui/commit/9b488612b0b685c6f0c1c08086c7696eb7dc3a61), [`8168b7a0`](https://github.com/launchdarkly/launchpad-ui/commit/8168b7a01eb59ec1a417604ba2414b1e7420733f)]:
  - @launchpad-ui/dropdown@0.6.49
  - @launchpad-ui/popover@0.10.3
  - @launchpad-ui/tooltip@0.7.13

## 0.7.18

### Patch Changes

- [#851](https://github.com/launchdarkly/launchpad-ui/pull/851) [`be9448b1`](https://github.com/launchdarkly/launchpad-ui/commit/be9448b154e7ea5ff56a65448e83da2808bd1782) Thanks [@kwatkins-ld](https://github.com/kwatkins-ld)! - use ComponentProps type to simplify intrinsic element props

- Updated dependencies [[`be9448b1`](https://github.com/launchdarkly/launchpad-ui/commit/be9448b154e7ea5ff56a65448e83da2808bd1782)]:
  - @launchpad-ui/button@0.8.13
  - @launchpad-ui/dropdown@0.6.48
  - @launchpad-ui/popover@0.10.2
  - @launchpad-ui/tooltip@0.7.12

## 0.7.17

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/button@0.8.12
  - @launchpad-ui/dropdown@0.6.47

## 0.7.16

### Patch Changes

- Updated dependencies [[`3b05f52e`](https://github.com/launchdarkly/launchpad-ui/commit/3b05f52eb689a71209e205dd01517ab41c285d40)]:
  - @launchpad-ui/button@0.8.11
  - @launchpad-ui/dropdown@0.6.46

## 0.7.15

### Patch Changes

- Updated dependencies [[`dff6096f`](https://github.com/launchdarkly/launchpad-ui/commit/dff6096f806ad84b5238fb4f2320e70c907af4dc)]:
  - @launchpad-ui/popover@0.10.1
  - @launchpad-ui/dropdown@0.6.45
  - @launchpad-ui/tooltip@0.7.11

## 0.7.14

### Patch Changes

- Updated dependencies [[`72d37d74`](https://github.com/launchdarkly/launchpad-ui/commit/72d37d74c553e2a3c5cfe0f8bc77ee3a47222d80), [`1314c9f0`](https://github.com/launchdarkly/launchpad-ui/commit/1314c9f0515e47d4d5cfde99e33be537b4df78c9), [`35dafc44`](https://github.com/launchdarkly/launchpad-ui/commit/35dafc4417a11926f6b43815ee5856ce0e8b3fe9), [`1314c9f0`](https://github.com/launchdarkly/launchpad-ui/commit/1314c9f0515e47d4d5cfde99e33be537b4df78c9)]:
  - @launchpad-ui/button@0.8.10
  - @launchpad-ui/tokens@0.5.6
  - @launchpad-ui/popover@0.10.0
  - @launchpad-ui/dropdown@0.6.44
  - @launchpad-ui/tooltip@0.7.10

## 0.7.13

### Patch Changes

- Updated dependencies [[`7760fefe`](https://github.com/launchdarkly/launchpad-ui/commit/7760fefea91fddf17f15163ce05f555215dc4b90), [`90fb809d`](https://github.com/launchdarkly/launchpad-ui/commit/90fb809d2bd34de9918c9badef9260974372b8eb)]:
  - @launchpad-ui/tokens@0.5.5
  - @launchpad-ui/dropdown@0.6.43
  - @launchpad-ui/button@0.8.9
  - @launchpad-ui/popover@0.9.8
  - @launchpad-ui/tooltip@0.7.9

## 0.7.12

### Patch Changes

- Updated dependencies [[`8704746c`](https://github.com/launchdarkly/launchpad-ui/commit/8704746c5982a6d62ed741d74d99fa69165358d2)]:
  - @launchpad-ui/button@0.8.8
  - @launchpad-ui/dropdown@0.6.42

## 0.7.11

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.9.7
  - @launchpad-ui/dropdown@0.6.41
  - @launchpad-ui/tooltip@0.7.8

## 0.7.10

### Patch Changes

- Updated dependencies [[`a3477a6f`](https://github.com/launchdarkly/launchpad-ui/commit/a3477a6f8e93f8d83501c01e5dae1a9e07480c81)]:
  - @launchpad-ui/button@0.8.7
  - @launchpad-ui/dropdown@0.6.40

## 0.7.9

### Patch Changes

- [#770](https://github.com/launchdarkly/launchpad-ui/pull/770) [`7887aaaa`](https://github.com/launchdarkly/launchpad-ui/commit/7887aaaaddeb58186fe5ac3c1a31b74953f6f837) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Button]: Update IconButton sizing to match button size
  [SplitButton]: Improve height definitions, and use underlying button styles where possible
- Updated dependencies [[`7887aaaa`](https://github.com/launchdarkly/launchpad-ui/commit/7887aaaaddeb58186fe5ac3c1a31b74953f6f837)]:
  - @launchpad-ui/button@0.8.6
  - @launchpad-ui/dropdown@0.6.39

## 0.7.8

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.9.6
  - @launchpad-ui/dropdown@0.6.38
  - @launchpad-ui/tooltip@0.7.7

## 0.7.7

### Patch Changes

- Updated dependencies [[`ac2cab06`](https://github.com/launchdarkly/launchpad-ui/commit/ac2cab06ac8794a84948a59417a62e13fc08dac7)]:
  - @launchpad-ui/popover@0.9.5
  - @launchpad-ui/dropdown@0.6.37
  - @launchpad-ui/tooltip@0.7.6

## 0.7.6

### Patch Changes

- Updated dependencies [[`c120d56c`](https://github.com/launchdarkly/launchpad-ui/commit/c120d56c7b4045cefa5520954dc7683159768625)]:
  - @launchpad-ui/tokens@0.5.4
  - @launchpad-ui/button@0.8.5
  - @launchpad-ui/dropdown@0.6.36
  - @launchpad-ui/popover@0.9.4
  - @launchpad-ui/tooltip@0.7.5

## 0.7.5

### Patch Changes

- Updated dependencies [[`cd812ed3`](https://github.com/launchdarkly/launchpad-ui/commit/cd812ed305b8ecb660986830ed4842d59a150882)]:
  - @launchpad-ui/button@0.8.4
  - @launchpad-ui/dropdown@0.6.35

## 0.7.4

### Patch Changes

- Updated dependencies [[`d5bd5d0d`](https://github.com/launchdarkly/launchpad-ui/commit/d5bd5d0de1cedc2d341beced3ac8239167a85108), [`817b4c9c`](https://github.com/launchdarkly/launchpad-ui/commit/817b4c9c8a998f257369b6a726b2fbdf8242e1c9)]:
  - @launchpad-ui/tokens@0.5.3
  - @launchpad-ui/button@0.8.3
  - @launchpad-ui/dropdown@0.6.34
  - @launchpad-ui/popover@0.9.3
  - @launchpad-ui/tooltip@0.7.4

## 0.7.3

### Patch Changes

- Updated dependencies [[`152aef91`](https://github.com/launchdarkly/launchpad-ui/commit/152aef9126c5291586b09b703795030f52a01bb1)]:
  - @launchpad-ui/button@0.8.2
  - @launchpad-ui/tokens@0.5.2
  - @launchpad-ui/dropdown@0.6.33
  - @launchpad-ui/popover@0.9.2
  - @launchpad-ui/tooltip@0.7.3

## 0.7.2

### Patch Changes

- Updated dependencies [[`909a0fde`](https://github.com/launchdarkly/launchpad-ui/commit/909a0fdebf57634d5c100626cb432c35eac1c661)]:
  - @launchpad-ui/tokens@0.5.1
  - @launchpad-ui/button@0.8.1
  - @launchpad-ui/dropdown@0.6.32
  - @launchpad-ui/popover@0.9.1
  - @launchpad-ui/tooltip@0.7.2

## 0.7.1

### Patch Changes

- Updated dependencies [[`74ddde60`](https://github.com/launchdarkly/launchpad-ui/commit/74ddde60d233fd489860f89aacb908e20f525674)]:
  - @launchpad-ui/tooltip@0.7.1

## 0.7.0

### Minor Changes

- [#719](https://github.com/launchdarkly/launchpad-ui/pull/719) [`3cf45ed4`](https://github.com/launchdarkly/launchpad-ui/commit/3cf45ed4df4c4472cb8dcf48ef1cd5e7916a35ad) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Refactor theme targeting to support nested themes

  To migrate:
  Add `@import '@launchpad-ui/tokens/dist/themes.css';`. If you were previously importing `@import '@launchpad-ui/tokens/dist/dark.css';`, replace with the above, or remove.

  If you are modifying CSS variables based on the theme, prefer to explicitly declare the value depending on the theme. Nothing will break if you don't do this, but the code will not support nested theming if you don't explicitly set values depending on theme.

  **Instead of this:**

  ```css
  .selector {
    color: #000;

    [data-theme='dark'] & {
      color: #fff;
    }
  }
  ```

  **Prefer this:**

  ```css
  :root,
  [data-theme='default'] {
    --my-component-color-text: #000;
  }

  [data-theme='dark'] {
    --my-component-color-text: #fff;
  }

  .my-component {
    color: var(--my-component-color-text);
  }
  ```

### Patch Changes

- Updated dependencies [[`3cf45ed4`](https://github.com/launchdarkly/launchpad-ui/commit/3cf45ed4df4c4472cb8dcf48ef1cd5e7916a35ad)]:
  - @launchpad-ui/popover@0.9.0
  - @launchpad-ui/tooltip@0.7.0
  - @launchpad-ui/button@0.8.0
  - @launchpad-ui/tokens@0.5.0
  - @launchpad-ui/dropdown@0.6.31

## 0.6.49

### Patch Changes

- [#610](https://github.com/launchdarkly/launchpad-ui/pull/610) [`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10) Thanks [@renovate](https://github.com/apps/renovate)! - Update nonmajor versions across framework

- Updated dependencies [[`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10)]:
  - @launchpad-ui/dropdown@0.6.30
  - @launchpad-ui/popover@0.8.37
  - @launchpad-ui/tooltip@0.6.38
  - @launchpad-ui/button@0.7.32
  - @launchpad-ui/tokens@0.4.10

## 0.6.48

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/button@0.7.31
  - @launchpad-ui/dropdown@0.6.29

## 0.6.47

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/button@0.7.30
  - @launchpad-ui/dropdown@0.6.28

## 0.6.46

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/button@0.7.29
  - @launchpad-ui/dropdown@0.6.27

## 0.6.45

### Patch Changes

- [#694](https://github.com/launchdarkly/launchpad-ui/pull/694) [`940f10d6`](https://github.com/launchdarkly/launchpad-ui/commit/940f10d62c81a7e10fb1bd2f9e2a5e757bcbeeaf) Thanks [@jlzych](https://github.com/jlzych)! - [Button] Adjust sizing to match design system guidelines

- Updated dependencies [[`940f10d6`](https://github.com/launchdarkly/launchpad-ui/commit/940f10d62c81a7e10fb1bd2f9e2a5e757bcbeeaf)]:
  - @launchpad-ui/button@0.7.28
  - @launchpad-ui/dropdown@0.6.26

## 0.6.44

### Patch Changes

- Updated dependencies [[`f0505293`](https://github.com/launchdarkly/launchpad-ui/commit/f050529389a66fec35bcd8392839e80f875f2562)]:
  - @launchpad-ui/popover@0.8.36
  - @launchpad-ui/dropdown@0.6.25
  - @launchpad-ui/tooltip@0.6.37

## 0.6.43

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/button@0.7.27
  - @launchpad-ui/dropdown@0.6.24

## 0.6.42

### Patch Changes

- Updated dependencies [[`20439f2d`](https://github.com/launchdarkly/launchpad-ui/commit/20439f2d0533bf574b613d16d5d31eb688cb629f), [`808902f7`](https://github.com/launchdarkly/launchpad-ui/commit/808902f71c0b410adf86b0ee1683a2d36c4cdb22)]:
  - @launchpad-ui/popover@0.8.35
  - @launchpad-ui/tooltip@0.6.36
  - @launchpad-ui/tokens@0.4.9
  - @launchpad-ui/dropdown@0.6.23
  - @launchpad-ui/button@0.7.26

## 0.6.41

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/button@0.7.25
  - @launchpad-ui/dropdown@0.6.22

## 0.6.40

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/button@0.7.24
  - @launchpad-ui/dropdown@0.6.21

## 0.6.39

### Patch Changes

- Updated dependencies [[`ab07d28a`](https://github.com/launchdarkly/launchpad-ui/commit/ab07d28ac113d528566fd990fd8ac9a6de86bd33)]:
  - @launchpad-ui/popover@0.8.34
  - @launchpad-ui/dropdown@0.6.20
  - @launchpad-ui/tooltip@0.6.35

## 0.6.38

### Patch Changes

- Updated dependencies [[`f2ae1a80`](https://github.com/launchdarkly/launchpad-ui/commit/f2ae1a80d678a1a61dee407b8574e4c52f55299f)]:
  - @launchpad-ui/popover@0.8.33
  - @launchpad-ui/tokens@0.4.8
  - @launchpad-ui/tooltip@0.6.34
  - @launchpad-ui/dropdown@0.6.19
  - @launchpad-ui/button@0.7.23

## 0.6.37

### Patch Changes

- [#633](https://github.com/launchdarkly/launchpad-ui/pull/633) [`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update third party dependencies to pin versions to match consumer app

- Updated dependencies [[`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15)]:
  - @launchpad-ui/button@0.7.22
  - @launchpad-ui/dropdown@0.6.18
  - @launchpad-ui/popover@0.8.32
  - @launchpad-ui/tooltip@0.6.33

## 0.6.36

### Patch Changes

- [#629](https://github.com/launchdarkly/launchpad-ui/pull/629) [`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update Vite build tool to 4.0

- Updated dependencies [[`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde), [`b744011d`](https://github.com/launchdarkly/launchpad-ui/commit/b744011dccd525faa534f8def5ee8af2e346268a), [`94fe4b9a`](https://github.com/launchdarkly/launchpad-ui/commit/94fe4b9ada726c190701555c0f5bdca3e8ec610d)]:
  - @launchpad-ui/button@0.7.21
  - @launchpad-ui/dropdown@0.6.17
  - @launchpad-ui/popover@0.8.31
  - @launchpad-ui/tokens@0.4.7
  - @launchpad-ui/tooltip@0.6.32

## 0.6.35

### Patch Changes

- Updated dependencies [[`9064d45c`](https://github.com/launchdarkly/launchpad-ui/commit/9064d45cf157f7ded1a11a100940bd144f410fd6)]:
  - @launchpad-ui/button@0.7.20
  - @launchpad-ui/tokens@0.4.6
  - @launchpad-ui/dropdown@0.6.16
  - @launchpad-ui/popover@0.8.30
  - @launchpad-ui/tooltip@0.6.31

## 0.6.34

### Patch Changes

- Updated dependencies [[`fd838a5f`](https://github.com/launchdarkly/launchpad-ui/commit/fd838a5f22015fca3d9f1b535e98b82c79405ea8)]:
  - @launchpad-ui/button@0.7.19
  - @launchpad-ui/dropdown@0.6.15

## 0.6.33

### Patch Changes

- Updated dependencies [[`c48e0b4f`](https://github.com/launchdarkly/launchpad-ui/commit/c48e0b4fff3e0792b453f9173459fd197871f3d0)]:
  - @launchpad-ui/tokens@0.4.5
  - @launchpad-ui/button@0.7.18
  - @launchpad-ui/dropdown@0.6.14
  - @launchpad-ui/popover@0.8.29
  - @launchpad-ui/tooltip@0.6.30

## 0.6.32

### Patch Changes

- Updated dependencies [[`57484ab9`](https://github.com/launchdarkly/launchpad-ui/commit/57484ab9998ef50a32ab51bb9c0286b7be84fdb2), [`4c2dc031`](https://github.com/launchdarkly/launchpad-ui/commit/4c2dc0315fe0742ad78b706552d7c7e8e87f8e0e)]:
  - @launchpad-ui/tokens@0.4.4
  - @launchpad-ui/button@0.7.17
  - @launchpad-ui/dropdown@0.6.13
  - @launchpad-ui/popover@0.8.28
  - @launchpad-ui/tooltip@0.6.29

## 0.6.31

### Patch Changes

- Updated dependencies [[`9b37d196`](https://github.com/launchdarkly/launchpad-ui/commit/9b37d196a691fd6a4ca0f989c4121b8683d8f7cb)]:
  - @launchpad-ui/tokens@0.4.3
  - @launchpad-ui/button@0.7.16
  - @launchpad-ui/dropdown@0.6.12
  - @launchpad-ui/popover@0.8.27
  - @launchpad-ui/tooltip@0.6.28

## 0.6.30

### Patch Changes

- Updated dependencies [[`c0840e07`](https://github.com/launchdarkly/launchpad-ui/commit/c0840e07ba5a4f3da47b792d27680bc2549169f5)]:
  - @launchpad-ui/tokens@0.4.2
  - @launchpad-ui/button@0.7.15
  - @launchpad-ui/dropdown@0.6.11
  - @launchpad-ui/popover@0.8.26
  - @launchpad-ui/tooltip@0.6.27

## 0.6.29

### Patch Changes

- [#598](https://github.com/launchdarkly/launchpad-ui/pull/598) [`353eccef`](https://github.com/launchdarkly/launchpad-ui/commit/353eccefd155dd95c0221c7e8960ca14afb4baad) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Drawer]: Update z-index

  [Modal]: Update z-index

  [Navigation]: Update primary bottom border color

  [Notification]: Update z-index

  [Popover]: Update z-index

  [Snackbar]: Update z-index

  [SplitButton]: Improve theming for button borders

  [Table]: Improve theming for table cell head

  [Toast]: Update z-index

  [Tooltip]: Update z-index

  [Tokens]:

  - Update `lp-color-bg-interactive-disabled` dark value
  - Update `lp-color-bg-overlay-primary` dark value
  - Update `lp-color-border-interactive-secondary` dark value
  - Update `lp-color-border-interactive-disabled` dark value

  [ProgressBubbles]: Update dark mode styling

- Updated dependencies [[`353eccef`](https://github.com/launchdarkly/launchpad-ui/commit/353eccefd155dd95c0221c7e8960ca14afb4baad)]:
  - @launchpad-ui/popover@0.8.25
  - @launchpad-ui/tokens@0.4.1
  - @launchpad-ui/tooltip@0.6.26
  - @launchpad-ui/dropdown@0.6.10
  - @launchpad-ui/button@0.7.14

## 0.6.28

### Patch Changes

- Updated dependencies [[`71549774`](https://github.com/launchdarkly/launchpad-ui/commit/71549774aad5dcd0887379beba474e2371d320e6), [`9c9429e3`](https://github.com/launchdarkly/launchpad-ui/commit/9c9429e3707c9f229357875f9278755b3f3d7eda)]:
  - @launchpad-ui/button@0.7.13
  - @launchpad-ui/tokens@0.4.0
  - @launchpad-ui/popover@0.8.24
  - @launchpad-ui/dropdown@0.6.9
  - @launchpad-ui/tooltip@0.6.25

## 0.6.27

### Patch Changes

- Updated dependencies [[`6dc1470`](https://github.com/launchdarkly/launchpad-ui/commit/6dc1470e52b9f2f1b4dae8800fa8fd6d2bc74a46)]:
  - @launchpad-ui/tokens@0.3.2
  - @launchpad-ui/button@0.7.12
  - @launchpad-ui/dropdown@0.6.8
  - @launchpad-ui/popover@0.8.23
  - @launchpad-ui/tooltip@0.6.24

## 0.6.26

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/button@0.7.11
  - @launchpad-ui/dropdown@0.6.7

## 0.6.25

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.22
  - @launchpad-ui/dropdown@0.6.6
  - @launchpad-ui/tooltip@0.6.23

## 0.6.24

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/button@0.7.10
  - @launchpad-ui/dropdown@0.6.5

## 0.6.23

### Patch Changes

- Updated dependencies [[`d80297f`](https://github.com/launchdarkly/launchpad-ui/commit/d80297fad893c9db566ed029e302702d5f245a98)]:
  - @launchpad-ui/popover@0.8.21
  - @launchpad-ui/tokens@0.3.1
  - @launchpad-ui/tooltip@0.6.22
  - @launchpad-ui/dropdown@0.6.4
  - @launchpad-ui/button@0.7.9

## 0.6.22

### Patch Changes

- Updated dependencies [[`baeacd7`](https://github.com/launchdarkly/launchpad-ui/commit/baeacd7b80d60f36f4962f090d87a0009f28b44e)]:
  - @launchpad-ui/tokens@0.3.0
  - @launchpad-ui/button@0.7.8
  - @launchpad-ui/dropdown@0.6.3
  - @launchpad-ui/popover@0.8.20
  - @launchpad-ui/tooltip@0.6.21

## 0.6.21

### Patch Changes

- [#529](https://github.com/launchdarkly/launchpad-ui/pull/529) [`50898e9`](https://github.com/launchdarkly/launchpad-ui/commit/50898e94d7166651118da8b57526f4e1eda917f6) Thanks [@apucacao](https://github.com/apucacao)! - feat(button): Only show focus styles when necessary

- Updated dependencies [[`50898e9`](https://github.com/launchdarkly/launchpad-ui/commit/50898e94d7166651118da8b57526f4e1eda917f6)]:
  - @launchpad-ui/button@0.7.7
  - @launchpad-ui/dropdown@0.6.2

## 0.6.20

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.19
  - @launchpad-ui/button@0.7.6
  - @launchpad-ui/dropdown@0.6.1
  - @launchpad-ui/tooltip@0.6.20

## 0.6.19

### Patch Changes

- Updated dependencies [[`d87e683`](https://github.com/launchdarkly/launchpad-ui/commit/d87e68388354cd5318e60344f8d855bd27521d19)]:
  - @launchpad-ui/dropdown@0.6.0
  - @launchpad-ui/popover@0.8.18
  - @launchpad-ui/tooltip@0.6.19

## 0.6.18

### Patch Changes

- Updated dependencies [[`4090f93`](https://github.com/launchdarkly/launchpad-ui/commit/4090f93ba98ea6f75a7f9f7b902fafcfb9b005b3)]:
  - @launchpad-ui/tokens@0.2.0
  - @launchpad-ui/button@0.7.5
  - @launchpad-ui/dropdown@0.5.17
  - @launchpad-ui/popover@0.8.17
  - @launchpad-ui/tooltip@0.6.18

## 0.6.17

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.16
  - @launchpad-ui/dropdown@0.5.16
  - @launchpad-ui/tooltip@0.6.17

## 0.6.16

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.15
  - @launchpad-ui/dropdown@0.5.15
  - @launchpad-ui/tooltip@0.6.16

## 0.6.15

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/button@0.7.4
  - @launchpad-ui/dropdown@0.5.14
  - @launchpad-ui/popover@0.8.14
  - @launchpad-ui/tooltip@0.6.15

## 0.6.14

### Patch Changes

- Updated dependencies [[`1e5796b`](https://github.com/launchdarkly/launchpad-ui/commit/1e5796b7b99a2704bba22623a518ff7e8776ebf8)]:
  - @launchpad-ui/popover@0.8.13
  - @launchpad-ui/dropdown@0.5.13
  - @launchpad-ui/tooltip@0.6.14

## 0.6.13

### Patch Changes

- Updated dependencies [[`5e82186`](https://github.com/launchdarkly/launchpad-ui/commit/5e82186a765012cf79501dccf2a3305e66b16fc6)]:
  - @launchpad-ui/popover@0.8.12
  - @launchpad-ui/tooltip@0.6.13
  - @launchpad-ui/dropdown@0.5.12

## 0.6.12

### Patch Changes

- Updated dependencies [[`a91ee06`](https://github.com/launchdarkly/launchpad-ui/commit/a91ee069ebef5260d15e1dea1defd142f1b462de)]:
  - @launchpad-ui/button@0.7.3
  - @launchpad-ui/dropdown@0.5.11
  - @launchpad-ui/popover@0.8.11
  - @launchpad-ui/tooltip@0.6.12

## 0.6.11

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.5.10
  - @launchpad-ui/popover@0.8.10
  - @launchpad-ui/tooltip@0.6.11

## 0.6.10

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.5.9
  - @launchpad-ui/popover@0.8.9
  - @launchpad-ui/tooltip@0.6.10

## 0.6.9

### Patch Changes

- Updated dependencies [[`c5c07b0`](https://github.com/launchdarkly/launchpad-ui/commit/c5c07b0a47bcde0fbc7f0e6144ad8349e26b637e)]:
  - @launchpad-ui/popover@0.8.8
  - @launchpad-ui/dropdown@0.5.8
  - @launchpad-ui/tooltip@0.6.9

## 0.6.8

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.7
  - @launchpad-ui/dropdown@0.5.7
  - @launchpad-ui/tooltip@0.6.8

## 0.6.7

### Patch Changes

- [#449](https://github.com/launchdarkly/launchpad-ui/pull/449) [`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Pin monorepo packages

- Updated dependencies [[`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa)]:
  - @launchpad-ui/button@0.7.2
  - @launchpad-ui/dropdown@0.5.6
  - @launchpad-ui/popover@0.8.6
  - @launchpad-ui/tooltip@0.6.7

## 0.6.6-alpha.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.5.5-alpha.1
  - @launchpad-ui/popover@0.8.5-alpha.1
  - @launchpad-ui/tooltip@0.6.6-alpha.1

## 0.6.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.5
  - @launchpad-ui/dropdown@0.5.5
  - @launchpad-ui/tooltip@0.6.6

## 0.6.5

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.5.4
  - @launchpad-ui/popover@0.8.4
  - @launchpad-ui/tooltip@0.6.5

## 0.6.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.5.3
  - @launchpad-ui/popover@0.8.3
  - @launchpad-ui/tooltip@0.6.4

## 0.6.3

### Patch Changes

- Updated dependencies [[`a7c53bc`](https://github.com/launchdarkly/launchpad-ui/commit/a7c53bcfef64a49c9e87acdd1db1bd9aac83906b)]:
  - @launchpad-ui/tooltip@0.6.3

## 0.6.2

### Patch Changes

- Updated dependencies [[`f4334d3`](https://github.com/launchdarkly/launchpad-ui/commit/f4334d3601d1f675eab6d0430354bd80d46bea01)]:
  - @launchpad-ui/popover@0.8.2
  - @launchpad-ui/tooltip@0.6.2
  - @launchpad-ui/dropdown@0.5.2

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
  - @launchpad-ui/button@0.7.1
  - @launchpad-ui/dropdown@0.5.1
  - @launchpad-ui/popover@0.8.1
  - @launchpad-ui/tooltip@0.6.1

## 0.6.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

### Patch Changes

- Updated dependencies [[`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd)]:
  - @launchpad-ui/button@0.7.0
  - @launchpad-ui/dropdown@0.5.0
  - @launchpad-ui/popover@0.8.0
  - @launchpad-ui/tooltip@0.6.0

## 0.5.8

### Patch Changes

- Updated dependencies [[`91d68ca`](https://github.com/launchdarkly/launchpad-ui/commit/91d68ca61f45c4f7a0f38b4e869f650a5202a74c)]:
  - @launchpad-ui/popover@0.7.6
  - @launchpad-ui/dropdown@0.4.7
  - @launchpad-ui/tooltip@0.5.6

## 0.5.8-alpha.0

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.4.7-alpha.0
  - @launchpad-ui/popover@0.7.6-alpha.0
  - @launchpad-ui/tooltip@0.5.6-alpha.0

## 0.5.7

### Patch Changes

- Updated dependencies [[`c392a08`](https://github.com/launchdarkly/launchpad-ui/commit/c392a08a3d83fcd3cbc0213510c5a19174f925af)]:
  - @launchpad-ui/popover@0.7.5
  - @launchpad-ui/dropdown@0.4.6
  - @launchpad-ui/tooltip@0.5.5

## 0.5.6

### Patch Changes

- [#357](https://github.com/launchdarkly/launchpad-ui/pull/357) [`04492c3`](https://github.com/launchdarkly/launchpad-ui/commit/04492c37238ab9ef97695f5a9f968973a05b7083) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [SplitButton] Enhance component API with HTML attribute passthrough

## 0.5.5

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.7.4
  - @launchpad-ui/dropdown@0.4.5
  - @launchpad-ui/tooltip@0.5.4

## 0.5.4

### Patch Changes

- Updated dependencies [[`91fcfae`](https://github.com/launchdarkly/launchpad-ui/commit/91fcfae53d4b7c57f4d40a7d2b6a3c0bd7cb4e62)]:
  - @launchpad-ui/button@0.6.3
  - @launchpad-ui/dropdown@0.4.4
  - @launchpad-ui/popover@0.7.3
  - @launchpad-ui/tooltip@0.5.3

## 0.5.3

### Patch Changes

- Updated dependencies [[`fee517a`](https://github.com/launchdarkly/launchpad-ui/commit/fee517a3ee1329d311a634ea0fad09bc37e7a33a), [`28ffe4d`](https://github.com/launchdarkly/launchpad-ui/commit/28ffe4dd8608c71a5ff20c8b574b1a6d0e592a11)]:
  - @launchpad-ui/button@0.6.2
  - @launchpad-ui/popover@0.7.2
  - @launchpad-ui/dropdown@0.4.3
  - @launchpad-ui/tooltip@0.5.2

## 0.5.2

### Patch Changes

- Updated dependencies [[`143b8c6`](https://github.com/launchdarkly/launchpad-ui/commit/143b8c668986a88f335ffd28a4171c8bfafb1d9c)]:
  - @launchpad-ui/button@0.6.1
  - @launchpad-ui/dropdown@0.4.2
  - @launchpad-ui/popover@0.7.1
  - @launchpad-ui/tooltip@0.5.1

## 0.5.1

### Patch Changes

- [#330](https://github.com/launchdarkly/launchpad-ui/pull/330) [`f440fa1`](https://github.com/launchdarkly/launchpad-ui/commit/f440fa17747771566dcc58db873f7167093df921) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Dropdown] Update prop passing to allow button props from dropdown button

- Updated dependencies [[`f440fa1`](https://github.com/launchdarkly/launchpad-ui/commit/f440fa17747771566dcc58db873f7167093df921)]:
  - @launchpad-ui/dropdown@0.4.1

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
  - @launchpad-ui/button@0.6.0
  - @launchpad-ui/dropdown@0.4.0
  - @launchpad-ui/popover@0.7.0
  - @launchpad-ui/tooltip@0.5.0

## 0.4.0

### Minor Changes

- [#317](https://github.com/launchdarkly/launchpad-ui/pull/317) [`4f2aac1`](https://github.com/launchdarkly/launchpad-ui/commit/4f2aac1dc6c9a9901a3b24b5922c9e299a8f9d10) Thanks [@chasedarkly](https://github.com/chasedarkly)! - - Add new `IconButton` component

  - Handle button links with `asChild` instead of internally in `Button`
  - Add minimal variant for both `Button` and `IconButton`
  - Add close variant for `IconButton`
  - Consume `IconButton` in downstream components

  [Button]: Add new `IconButton` component, move link button implementation to asChild, and add minimal and close variants
  [SplitButton]: Remove `HTMLAnchorElement` type from `SplitButtonMainButton`
  [Alert]: Consume `IconButton` instead of `Button`
  [Banner]: Consume `IconButton` instead of `Button`
  [Filter]: Consume `IconButton` instead of `Button`
  [Modal]: Consume `IconButton` instead of `Button`
  [Notification]: Consume `IconButton` instead of `Button`
  [Pagination]: Consume `IconButton` instead of `Button`

### Patch Changes

- Updated dependencies [[`4f2aac1`](https://github.com/launchdarkly/launchpad-ui/commit/4f2aac1dc6c9a9901a3b24b5922c9e299a8f9d10)]:
  - @launchpad-ui/button@0.5.0
  - @launchpad-ui/dropdown@0.3.7
  - @launchpad-ui/popover@0.6.6
  - @launchpad-ui/tooltip@0.4.6

## 0.3.4

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

- Updated dependencies [[`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d), [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43)]:
  - @launchpad-ui/popover@0.6.5
  - @launchpad-ui/button@0.4.1
  - @launchpad-ui/dropdown@0.3.6
  - @launchpad-ui/tooltip@0.4.5

## 0.3.3

### Patch Changes

- Updated dependencies [[`534ebde`](https://github.com/launchdarkly/launchpad-ui/commit/534ebde2f8bb6abb53cb0443f4e3b2eee0a2064f)]:
  - @launchpad-ui/popover@0.6.4
  - @launchpad-ui/dropdown@0.3.5
  - @launchpad-ui/tooltip@0.4.4

## 0.3.2

### Patch Changes

- [#300](https://github.com/launchdarkly/launchpad-ui/pull/300) [`4a703fb`](https://github.com/launchdarkly/launchpad-ui/commit/4a703fb267aa4b4a7a1de2b029d68f5cb93e5dcc) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [SplitButton]: Add default placement for SplitButtonDropdown

- Updated dependencies [[`273180e`](https://github.com/launchdarkly/launchpad-ui/commit/273180e0a8d6851292a6c33bcccaadc9efe215f6)]:
  - @launchpad-ui/popover@0.6.3
  - @launchpad-ui/dropdown@0.3.4
  - @launchpad-ui/tooltip@0.4.3

## 0.3.1

### Patch Changes

- [#293](https://github.com/launchdarkly/launchpad-ui/pull/293) [`27f5655`](https://github.com/launchdarkly/launchpad-ui/commit/27f5655dfbe58fcbe4dcb62a20c676778d71da14) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [SplitButton] Pass through test ids for split button components

## 0.3.0

### Minor Changes

- [#289](https://github.com/launchdarkly/launchpad-ui/pull/289) [`b89ace7`](https://github.com/launchdarkly/launchpad-ui/commit/b89ace7f4715c9ee27b076ec3b8390c8bf0a29af) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [SplitButton]: Rework SplitButton so that it is more composable, introducing SplitButtonMainButton, SplitButtonDropdownButton, and SplitButtonDropdown
  [Dropdown]: Explicitly support passing an aria label

### Patch Changes

- Updated dependencies [[`b89ace7`](https://github.com/launchdarkly/launchpad-ui/commit/b89ace7f4715c9ee27b076ec3b8390c8bf0a29af)]:
  - @launchpad-ui/dropdown@0.3.3

## 0.2.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.6.2
  - @launchpad-ui/dropdown@0.3.2
  - @launchpad-ui/tooltip@0.4.2

## 0.2.2

### Patch Changes

- [#285](https://github.com/launchdarkly/launchpad-ui/pull/285) [`edd400d`](https://github.com/launchdarkly/launchpad-ui/commit/edd400d9a45e6a38a7c39a214c1fdb7d0f543ce1) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [SplitButton] Enhance type for onSelect

## 0.2.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.3.1
  - @launchpad-ui/popover@0.6.1
  - @launchpad-ui/tooltip@0.4.1

## 0.2.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356), [`dfe9d18`](https://github.com/launchdarkly/launchpad-ui/commit/dfe9d1861a1b3cc3e84583539b2446f63932512e)]:
  - @launchpad-ui/button@0.4.0
  - @launchpad-ui/dropdown@0.3.0
  - @launchpad-ui/popover@0.6.0
  - @launchpad-ui/tooltip@0.4.0

## 0.1.6

### Patch Changes

- Updated dependencies [[`ff2e97f`](https://github.com/launchdarkly/launchpad-ui/commit/ff2e97f1675f30c95ffa0b7772477a1961d163a3)]:
  - @launchpad-ui/tooltip@0.3.10

## 0.1.5

### Patch Changes

- Updated dependencies [[`d8d52bc`](https://github.com/launchdarkly/launchpad-ui/commit/d8d52bca9583789c0f1cb155812585f03d682f3f)]:
  - @launchpad-ui/popover@0.5.7
  - @launchpad-ui/dropdown@0.2.9
  - @launchpad-ui/tooltip@0.3.9

## 0.1.4

### Patch Changes

- [#259](https://github.com/launchdarkly/launchpad-ui/pull/259) [`ffb8b91`](https://github.com/launchdarkly/launchpad-ui/commit/ffb8b91991020e15a44ded38e02947c445ca1900) Thanks [@Niznikr](https://github.com/Niznikr)! - [Dropdown] Update to functional component:

  - [Dropdown] Extend `Popover` props
  - [Tooltip] Extend `Popover` props

* [#260](https://github.com/launchdarkly/launchpad-ui/pull/260) [`5e4a3bd`](https://github.com/launchdarkly/launchpad-ui/commit/5e4a3bd1c3c332cb698664a0c753485af3068a82) Thanks [@Niznikr](https://github.com/Niznikr)! - Remove use of object in prop types:

  - [Clipboard] Update `tooltipOptions` type
  - [Form] Update Radio `labelStyle` type
  - [SplitButton] Update `tooltipOptions` type

* Updated dependencies [[`ffb8b91`](https://github.com/launchdarkly/launchpad-ui/commit/ffb8b91991020e15a44ded38e02947c445ca1900), [`78813c2`](https://github.com/launchdarkly/launchpad-ui/commit/78813c22f8f9f2ab68d47db53135f384407329b2), [`08b8cc0`](https://github.com/launchdarkly/launchpad-ui/commit/08b8cc0f27154e4103861b0233b979e4f4c30baa), [`9ea9b63`](https://github.com/launchdarkly/launchpad-ui/commit/9ea9b63f1db11ce782d9a1e3848ec8d22c7be634)]:
  - @launchpad-ui/dropdown@0.2.8
  - @launchpad-ui/tooltip@0.3.8
  - @launchpad-ui/button@0.3.2
  - @launchpad-ui/popover@0.5.6

## 0.1.3

### Patch Changes

- [#239](https://github.com/launchdarkly/launchpad-ui/pull/239) [`6bbb5e9`](https://github.com/launchdarkly/launchpad-ui/commit/6bbb5e9713180d76c6ff2cc6c3fd6b2c4f2a449c) Thanks [@Niznikr](https://github.com/Niznikr)! - [Button] Update forwarded ref type to `HTMLButtonElement | HTMLAnchorElement`

- Updated dependencies [[`6bbb5e9`](https://github.com/launchdarkly/launchpad-ui/commit/6bbb5e9713180d76c6ff2cc6c3fd6b2c4f2a449c), [`532cbe4`](https://github.com/launchdarkly/launchpad-ui/commit/532cbe4ecb0a41f4eef3725a2ccfacf7d6586011), [`e5e01c2`](https://github.com/launchdarkly/launchpad-ui/commit/e5e01c26a4d20686489aac7d2106b939d5071037)]:
  - @launchpad-ui/button@0.3.1
  - @launchpad-ui/dropdown@0.2.7
  - @launchpad-ui/popover@0.5.5
  - @launchpad-ui/tooltip@0.3.7

## 0.1.2

### Patch Changes

- Updated dependencies [[`d2d29a2`](https://github.com/launchdarkly/launchpad-ui/commit/d2d29a2489ab111511e98ce1036d419d97ffa0ed)]:
  - @launchpad-ui/popover@0.5.4
  - @launchpad-ui/dropdown@0.2.6
  - @launchpad-ui/tooltip@0.3.6

## 0.1.1

### Patch Changes

- Updated dependencies [[`c1a926b`](https://github.com/launchdarkly/launchpad-ui/commit/c1a926bff13e33f89eaefc8eed588927333d4620)]:
  - @launchpad-ui/button@0.3.0
  - @launchpad-ui/dropdown@0.2.5
  - @launchpad-ui/popover@0.5.3
  - @launchpad-ui/tooltip@0.3.5

## 0.1.0

### Minor Changes

- [#222](https://github.com/launchdarkly/launchpad-ui/pull/222) [`cb55147`](https://github.com/launchdarkly/launchpad-ui/commit/cb55147c231f94b9ea303ead60ef3f695b119874) Thanks [@Niznikr](https://github.com/Niznikr)! - Add split-button package:

  - [SplitButton] Add split-button code, stories, and tests
