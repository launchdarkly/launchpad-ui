/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	ignoredRouteFiles: ['**/.*'],
	serverDependenciesToBundle: [/^@launchpad-ui/, 'marked'],
	serverModuleFormat: 'cjs',
};
