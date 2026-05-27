# Content Guidelines (UI copy)

Content guidelines apply to every user-facing string in a LaunchPad surface. This includes Labels, buttons, microcopy, errors, modals, toasts, helper text, empty states. 

### Voice and tone

The voice is **focused and empowering, refreshingly real, no BS**. The product voice adds **confident, trustworthy, vigilant, timely**. Voice is constant; **tone shifts to match the moment**. Match the energy without amplifying it. Errors do not need cheerfulness; success does not need walls of text.

| We are | We are not |
|---|---|
| Direct | Blunt or dismissive |
| Confident | Arrogant or boastful |
| Conversational | Casual or unprofessional |
| Warm | Gushing or over-enthusiastic |
| Clear | Dumbed-down or over-simplified |
| Precise | Jargon-heavy or overly technical |
| Occasionally witty | Trying too hard to be funny |

### Style principles

- **Write for humans, not the interface.** Conversational and natural. If it reads like a committee or a robot wrote it, rewrite.
- **Say what you mean.** No "please," no "feel free to," no "you may want to consider."
- **Earn every word.** If a word is not doing work, cut it. "To create a flag, select Create," not "In order to create a flag…"
- **Plain language without sacrificing accuracy.** A PM, developer, and executive should all read the UI without a glossary.
- **Be consistent.** Same word for the same thing every time. Do not call it a "feature flag" in one place and a "flag" in another without reason.
- **Contractions are fine** in conversational UI ("You're all set"). **Avoid contractions** in: legal/compliance copy, form validation errors, inline error messages, toasts with error or warning severity, banners with error or warning variant, and modals whose primary action is destructive. ("LaunchDarkly could not save your changes," not "couldn't.")
- **No em dashes anywhere.** Split the thought into two sentences or restructure to avoid the break.
- **Humor sparingly.** Never in errors, destructive confirmations, security copy, or billing/account messages.
- **No emojis, memes, or GIFs in product copy, marketing site copy, or any negative-issue content.** Informal channels only.
- **Never anthropomorphize the platform.** LaunchDarkly does not "think," "want," or "believe." It evaluates, serves, returns, displays, renders, redirects.

### Point of view

- **Platform behavior in-product** → "LaunchDarkly." "LaunchDarkly evaluates the flag."
- **The user in-product** → "you" / "your." "You configure the targeting rules."
- **Errors** → name the actor. "LaunchDarkly could not apply your changes," not "Your changes could not be applied."
- **System events (scheduled, automated)** → LaunchDarkly is the actor. "LaunchDarkly archived this flag on Jan 4, 2026."
- **Audit logs and history** → "you." "You archived this flag on May 12."
- **Brief success confirmations** → passive fragment is fine. "Flag saved" / "Changes saved."
- **Marketing/external** → "we"/"our" for LaunchDarkly; "you" for the audience.
- **Competitors** → name only in feature comparison charts. Otherwise reference deficiencies indirectly; focus on what LaunchDarkly does better.

### Sentence patterns

- **Active voice, present tense** by default. "LaunchDarkly evaluates targeting rules in order," not "Targeting rules are evaluated in order."
- **One idea per sentence.** 15–20 words max in UI copy.
- **Front-load the most important information.** "Flags must be active before targeting rules apply," not "Before targeting rules can apply, you'll need to make sure your flag is active."
- **Past tense for completed actions.** "Flag archived." Present tense for instructions and current state.
- **Use passive voice only when the actor adds no value.** "The request was blocked" (actor unknown) is acceptable.

### Capitalization and grammar

