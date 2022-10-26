import type { ReactNode } from 'react';

import { Portal } from '@launchpad-ui/portal';
import { cx } from 'classix';

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
