import { Lozenge, LozengeKind, LozengeSize } from '../src';

export default {
  component: Lozenge,
  title: 'Components/Lozenge',
  description: 'Lozenges can be used as visual indicators for tags.',
  argTypes: {
    className: {
      table: {
        category: 'Presentation',
      },
    },
    isClickable: {
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
      },
    },
    subtle: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
    handleClick: {
      table: {
        category: 'Functions',
      },
    },
    handleKeyPress: {
      table: {
        category: 'Functions',
      },
    },
    ariaDisabled: {
      table: {
        category: 'Accessibility',
      },
    },
  },
};

export const Default = { args: { children: 'Example Lozenge', kind: LozengeKind.DEFAULT } };

export const Success = { args: { children: 'Success Lozenge', kind: LozengeKind.SUCCESS } };

export const Warning = { args: { children: 'Warning Lozenge', kind: LozengeKind.WARNING } };

export const Inactive = { args: { children: 'Inactive Lozenge', kind: LozengeKind.INACTIVE } };

export const Info = { args: { children: 'Info Lozenge', kind: LozengeKind.INFO } };

export const Label = { args: { children: 'Label Lozenge', kind: LozengeKind.LABEL } };

export const Large = { args: { children: 'Large Lozenge', kind: LozengeSize.LARGE } };

export const New = { args: { children: 'New Lozenge', kind: LozengeKind.NEW } };

export const Flag = { args: { children: 'Flag', kind: LozengeKind.FLAG } };

export const FlagOn = {
  args: { children: 'ON', kind: LozengeKind.FLAG, className: 'Lozenge--flagOn' },
};

export const FlagOff = {
  args: { children: 'OFF', kind: LozengeKind.FLAG, className: 'Lozenge--flagOff' },
};

export const Federal = { args: { children: 'Federal Lozenge', kind: LozengeKind.FEDERAL } };

export const Beta = { args: { children: 'Beta Lozenge', kind: LozengeKind.BETA } };
