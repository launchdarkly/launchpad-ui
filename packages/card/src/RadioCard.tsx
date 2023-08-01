import type { ReactNode } from 'react';

import { Radio, type RadioProps } from '@launchpad-ui/core';
import { cx } from 'classix';

import styles from './styles/Card.module.css';

export type RadioCardProps = RadioProps & {
  label: string | JSX.Element;
  subText?: ReactNode;
  imgSrc?: string;
  altText?: string;
};

export const RadioCard = ({
  label,
  subText,
  imgSrc,
  altText,
  id,
  value,
  checked,
  disabled = false,
  ...rest
}: RadioCardProps) => (
  // Normally you'd want to pass the 'ref' attribute from the React Hook form field
  // but we can't do that because RadioGroup and Radio don't do a forward ref.
  // RHF uses the ref for focus management.
  <Radio
    id={id}
    className={styles.hideRadio}
    labelClassName={cx(styles.featureCard, disabled ? styles.disabled : '')}
    checked={checked}
    {...rest}
    value={value}
  >
    <div className={styles.labelContainer}>
      {imgSrc && <img src={imgSrc} alt={altText} />}
      {label}
    </div>
    <div className={cx(styles.subtext, disabled ? styles.disabled : '')}>{subText}</div>
  </Radio>
);
