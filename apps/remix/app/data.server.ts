export type Component = { name: string; to: string };

export async function getComponents() {
  return [
    {
      to: 'components/alert',
      name: 'Alert',
    },
    {
      to: 'components/button',
      name: 'Button',
    },
    {
      to: 'components/icon',
      name: 'Icon',
    },
    {
      to: 'components/lozenge',
      name: 'Lozenge',
    },
    {
      to: 'components/progress',
      name: 'Progress',
    },
    {
      to: 'components/toggle',
      name: 'Toggle',
    },
  ];
}
