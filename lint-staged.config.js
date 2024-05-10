module.exports = {
	'*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}': [
		'biome check --apply --no-errors-on-unmatched', // Format, sort imports, lint, and apply safe fixes
	],
	'*.css': ['stylelint --fix'],
};
