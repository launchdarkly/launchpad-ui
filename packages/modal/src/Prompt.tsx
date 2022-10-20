import type { ReactNode } from 'react';

import { cx } from 'classix';

import { Portal } from './Portal';
import styles from './styles/Modal.module.css';

type PromptProps = {
  className?: string;
  children?: ReactNode;
};

const Prompt = ({ className, children }: PromptProps) => {
  return <Portal className={cx(styles.prompt, className)}>{children}</Portal>;
};

export { Prompt };
export type { PromptProps };
