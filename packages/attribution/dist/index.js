/**
* Generates minimal data attribute for LaunchPad component attribution
*
* @param componentName - Name of the component (e.g., 'Button', 'Modal')
* @returns Object containing single data attribute for component identification
*/
function addLaunchPadAttribution(componentName) {
	return { "data-launchpad": componentName };
}
exports.addLaunchPadAttribution = addLaunchPadAttribution;

//# sourceMappingURL=index.js.map