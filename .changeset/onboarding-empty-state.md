---
'@launchpad-ui/components': minor
---

Add `OnboardingEmptyState`, a 50/50 editorial layout for first-time onboarding surfaces. It exposes a locked, controlled props API — consumers supply only content and cannot alter variants or styling: a plain-text `heading` (rendered as an `h1`), an optional `description` (which may contain an inline link), a `media` gallery, a required `primaryAction`, and up to two `secondaryActions`. Each action renders a `LinkButton` when given an `href` or a `Button` when given an `onPress`. The `media` gallery shows a single image or an auto-advancing, keyboard-navigable carousel (built on `Tabs`), with per-image captions, optional dark-mode variants, and reduced-motion handling.