- **Sentence case everywhere.** Headings, CTAs, navigation, UI labels, body. Title case only for formal publication titles ("The State of Feature Management").
- **`LaunchDarkly`** — never `Launchdarkly`, `Launch Darkly`, or `LD` in external-facing copy. Never `LaunchDarkly's` (possessive). Restructure to "the LaunchDarkly dashboard," "LaunchDarkly documentation," "LaunchDarkly support."
- **Capitalize** proprietary product names (Progressive Delivery, Experimentation) and subscription tiers (Developer, Foundation, Enterprise, Guardian).
- **Numbers are numerals** ("3 flags are active," not "Three"). Exception: spell out at sentence start or rewrite to avoid. Use a numeral plus word for large round numbers ("1 million API calls"). Use K/M/B abbreviations only in space-constrained UI ("1.2M requests"), always uppercase.
- **`%`** with no space (`98%`). `$` with no space (`$10,000`). Commas in 4+ digit numbers.
- **Acronyms** — spell out on first use except industry-standard (API, SDK, CI/CD, SSO). Pluralize without apostrophe (`SDKs`, `APIs`).
- **Ampersand `&`** only in trademarked names or genuinely space-constrained UI labels. Spell out "and" in body copy.
- **Serial (Oxford) comma** always: `flags, segments, and experiments`.
- **No periods** in headings, buttons, CTAs, navigation labels, form labels, or fragment-style UI strings. **Use periods** at the end of full-sentence UI strings.
- **Quotation marks** for direct quotes and to introduce unfamiliar terms on first use. Punctuation goes inside the closing quote. Never use quotes for emphasis or for UI element names (`Click Save`, not `Click "Save"`).
- **Use bold for UI element names** in instructional copy (`Select **Save changes**`). Use bold for critical info. Use italic for terms being introduced or for titles of published works. **Never underline for emphasis.** **Never ALL CAPS for emphasis.**
- **Exclamation points** only for genuinely celebratory moments ("Congratulations! Your first flag is live"). Never in errors, warnings, documentation. One per message max.
- **Ellipsis character `…`**, not three periods (`.`.`.`). Only for loading/in-progress states. Never in input placeholders or CTAs.
- **Semicolons** avoid in UI copy. Split into two sentences.
- **Hyphens** for compound modifiers before a noun. Do not hyphenate `-ly` adverb compounds ("rarely used service").
- **En dash for ranges**, no spaces: `10–25 users`, `Jan 23–Feb 14`, `9:00 AM–5:00 PM PT`. Exception: ISO 8601 date ranges use en dash **with** spaces: `2026-01-23 – 2026-02-14`.
- **Ordinal numbers** for sequence (`3rd experiment in the series`). Never in dates (`Jan 4, 2026`, not `Jan 4th, 2026`).

### Dates and time

| Context | Format | Example |
|---|---|---|
| Spacious UI (labels, tooltips, confirmations) | Spelled-out or abbreviated month | `Jan 4, 2026` |
| Dense UI (data grids, logs, in-product timestamps) | ISO 8601 | `2026-01-23` |
| Exports, APIs, data warehouse (Snowflake, CSV) | ISO 8601 | `2026-01-23T15:04:00` |
| Date + time within a timestamp | Comma between date and time | `Jan 23, 2026, 8:03 AM` |
| Time | 12-hour, uppercase `AM`/`PM`, no periods, space before | `10:30 AM PT` |
| Time zones | 2-letter for US (`PT`), 3-letter elsewhere (`CET`) | `2:00 PM PT` / `10:30 AM CET` |
| On-the-hour | Always include `:00` | `4:00 PM PT` |
| Relative time, dense | Abbreviated, no space, always singular | `5d ago`, `30m ago`, `just now` |
| Relative time, conversational | Spelled-out, standard grammar | `5 hours ago`, `2 days ago` |
| Relative threshold | After 30 days, switch to absolute date | — |
| Date range, ISO | En dash **with** spaces | `2026-01-23 – 2026-02-14` |
| Date range, spelled | En dash **without** spaces | `Jan 23–Feb 14, 2026` |
| Date-time range | Full date+time on both ends, en dash with spaces | `Jan 23, 2026, 8:03 AM – Feb 14, 2026, 8:03 AM` |
| Live range endpoint | `now` (not `present`) | `3:04 PM – now` |

**Never use `MM/DD/YYYY`.** It is ambiguous internationally.

### Links

- **Never** "Click here," "Read the documentation," "See documentation," "View documentation," "Learn more" when space allows for more.
- **Default**: `Read about <topic>` (standalone link), `Read more about <topic>` (helper text or tooltip context), `Learn about <topic>` (courses or mixed-format content). Reserve `Learn more` for genuinely space-constrained UI (inline badge labels, table cells, narrow tooltips).
- **Match the verb to the content type**: Read about (docs), Watch (videos), Learn about (courses, tutorials).
- **Match link text to destination page title** when possible.
- **No punctuation** on standalone link text. Normal sentence punctuation when the link is mid-sentence.
- **Indicate new-tab links.** External-link icon plus `Opens in a new tab` accessible label.
- **Avoid `see` and `view` as link verbs.** They assume visual ability. Use action words or the destination name (`All flags`, `Load more`, `Open flags list`).

### Accessibility (content-side)

These rules layer on top of the technical Accessibility section above.

