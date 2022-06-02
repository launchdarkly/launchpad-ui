import cx from 'classnames';

import { Portal } from './Portal';
import './styles/Prompt.css';

type PromptProps = {
  className?: string;
  children?: React.ReactNode;
};

const Prompt = ({ className, children }: PromptProps) => {
  return <Portal className={cx('Prompt', className)}>{children}</Portal>;
};

export { Prompt };
export type { PromptProps };
