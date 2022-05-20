import { Progress, ProgressSize } from '../src';

export default {
  component: Progress,
  title: 'Components/Progress',
  description: 'Progress indicates a page or content is loading.',
  argTypes: {
    className: {
      table: {
        category: 'Presentation',
      },
    },
    value: {
      table: {
        category: 'Presentation',
      },
    },
    size: {
      table: {
        category: 'Presentation',
      },
    },
    delayMs: {
      table: {
        category: 'Presentation',
      },
    },
  },
};

export const Default = () => <Progress size={ProgressSize.Small} />;