- **Alt text** describes meaning, not pixels. Never start with "image of," "picture of," "icon of," "photo of." Punctuate as a sentence. Empty (`alt=""`) for purely decorative images. Under 125 characters. Space-separate letters in acronyms for screen readers (`S D K initialization flow`).
- **Describe actions, not senses.** "Select the flag you want to target," not "See the flag you want to target."
- **Never use screen position as the only locator.** "In the Targeting tab, select Add rule," not "In the panel on the left, click the button below the header."
- **Never use color alone to convey meaning.** Always pair color with a label, icon, or text.
- **Use plain, bias-free language.** Allowlist/blocklist, not blacklist/whitelist. Never master/slave.
- **Use "select" for cross-platform interactions.** "Click" only in explicit desktop/mouse contexts. "Tap" only in mobile/touch contexts.
- **Write input field labels that work without placeholder text.** Placeholders are not labels.
- **Error text explains both the problem and the fix.** "Flag key is required. Add a flag key to continue."
- **Tooltip content makes sense without the surrounding UI.** "Targeting rules are evaluated in order, from top to bottom," not "See above for details."
- **Write chronologically.** Top to bottom, first to last. Screen readers read linearly.
- **Pair every color/icon indicator with text.**
- **Left-align body text.** Avoid italic for long passages. Never underline for emphasis.

### Product patterns

**Error messages.** Anatomy: what happened + why (if useful) + how to fix.

| Do | Don't |
|---|---|
| `LaunchDarkly could not save your changes. Your session may have expired. Sign in and try again.` | `Error: null value` / `Error 403: Forbidden` |
| `Flag key is required. Add a flag key to continue.` | `Invalid input.` |
| `Something went wrong. Check your connection and try again.` | `You entered an invalid flag key.` (blames user) |

No exclamation points. Past tense for what happened, present tense for the fix. Never blame the user. Never use technical error codes in user-facing copy.

**Validation messages.** Specific about what's wrong and how to fix. Trigger on blur or submit, not on keypress. Never `Sorry, …`.

**Confirmation messages.** Past tense, specific, brief.

| Do | Don't |
|---|---|
| `Flag archived.` | `Flag is being archived.` |
| `Targeting rules saved.` | `Changes saved.` (too vague) |
| `Flag created.` | `Your new feature flag has been successfully created!` |
| `Flag archived. You can restore it at any time.` | `Flag archived. Make sure to update your SDK.` (no next-step instructions in confirmations) |

Reserve celebratory language for genuine milestones: `Congratulations! Your first flag is live.`

**Empty states.** Explain what belongs here plus a next action. Two types:

- **First-time empty**: `No flags yet. Create your first flag to start controlling feature releases.` + `Create flag` CTA.
- **Zero-results empty**: `No flags match your search. Try a different keyword or clear your filters.`
- Never blame: `No flags yet`, not `You haven't created any flags.`

**Buttons / CTAs.** Verb-led. One word when the context (heading, modal title) already names the object.

| Context | Button text |
|---|---|
| Under a "Create flag" heading | `Create` |
| Under a "Delete this flag" heading | `Delete` |
| Standalone destructive action | `Delete flag` |
| Generic save | `Save changes` |

Never `Submit`, `OK`, `Done`, `Confirm`, `Yes`. Never `now` (reads as aggressive). Sentence case. No punctuation. Pair every destructive button with a `Cancel`.

**Modals and dialogs.** Declarative heading (not a question). Body leads with consequence. CTA mirrors the heading.

| Slot | Example |
|---|---|
| Heading | `Delete this flag` (not `Delete this flag?`) |
| Body | `This will remove the flag from all environments. Your rules will be deleted.` |
| Primary button | `Delete` |
| Secondary button | `Cancel` (not `Never mind`) |

For destructive or irreversible actions, explain what changes and whether it can be undone. No em dashes in the body.

**Tooltips, helper text, ghost text** are different tools.

- **Ghost text** (inside empty field, disappears on type): realistic example value only. `my-feature-flag`, not `Enter a flag key`. No period. Code-formatted for technical values.
- **Helper text** (below field, always visible): instructions, constraints, context. `Use letters, numbers, and hyphens.` Use `Read more about <topic>` for links inside helper text.
- **Tooltip** (hover/focus): supplementary info not essential to completing the task. 1–2 sentences. Present tense. Never to compensate for an unclear label.

