# @launchpad-ui/select

## 0.2.5

### Patch Changes

- [`6a74df08`](https://github.com/launchdarkly/launchpad-ui/commit/6a74df08c97872808603ede39197a877949b98e4) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update react-aria individual package imports to monorepo imports

- Updated dependencies [[`f07d8c7d`](https://github.com/launchdarkly/launchpad-ui/commit/f07d8c7df396ada9d30780d56e97470382a6b350), [`6a74df08`](https://github.com/launchdarkly/launchpad-ui/commit/6a74df08c97872808603ede39197a877949b98e4), [`cd812ed3`](https://github.com/launchdarkly/launchpad-ui/commit/cd812ed305b8ecb660986830ed4842d59a150882)]:
  - @launchpad-ui/icons@0.7.6
  - @launchpad-ui/modal@0.14.4
  - @launchpad-ui/button@0.8.4
  - @launchpad-ui/popover@0.9.4
  - @launchpad-ui/tooltip@0.7.5

## 0.2.4

### Patch Changes

- Updated dependencies [[`d5bd5d0d`](https://github.com/launchdarkly/launchpad-ui/commit/d5bd5d0de1cedc2d341beced3ac8239167a85108), [`304c87bc`](https://github.com/launchdarkly/launchpad-ui/commit/304c87bcd9050fd64c1ce997bb96c6b6e3aa9701), [`817b4c9c`](https://github.com/launchdarkly/launchpad-ui/commit/817b4c9c8a998f257369b6a726b2fbdf8242e1c9)]:
  - @launchpad-ui/tokens@0.5.3
  - @launchpad-ui/icons@0.7.5
  - @launchpad-ui/button@0.8.3
  - @launchpad-ui/modal@0.14.3
  - @launchpad-ui/popover@0.9.3
  - @launchpad-ui/tooltip@0.7.4

## 0.2.3

### Patch Changes

- Updated dependencies [[`152aef91`](https://github.com/launchdarkly/launchpad-ui/commit/152aef9126c5291586b09b703795030f52a01bb1)]:
  - @launchpad-ui/button@0.8.2
  - @launchpad-ui/tokens@0.5.2
  - @launchpad-ui/modal@0.14.2
  - @launchpad-ui/icons@0.7.4
  - @launchpad-ui/popover@0.9.2
  - @launchpad-ui/tooltip@0.7.3

## 0.2.2

### Patch Changes

- Updated dependencies [[`909a0fde`](https://github.com/launchdarkly/launchpad-ui/commit/909a0fdebf57634d5c100626cb432c35eac1c661)]:
  - @launchpad-ui/tokens@0.5.1
  - @launchpad-ui/button@0.8.1
  - @launchpad-ui/icons@0.7.3
  - @launchpad-ui/modal@0.14.1
  - @launchpad-ui/popover@0.9.1
  - @launchpad-ui/tooltip@0.7.2

## 0.2.1

### Patch Changes

- Updated dependencies [[`74ddde60`](https://github.com/launchdarkly/launchpad-ui/commit/74ddde60d233fd489860f89aacb908e20f525674)]:
  - @launchpad-ui/tooltip@0.7.1

## 0.2.0

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

- [#721](https://github.com/launchdarkly/launchpad-ui/pull/721) [`c5f2bdcd`](https://github.com/launchdarkly/launchpad-ui/commit/c5f2bdcd9d4bc81d4a742bf05b58af234eeac532) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Select] Expose `SelectItem` and `SelectSection` components

- Updated dependencies [[`3cf45ed4`](https://github.com/launchdarkly/launchpad-ui/commit/3cf45ed4df4c4472cb8dcf48ef1cd5e7916a35ad)]:
  - @launchpad-ui/popover@0.9.0
  - @launchpad-ui/tooltip@0.7.0
  - @launchpad-ui/button@0.8.0
  - @launchpad-ui/tokens@0.5.0
  - @launchpad-ui/modal@0.14.0
  - @launchpad-ui/icons@0.7.2

## 0.1.7

### Patch Changes

- [#707](https://github.com/launchdarkly/launchpad-ui/pull/707) [`44c1bd5e`](https://github.com/launchdarkly/launchpad-ui/commit/44c1bd5e1a06a8dfa1206a9952449a299d94c26b) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Select] Move to Single and Multi Select components

- [#713](https://github.com/launchdarkly/launchpad-ui/pull/713) [`68fa3ec5`](https://github.com/launchdarkly/launchpad-ui/commit/68fa3ec521159e7883c858f80a034830d4c9809f) Thanks [@vroske-ld](https://github.com/vroske-ld)! - [Select] rename disabled prop and add styles

- Updated dependencies [[`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10)]:
  - @launchpad-ui/popover@0.8.37
  - @launchpad-ui/tooltip@0.6.38
  - @launchpad-ui/button@0.7.32
  - @launchpad-ui/tokens@0.4.10
  - @launchpad-ui/icons@0.7.1
  - @launchpad-ui/modal@0.13.1

## 0.1.6

### Patch Changes

- Updated dependencies [[`0c3dcaa2`](https://github.com/launchdarkly/launchpad-ui/commit/0c3dcaa205b18bae2e2c64519ac29cb510a8316a)]:
  - @launchpad-ui/modal@0.13.0

## 0.1.5

### Patch Changes

- Updated dependencies [[`2b29f91e`](https://github.com/launchdarkly/launchpad-ui/commit/2b29f91e21002d352f18c2dbfd0ed807f0598da0)]:
  - @launchpad-ui/icons@0.7.0
  - @launchpad-ui/button@0.7.31
  - @launchpad-ui/modal@0.12.28

## 0.1.4

### Patch Changes

- Updated dependencies [[`d06d6a42`](https://github.com/launchdarkly/launchpad-ui/commit/d06d6a42824309be167d754c4642ab6b97375e1f)]:
  - @launchpad-ui/icons@0.6.21
  - @launchpad-ui/button@0.7.30
  - @launchpad-ui/modal@0.12.27

## 0.1.3

### Patch Changes

- [#699](https://github.com/launchdarkly/launchpad-ui/pull/699) [`48e7fc80`](https://github.com/launchdarkly/launchpad-ui/commit/48e7fc809c83ce36decd936e8ba3c9a6e2ea915d) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Select] Add controlled and uncontrolled options to Select component

- Updated dependencies [[`3790e0d2`](https://github.com/launchdarkly/launchpad-ui/commit/3790e0d294726e6722d45a7aa66e5ce51194c464)]:
  - @launchpad-ui/icons@0.6.20
  - @launchpad-ui/button@0.7.29
  - @launchpad-ui/modal@0.12.26

## 0.1.2

### Patch Changes

- Updated dependencies [[`940f10d6`](https://github.com/launchdarkly/launchpad-ui/commit/940f10d62c81a7e10fb1bd2f9e2a5e757bcbeeaf)]:
  - @launchpad-ui/button@0.7.28
  - @launchpad-ui/modal@0.12.25

## 0.1.1

### Patch Changes

- Updated dependencies [[`f0505293`](https://github.com/launchdarkly/launchpad-ui/commit/f050529389a66fec35bcd8392839e80f875f2562)]:
  - @launchpad-ui/popover@0.8.36
  - @launchpad-ui/modal@0.12.24
  - @launchpad-ui/tooltip@0.6.37

## 0.1.0

### Minor Changes

- [#671](https://github.com/launchdarkly/launchpad-ui/pull/671) [`6ac80f0e`](https://github.com/launchdarkly/launchpad-ui/commit/6ac80f0e18a65afea1e6a764b216d03f6d6081b5) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Select]: Add Select package supporting single and multi select
  [Modal]: Bump `@react-aria/overlays` module version
  [Drawer]: Bump `@react-aria/overlays` module version
  [Form]: Rename Select to SelectField

### Patch Changes

- Updated dependencies [[`a521fecf`](https://github.com/launchdarkly/launchpad-ui/commit/a521fecff8db852b21b13fd2f05982051e71b9cd), [`6ac80f0e`](https://github.com/launchdarkly/launchpad-ui/commit/6ac80f0e18a65afea1e6a764b216d03f6d6081b5)]:
  - @launchpad-ui/modal@0.12.23
