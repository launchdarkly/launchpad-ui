import { Alert, AlertKind, AlertSize } from '../src';

export default {
  component: Alert,
  title: 'Components/Alert',
  description: 'Actions trigger alerts based on user interaction.',
  argTypes: {
    testId: {
      control: 'text',
      table: {
        category: 'Testing',
        subcategory: 'Data attributes',
      },
    },
    className: {
      table: {
        category: 'Presentation',
      },
    },
    compact: {
      control: 'boolean',
      table: {
        category: 'Presentation',
        subcategory: 'Sizing',
      },
    },
    isInline: {
      control: 'boolean',
      table: {
        category: 'Presentation',
      },
    },
    kind: {
      table: {
        category: 'Presentation',
      },
    },
    size: {
      table: {
        category: 'Presentation',
        subcategory: 'Sizing',
      },
    },
    wide: {
      control: 'boolean',
      table: {
        category: 'Presentation',
        subcategory: 'Sizing',
      },
    },
    dismissible: {
      control: 'boolean',
      table: {
        category: 'Presentation',
      },
    },
    onDismiss: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
  },
};

export const Success = {
  args: { kind: AlertKind.SUCCESS, children: 'Success alert', dismissible: false },
};

export const Warning = {
  args: { kind: AlertKind.WARNING, children: 'Warning alert', dismissible: false },
};

export const Info = {
  args: { kind: AlertKind.INFO, children: 'Info alert', dismissible: false },
};

export const Error = {
  args: { kind: AlertKind.ERROR, children: 'Error alert', dismissible: false },
};

export const SmallInlineSuccess = {
  args: {
    isInline: true,
    kind: AlertKind.SUCCESS,
    size: AlertSize.SMALL,
    children: 'Small Inline Success alert',
  },
};

export const SmallInlineWarning = {
  args: {
    isInline: true,
    kind: AlertKind.WARNING,
    size: AlertSize.SMALL,
    children: 'Small Inline Warning alert',
  },
};

export const SmallInlineInfo = {
  args: {
    isInline: true,
    kind: AlertKind.INFO,
    size: AlertSize.SMALL,
    children: 'Small Inline Info alert',
  },
};

export const SmallInlineError = {
  args: {
    isInline: true,
    kind: AlertKind.ERROR,
    size: AlertSize.SMALL,
    children: 'Small Inline Error alert',
  },
};