**Form labels.** Sentence case. No colon. No period. Short noun phrase. `Flag name`, not `Enter the name of your flag`. Do not repeat the label in helper text.

**Toasts and banners.** Toasts are ephemeral (auto-dismiss, no heading, one sentence). Banners are persistent (heading + body + optional CTA). Lead with the most important info. Match severity to type. Bold the heading. Keep body to 1–2 sentences. Never use a banner for an error that belongs inline on a field.

**Onboarding.** Lead with what users can **do**, not what the product **is**. One clear next action per step. Progressive disclosure. Celebrate genuine milestones only. Make every step skippable.

**Loading states.** Present progressive plus ellipsis: `Connecting to warehouse…` Be specific about what's happening. Confirm completion in past tense (`Connected.` / `Query complete.`). Never promise speed. If cancellable, say so. On failure, hand off to an error message.

**Permission states.** Describe the requirement; never blame. Show restricted controls as **disabled**, not hidden. Give a path forward.

| Type | Copy |
|---|---|
| Role-based | `Editor permissions required. Contact your admin to request access.` |
| Plan-based | `Available on Foundation and Enterprise plans. Upgrade to access.` |
| Approval-required | `This change will be submitted for approval before it takes effect.` |

If the restriction applies to one control, put the message in a tooltip on the disabled element. If it applies to the whole page or feature, use an inline message or banner at the top.

**Navigation labels.** Nouns or noun phrases (`Feature flags`, not `Manage flags`). 1–3 words. Sentence case. Match the page title they point to.

**Page titles.** Format: `Page name | LaunchDarkly`. Sentence case page name. Match the main heading.

### Word list — never use

| Avoid | Use instead |
|---|---|
| `LaunchDarkly's` (possessive) | Restructure: "the LaunchDarkly dashboard," "LaunchDarkly documentation," "LaunchDarkly support" |
| `See` / `View` (as verbs) | "Read about," "Open," or the destination name. `View` as a noun (`list view`, `flag view`) is fine. |
| `Click` | `Select` (default — works across mouse, keyboard, touch). `Click` only in explicit desktop context. `Tap` only on mobile. |
| `Utilize` | use |
| `Leverage` | use |
| `Impact` (as verb) | affect |
| `Please` (in instructions) | drop it |
| `Feel free to` | drop it |
| `Once` (temporal) | `after` or `when` |
| `Anytime` | `at any time` |
| `Sanity check` | `review`, `verify`, `confidence check`, `gut check` |
| `Dummy` (data) | `sample`, `placeholder`, `example` |
| `Grandfathered` | `legacy`, `carried over`, `exempt` |
| `Native` (built-in) | `built-in`, `default`, `included` (exception: `warehouse native` is industry-standard) |
| `Blacklist` / `whitelist` | `allowlist` / `blocklist` |
| `Master` / `slave` | rephrase entirely |
| `Read the documentation` / `See the documentation` (link text) | `Read about <topic>` |
| `Click here` (link text) | `Read about <topic>` |
| `Now` (in CTAs like "Sign up now") | drop it (`Sign up`) |

**Compound forms — verb (two words) vs. noun/adjective (one word):**

| Verb | Noun / adjective |
|---|---|
| `Set up your environment` | `Open the setup guide` |
| `Log in to your account` | `Go to the login page` |
| `Clean up this flag` | `Start the cleanup` |
| `Roll back the deployment` | `Trigger a rollback` |

Use **`log in to`**, not `log into`.

### Word list — OK to use without spelling out

API, CDN, CI/CD, DevOps, DevSecOps, IDEs, MFA, ML, MTTR, SDK, SDLC, SRE, SSE, SSO, UI, A/B testing, feature flags, feature management, release management, canary deployments. Plus programming languages and platforms (iOS, JSON, PHP, .NET, etc.).

### How to apply

When writing or reviewing any user-facing string in a LaunchPad surface:

1. **Fetch the live docs first.** Cached snapshots drift. Run `./ld gdrive content <file_id>` against the IDs in Resources. Or list the folder (`1fedOirfQH5VQSKayCxcidA_INRfwBl3G`) to pick up any new docs.
2. **Match the pattern.** Error → error pattern. Modal → modal pattern. Empty state → empty-state pattern.
3. **Run the gut check**: clear, human, useful, appropriate.
4. **Audit against the word list** before shipping.
5. **For AI chatbot or assistant copy**, apply voice/tone/word list. UI formatting conventions (fragments, truncated labels) do not apply. The em dash prohibition still applies.