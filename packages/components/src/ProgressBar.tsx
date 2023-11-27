import type { ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';

import { create, props } from '@stylexjs/stylex';
import { Label, ProgressBar as AriaProgressBar } from 'react-aria-components';

const styles = create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'rgb(60,60,60)',
  },
});

interface ProgressBarProps extends AriaProgressBarProps {
  label?: string;
}

const ProgressBar = ({ label, ...rest }: ProgressBarProps) => {
  return (
    <AriaProgressBar {...rest}>
      {({ percentage, valueText }) => (
        <>
          <Label>{label}</Label>
          <span {...props(styles.base)}>{valueText}</span>
          <div className="bar">
            <div className="fill" style={{ width: percentage + '%' }} />
          </div>
        </>
      )}
    </AriaProgressBar>
  );
};

export { ProgressBar };
export type { ProgressBarProps };
