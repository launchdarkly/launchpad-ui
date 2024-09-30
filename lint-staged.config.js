module.exports = {
	'*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc,css}': [
		'biome check --write --no-errors-on-unmatched', // Format, sort imports, lint, and apply safe fixes
	],
};
