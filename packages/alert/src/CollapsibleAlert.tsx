import type { AlertProps } from './Alert';
import type { HTMLAttributes } from 'react';

import { Button } from '@launchpad-ui/button';
import { Collapsible } from '@launchpad-ui/collapsible';
import { cx } from 'classix';

import { Alert } from './Alert';
import styles from './styles/Alert.module.css';

type CollapsibleAlertProps = HTMLAttributes<HTMLElement> & {
  /**
   * Passing in one of `info`, `success`, `warning`, `error`, `striped`
   * displays the style and icon pair associated with the variant.
   * The default is info.
   */
  kind?: AlertProps['kind'];
  /**
   * The message to pass into the Alert.
   */
  message: string | JSX.Element;
  'data-test-id'?: string;
};

const CollapsibleAlert = ({
  children,
  className,
  kind,
  message,
  'data-test-id': testId = 'collapsible-alert',
  ...rest
}: CollapsibleAlertProps) => {
  const classes = cx(styles['CollapsibleAlert--container'], className);

  return (
    <div className={classes} data-test-id={testId} {...rest}>
      <Alert kind={kind} size="medium" className={styles.CollapsibleAlert}>
        <div>{message}</div>

        <Collapsible
          trigger={(props) => (
            <div className={styles['CollapsibleAlert-triggerContainer']}>
              <Button kind="minimal" size="tiny" onClick={props.toggleOpen} icon={props.icon}>
                {props.isOpen ? 'Show less' : 'Show more'}
              </Button>
            </div>
          )}
          label=""
        >
          {children}
        </Collapsible>
      </Alert>
    </div>
  );
};

export { CollapsibleAlert };
export type { CollapsibleAlertProps };
