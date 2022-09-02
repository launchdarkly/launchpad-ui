import type { ComponentStoryObj } from '@storybook/react';

import { AlertKind, CollapsibleAlert } from '../src';

export default {
  component: CollapsibleAlert,
  title: 'Components/CollapsibleAlert',
  description: 'Actions trigger alerts based on user interaction.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__ALERT,
    },
  },
  argTypes: {
    kind: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
    message: {
      table: {
        category: 'Content',
      },
    },
  },
};

type Story = ComponentStoryObj<typeof CollapsibleAlert>;

export const Collapsible: Story = {
  args: {
    kind: AlertKind.INFO,
    message: (
      <>
        This flag is a prerequisite of <strong>2</strong> other flags in <strong>Production</strong>
        .
      </>
    ),
    children: (
      <>
        <div>
          <table className="Table Table--compact">
            <thead className="Table-header">
              <tr className="Table-row">
                <td className="Table-cell Table-cell--left">
                  <i>Changes to targeting may impact the variations served by these flags</i>
                </td>
              </tr>
            </thead>
            <tbody className="Table-body">
              <tr className="Table-row">
                <td className="Table-cell Table-cell--left">
                  <a href="/default/production/features/enable-ui-datadog-application-logs-collection">
                    Enable UI Datadog Application Logs Collection
                  </a>
                </td>
              </tr>
              <tr className="Table-row">
                <td className="Table-cell Table-cell--left">
                  <a href="/default/production/features/enable-web-app-data-dog-rum-application-metrics">
                    Enable Web App Data Dog Rum Application Metrics
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
};
