import type { IconProps } from '@launchpad-ui/icons';
import type { ComponentType, ComponentProps } from 'react';

import { Person } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { useCallback, useEffect, useState } from 'react';

import styles from './styles/Avatar.module.css';
import { useIsMounted } from './utils';

type AvatarProps = ComponentProps<'img'> & {
  alt?: string;
  url: string;
  size?: 'tiny' | 'small' | 'medium' | 'large';
  initials?: string;
  defaultIcon?: ComponentType<IconProps>;
  'data-test-id'?: string;
};

const DIMENSIONS = {
  tiny: '10',
  small: '16',
  medium: '24',
  large: '40',
};

const Avatar = ({
  alt = '',
  url,
  defaultIcon: DefaultIcon = Person,
  className,
  initials,
  size = 'medium',
  'data-test-id': testId = 'avatar',
  ...rest
}: AvatarProps) => {
  const isMounted = useIsMounted();
  const [useDefaultAvatar, setUseDefaultAvatar] = useState(!url);
  const [imageSource, setImageSource] = useState<string | null>(null);
  const classes = cx(styles.Avatar, styles[`Avatar--${size}`], className);

  const processImageSource = useCallback(async (res: Response) => {
    if (res.status === 404 || res.headers.get('Content-type')?.includes('image/svg')) {
      setImageSource(null);
    } else {
      const img = await res.blob();
      setImageSource(URL.createObjectURL(img));
    }
  }, []);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => {
          if (isMounted()) {
            processImageSource(res);
          }
        })
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        .catch(() => {});
    } else {
      setImageSource('');
    }
  }, [url, processImageSource, isMounted]);

  if (useDefaultAvatar || !imageSource) {
    if (initials) {
      const color = (initials.charCodeAt(0) + initials.charCodeAt(1)) % 5;

      const initialsContainerClasses = cx(
        classes,
        styles['Avatar--initials'],
        styles[`Avatar--color${color as 0 | 1 | 2 | 3 | 4}`]
      );

      return (
        <div className={initialsContainerClasses} data-test-id={testId} {...rest}>
          <span className={styles['Avatar-initials-content']}>{initials}</span>
        </div>
      );
    } else {
      return <DefaultIcon className={classes} data-test-id={testId} size={size} {...rest} />;
    }
  }

  const dimension = DIMENSIONS[size];

  return (
    <img
      {...rest}
      alt={alt}
      className={classes}
      src={imageSource}
      width={dimension}
      height={dimension}
      data-test-id={testId}
      onError={() => setUseDefaultAvatar(true)}
    />
  );
};

export { Avatar };
export type { AvatarProps };
