import type { IconProps } from '@launchpad-ui/icons';

import { IconSize, Person } from '@launchpad-ui/icons';
import cx from 'clsx';
import { useCallback, useEffect, useState } from 'react';

import './styles/Avatar.css';
import { AvatarSize, AvatarDimension } from './types';
import { useIsMounted } from './utils';

type AvatarProps = {
  alt?: string;
  url: string;
  size?: AvatarSize;
  initials?: string;
  'aria-label'?: string;
  defaultIcon?: React.ComponentType<IconProps>;
  testId?: string;
  className?: string;
};

const Avatar = ({
  alt = '',
  url,
  defaultIcon: DefaultIcon = Person,
  className,
  initials,
  testId,
  'aria-label': ariaLabel,
  size = AvatarSize.MEDIUM,
}: AvatarProps) => {
  const isMounted = useIsMounted();
  const [useDefaultAvatar, setUseDefaultAvatar] = useState(!url);
  const [imageSource, setImageSource] = useState<string | null>(null);
  const classes = cx(`Avatar Avatar--${size}`, className);

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

      const initialsContainerClasses = cx(classes, `Avatar--initials Avatar--color${color}`);

      return (
        <div className={initialsContainerClasses} aria-label={ariaLabel} data-test-id={testId}>
          <span className="Avatar-initials-content">{initials}</span>
        </div>
      );
    } else {
      return (
        <DefaultIcon
          aria-label={ariaLabel}
          className={classes}
          data-test-id={testId}
          size={IconSize[size.toUpperCase() as keyof typeof AvatarSize]}
        />
      );
    }
  }

  const dimension = AvatarDimension[size.toUpperCase() as keyof typeof AvatarDimension];

  return (
    <img
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
