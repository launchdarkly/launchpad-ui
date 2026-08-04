module.exports = {
	'*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx}': [
		'pnpm oxlint:js:path --no-error-on-unmatched-pattern', // Lint staged JS/TS files (mirrors gonfalon's `oxlint` pre-commit hook)
	],
	// `csstools/value-no-unknown-custom-properties` reads token files from packages/tokens/dist,
	// so tokens must be built first (mirrors gonfalon's `stylelint` pre-commit hook). Uses the
	// function form (rather than a plain command string) because lint-staged doesn't run
	// commands through a shell, so a `&&`-joined string would be passed as literal arguments
	// instead of being interpreted as two commands.
	'*.css': (filenames) => [
		'pnpm build:transform',
		`pnpm lint:css:path --allow-empty-input ${filenames.map((filename) => `"${filename}"`).join(' ')}`,
	],
	'*.{js,ts,tsx,json,css}': ['oxfmt'], // Format staged files (mirrors gonfalon's `oxfmt` pre-commit hook)
};
