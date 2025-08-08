#!/usr/bin/env node

/**
 * Generate component metadata for LaunchPad Afterburn
 *
 * This script scans the @launchpad-ui/components package and generates
 * metadata for all components that can be highlighted by Afterburn.
 */

const fs = require('fs');
const path = require('path');

const COMPONENTS_PATH = path.resolve(__dirname, '../../components/src');
const OUTPUT_PATH = path.resolve(__dirname, '../src/metadata.generated.ts');

const DEFAULT_DOCS_BASE = 'https://launchpad.launchdarkly.com';

// Component descriptions (could be extracted from JSDoc in the future)
const COMPONENT_DESCRIPTIONS = {
	Alert: 'Display important messages and notifications to users.',
	Avatar: 'Display user profile pictures or initials.',
	Breadcrumbs: 'Show the current page location within a navigational hierarchy.',
	Button: 'A button allows a user to perform an action.',
	ButtonGroup: 'A group of related buttons.',
	Calendar: 'A calendar for date selection.',
	Checkbox: 'Allow users to select multiple options from a set.',
	CheckboxGroup: 'A group of checkboxes with shared label and validation.',
	ComboBox: 'A combo box with searchable options.',
	DateField: 'An input field for entering dates.',
	DatePicker: 'A date picker with calendar popover.',
	Dialog: 'A dialog overlay that blocks interaction with elements outside it.',
	Disclosure: 'A collapsible content section.',
	DropZone: 'An area for dragging and dropping files.',
	FieldError: 'Display validation errors for form fields.',
	Form: 'A form container with validation support.',
	GridList: 'A grid list for displaying collections of items.',
	Group: 'A group container for form elements.',
	Header: 'A header for sections or collections.',
	Heading: 'Display headings with semantic HTML.',
	IconButton: 'A button with an icon instead of text.',
	Input: 'A basic input field.',
	Label: 'A label for form elements.',
	Link: 'A link to navigate between pages or sections.',
	LinkButton: 'A button that looks like a link.',
	LinkIconButton: 'An icon button that functions as a link.',
	ListBox: 'A list of selectable options.',
	Menu: 'A menu with actions or navigation items.',
	Meter: 'Display a scalar measurement within a range.',
	Modal: 'A modal overlay that blocks interaction with elements outside it.',
	NumberField: 'An input field for entering numbers.',
	Popover: 'A popover that displays additional content.',
	ProgressBar: 'Display the progress of an operation.',
	Radio: 'Allow users to select a single option from a set.',
	RadioButton: 'A radio button styled as a button.',
	RadioGroup: 'A group of radio buttons with shared validation.',
	RadioIconButton: 'A radio button styled as an icon button.',
	SearchField: 'An input field for search queries.',
	Select: 'A select field for choosing from a list of options.',
	Separator: 'A visual separator between content sections.',
	Switch: 'A switch for toggling between two states.',
	Table: 'A table for displaying structured data.',
	Tabs: 'A set of layered sections of content.',
	TagGroup: 'A group of removable tags.',
	Text: 'Display text with semantic styling.',
	TextArea: 'A multi-line text input field.',
	TextField: 'A single-line text input field.',
	ToggleButton: 'A button that can be toggled on or off.',
	ToggleButtonGroup: 'A group of toggle buttons.',
	ToggleIconButton: 'An icon button that can be toggled on or off.',
	Toolbar: 'A toolbar containing actions and controls.',
	Tooltip: 'Display additional information on hover or focus.',
	Tree: 'A tree view for hierarchical data.',
};

function generateDocsUrl(componentName) {
	const kebabCase = componentName
		.replace(/([A-Z])/g, '-$1')
		.toLowerCase()
		.slice(1);
	return `${DEFAULT_DOCS_BASE}/?path=/docs/components-${kebabCase}--docs`;
}

function scanComponents() {
	const components = [];

	try {
		const files = fs.readdirSync(COMPONENTS_PATH);

		for (const file of files) {
			if (file.endsWith('.tsx') && !file.includes('.spec.') && !file.includes('.stories.')) {
				const componentName = path.basename(file, '.tsx');

				// Skip utility files
				if (componentName === 'utils' || componentName === 'index') {
					continue;
				}

				const filePath = path.join(COMPONENTS_PATH, file);
				const content = fs.readFileSync(filePath, 'utf-8');

				// Check if this file exports a component (simple heuristic)
				if (
					content.includes(`const ${componentName} =`) ||
					content.includes(`function ${componentName}`)
				) {
					components.push({
						name: componentName,
						package: '@launchpad-ui/components',
						version: '0.12.0', // Could be read from package.json
						description: COMPONENT_DESCRIPTIONS[componentName] || `A ${componentName} component.`,
						docsUrl: generateDocsUrl(componentName),
					});
				}
			}
		}
	} catch (error) {
		console.error('Error scanning components:', error);
		return [];
	}

	return components.sort((a, b) => a.name.localeCompare(b.name));
}

function generateMetadataFile(components) {
	const imports = `/**
 * Generated component metadata for LaunchPad components
 * This file is automatically generated during the build process
 */

import type { ComponentMetadata } from './types';`;

	const metadata = `
/**
 * Metadata for all LaunchPad components
 * Generated from @launchpad-ui/components package
 */
export const componentMetadata: Record<string, ComponentMetadata> = {`;

	const componentEntries = components
		.map(
			(component) => `  ${component.name}: {
    name: '${component.name}',
    package: '${component.package}',
    version: '${component.version}',
    description: '${component.description}',
  }`,
		)
		.join(',\n');

	const footer = `
};`;

	return `${imports}${metadata}
${componentEntries}${footer}`;
}

function main() {
	console.log('🔍 Scanning LaunchPad components...');

	const components = scanComponents();

	console.log(`📊 Found ${components.length} components`);

	const metadataContent = generateMetadataFile(components);

	fs.writeFileSync(OUTPUT_PATH, metadataContent);

	console.log(`✅ Generated metadata at ${OUTPUT_PATH}`);
	console.log('📋 Components:', components.map((c) => c.name).join(', '));
}

if (require.main === module) {
	main();
}

module.exports = { scanComponents, generateMetadataFile };
