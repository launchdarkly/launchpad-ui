module.exports = {
	'*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx}': [
		'pnpm oxlint:js:path --no-error-on-unmatched-pattern', // Lint staged JS/TS files (mirrors gonfalon's `oxlint` pre-commit hook)
	],
	'*.{js,ts,tsx,json,css}': ['oxfmt'], // Format staged files (mirrors gonfalon's `oxfmt` pre-commit hook)
};
