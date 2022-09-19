import type { IconProps } from '@launchpad-ui/icons';
import type { ComponentType, HTMLAttributes } from 'react';

import { IconSize, Person } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { useCallback, useEffect, useState } from 'react';

import styles from './styles/Avatar.module.css';
import { AvatarSize, AvatarDimension } from './types';
import { useIsMounted } from './utils';

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  alt?: string;
  url: string;
  size?: AvatarSize;
  initials?: string;
  defaultIcon?: ComponentType<IconProps>;
};

const Avatar = ({
  alt = '',
  url,
  defaultIcon: DefaultIcon = Person,
  className,
  initials,
  size = AvatarSize.MEDIUM,
  ...rest
}: AvatarProps) => {
  const isMounted = useIsMounted();
  const [useDefaultAvatar, setUseDefaultAvatar] = useState(!url);
  const [imageSource, setImageSource] = useState<string | null>(null);
  const classes = cx('Avatar', styles.Avatar, styles[`Avatar--${size}`], className);

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
        .catch();
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
        <div className={initialsContainerClasses} {...rest}>
          <span className={styles['Avatar-initials-content']}>{initials}</span>
        </div>
      );
    } else {
      return (
        <DefaultIcon
          className={classes}
          size={IconSize[size.toUpperCase() as keyof typeof AvatarSize]}
          {...rest}
        />
      );
    }
  }

  const dimension = AvatarDimension[size.toUpperCase() as keyof typeof AvatarDimension];

  return (
    <img
      {...rest}
      alt={alt}
      className={classes}
      src={imageSource}
      width={dimension}
      height={dimension}
      onError={() => setUseDefaultAvatar(true)}
    />
  );
};

export { Avatar };
export type { AvatarProps };
