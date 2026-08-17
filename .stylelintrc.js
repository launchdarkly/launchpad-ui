module.exports = {
	plugins: ['stylelint-value-no-unknown-custom-properties'],
	rules: {
		'at-rule-no-unknown': [true, { ignoreAtRules: ['define-mixin', 'mixin'] }],
		'block-no-empty': true,
		'color-no-hex': [true, { severity: 'warning' }],
		'color-no-invalid-hex': true,
		'comment-no-empty': true,
		'csstools/value-no-unknown-custom-properties': [
			true,
			{
				// Gonfalon's `static/ld/...` and `packages/vega/...` entries dropped:
				// those files don't exist in launchpad. Each stylesheet is resolved
				// through the `@launchpad-ui/tokens` exports map rather than by a path
				// into that package, so this file stays correct wherever the package
				// is installed from. The build output it resolves to is produced by
				// `build:transform`, which `lint:css` runs first (mirrors
				// `test`/`typecheck`).
				importFrom: [
					require.resolve('@launchpad-ui/tokens/index.css'),
					require.resolve('@launchpad-ui/tokens/media-queries.css'),
					require.resolve('@launchpad-ui/tokens/themes.css'),
					// Custom properties injected at runtime by third-party libraries
					// (e.g. React Aria Components), not by @launchpad-ui/tokens.
					'stylelint.runtime-properties.css',
				],
			},
		],
		'declaration-property-value-disallowed-list': [
			{ '/.*/': ['/--lp-spacing-100\\b/', '/--lp-size-0\\b/'] },
			{
				message:
					'Use 0 instead of --lp-spacing-100 or --lp-size-0. Both resolve to 0 and are being removed from the design system.',
			},
		],
		'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates-with-different-values'] }],
		'declaration-block-no-shorthand-property-overrides': true,
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'function-calc-no-unspaced-operator': true,
		'function-linear-gradient-no-nonstandard-direction': true,
		'keyframe-declaration-no-important': true,
		'media-feature-name-no-unknown': true,
		'no-descending-specificity': [true, { severity: 'warning' }],
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-invalid-double-slash-comments': true,
		'property-no-unknown': [
			true,
			{
				ignoreProperties: ['composes', 'compose-with'],
				ignoreSelectors: [':export', /^:import/],
			},
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global', 'local'],
			},
		],
		'selector-pseudo-element-no-unknown': true,
		'selector-type-no-unknown': true,
		'string-no-newline': true,
		'unit-no-unknown': true,
		'color-hex-length': 'short',
		'comment-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['stylelint-commands'],
			},
		],
		'comment-whitespace-inside': 'always',
		'declaration-block-single-line-max-declarations': 1,
		'declaration-empty-line-before': [
			'always',
			{
				except: ['after-declaration', 'first-nested'],
				ignore: ['after-comment', 'inside-single-line-block'],
			},
		],
		'function-name-case': 'lower',
		'selector-pseudo-element-colon-notation': 'double',
		'selector-type-case': 'lower',
	},
};
