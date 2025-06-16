import type { Decorator, StoryFn, StoryObj } from '@storybook/react-vite';

import { createWithClassesDecorator, PseudoClasses } from '../../../.storybook/utils';
import { Label, TextArea } from '../src';

import './TextArea.stories.css';

const testingChromaticClassNames = [PseudoClasses.HOVER, PseudoClasses.FOCUS, PseudoClasses.ACTIVE];
const withRestingAndDisabledStates: Decorator = (story, context) => {
	const { args, viewMode, originalStoryFn } = context;
	// The type provided don't seem to be correct,
	// componentId for example is required but it is
	// being passed as a prop to the component causing
	// errors to be shown the in console.
	const originalTemplate = originalStoryFn as StoryFn;
	if (viewMode === 'docs') {
		return story();
	}

	return (
		<div className="Textarea-storygroup-wrapper">
			<span className="Textarea-state-label">Resting</span>
			{story()}
			{originalTemplate && (
				<>
					<span className="Textarea-state-label">Disabled</span>
					{originalTemplate({ ...args, disabled: true, id: 'Disabled' }, context)}
					<span className="Textarea-state-label">Empty</span>
					{originalTemplate(
						{ ...args, value: '', placeholder: 'Enter text here', id: 'Placeholder' },
						context,
					)}
				</>
			)}
		</div>
	);
};

export default {
	component: TextArea,
	title: 'Legacy/Form/TextArea',
	description: 'A styled form textarea component',
	decorators: [
		createWithClassesDecorator(testingChromaticClassNames, (args, originalStory, context) => {
			let textFieldId = args.className?.replace('pseudo-', '') || '';
			// capitalize first letter for formatting
			textFieldId = textFieldId[0].toUpperCase() + textFieldId.slice(1);
			return (
				<>
					<span className="Textarea-state-label">{`${
						args.className?.replace('pseudo-', '') || ''
					}`}</span>
					{originalStory({ ...args, id: textFieldId }, context)}
				</>
			);
		}),
		withRestingAndDisabledStates,
	],
	parameters: {
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		disabled: {
			table: {
				category: 'Presentation',
			},
		},
		rows: {
			table: {
				category: 'Presentation',
			},
		},
		id: {
			table: {
				category: 'DOM Attributes',
			},
		},
		name: {
			table: {
				category: 'DOM Attributes',
			},
		},
		value: {
			table: {
				category: 'DOM Attributes',
			},
		},
	},
};

type Story = StoryObj<typeof TextArea>;

export const Example: Story = {
	render: ({ id = '', ...args }) => {
		const textAreaId = `${id} Textarea`;
		return (
			<div>
				<Label htmlFor={textAreaId}>{textAreaId}</Label>
				<TextArea {...args} id={textAreaId} />
			</div>
		);
	},
	args: {
		name: 'Text Area',
		rows: 10,
		id: 'Resting',
		value: 'I am a text area!!',
		disabled: false,
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};
