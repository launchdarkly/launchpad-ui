import type { Decorator, StoryFn, StoryObj } from '@storybook/react';

import { useEffect, useId } from 'react';

import { PseudoClasses, createWithClassesDecorator } from '../../../.storybook/utils';
import { Toggle } from '../src';

import './Toggle.stories.css';

const testingChromaticClassNames = [
	`${PseudoClasses.HOVER}-all`,
	`${PseudoClasses.FOCUS}-all`,
	`${PseudoClasses.ACTIVE}-all`,
];
const useModifiedClassLists: Decorator = (story, context) => {
	// This a second decorator to add to work already done
	// with the above decorator
	useEffect(() => {
		// get the id's attached to each input element
		// they contains the pseudo class name that we attached above
		const inputElements = Array.from(document.getElementsByTagName('input'));
		for (const inputEl of inputElements) {
			const elementId = inputEl.getAttribute('id')?.trim();
			if (elementId && !inputEl.classList.contains(elementId)) {
				// add to its class list if its not there
				inputEl.classList.add(elementId);
			}
		}
	}, []);
	const { originalStoryFn, args, viewMode } = context;
	// Original typing is not entirely accurate.
	// It passes everything in the first arg as a prop
	// to the component which it not ideal
	const originalTemplate = originalStoryFn as StoryFn;
	if (viewMode === 'docs') {
		return story();
	}

	return (
		<div className="Toggle-storygroup-wrapper ">
			<span className="Toggle-state-label">Resting</span>
			{story()}
			{originalTemplate && (
				<>
					<span className="Toggle-state-label">Disabled</span>
					{originalTemplate({ ...args, disabled: true, id: 'disabled-toggle' }, context)}
				</>
			)}
		</div>
	);
};

export default {
	component: Toggle,
	title: 'Legacy/Deprecated/Toggle',
	description: 'Toggles represent on/off values as opposed to selection.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__TOGGLE,
		},
		chromatic: { disableSnapshot: true },
	},
	decorators: [
		createWithClassesDecorator(testingChromaticClassNames, (args, originalStory, context) => (
			<>
				<span className="Toggle-state-label">{`${
					args.className?.replace('pseudo-', '').replace('-all', '') || ''
				}`}</span>
				{originalStory({ ...args, id: args.className }, context)}
			</>
		)),
		useModifiedClassLists,
	],
};

type Story = StoryObj<typeof Toggle>;

export const On: Story = { args: { isSelected: true, 'aria-label': 'on' } };

export const Off: Story = { args: { isSelected: false, 'aria-label': 'off' } };

export const Uncontrolled: Story = {
	args: {
		defaultSelected: true,
		'aria-label': 'Targeting',
	},
};

export const AriaLabelledByExample: Story = {
	render: () => {
		const Component = () => {
			const id = useId();
			return (
				<div className="Toggle-iggy-grid">
					<h3 id={id}>Activate Iggy</h3>
					<Toggle aria-labelledby={id} defaultSelected />
				</div>
			);
		};

		return <Component />;
	},
};
