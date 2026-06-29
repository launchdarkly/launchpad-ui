// Import actual recipe stories
import {
	ComboBoxDialog as ComboBoxDialogStory,
	CopyToClipboard as CopyToClipboardStory,
	DisabledWithTooltip as DisabledWithTooltipStory,
	ListBoxTooltip as ListBoxTooltipStory,
	Pagination as PaginationStory,
	RadioButtonGroup as RadioButtonGroupStory,
} from '../recipes/composition.stories';
import { Default as EmptyStateStory } from '../recipes/EmptyState.stories';
// Import shared preview component
import { StoryPreview } from './StoryPreview';

// Recipes category configuration
export const recipesCategory = {
	category: 'Recipes',
	components: [
		{
			name: 'CopyToClipboard',
			component: <StoryPreview story={CopyToClipboardStory} />,
			storyPath: 'recipes-copytoclipboard--docs',
		},
		{
			name: 'ComboBoxDialog',
			component: <StoryPreview story={ComboBoxDialogStory} />,
			storyPath: 'recipes-comboboxdialog--docs',
		},
		{
			name: 'DisabledWithTooltip',
			component: <StoryPreview story={DisabledWithTooltipStory} />,
			storyPath: 'recipes-disabledwithtooltip--docs',
		},
		{
			name: 'EmptyState',
			component: <StoryPreview story={EmptyStateStory} />,
			storyPath: 'recipes-emptystate--docs',
		},
		{
			name: 'ListBoxTooltip',
			component: <StoryPreview story={ListBoxTooltipStory} />,
			storyPath: 'recipes-listboxtooltip--docs',
		},
		{
			name: 'Pagination',
			component: <StoryPreview story={PaginationStory} />,
			storyPath: 'recipes-pagination--docs',
		},
		{
			name: 'RadioButtonGroup',
			component: <StoryPreview story={RadioButtonGroupStory} />,
			storyPath: 'recipes-radiobuttongroup--docs',
		},
	],
};
