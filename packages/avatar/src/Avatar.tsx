import type { IconProps } from '@launchpad-ui/icons';

import { IconDimension, IconSize } from '@launchpad-ui/icons';
import cx from 'clsx';
import { useCallback, useEffect, useState } from 'react';

import './styles/Avatar.css';
import { useIsMounted } from './utils';

type AvatarProps = {
  alt?: string;
  url: string;
  size?: IconSize;
  defaultIcon: React.ComponentType<IconProps>;
  className?: string;
};

const Avatar = ({
  alt = '',
  url,
  defaultIcon: DefaultIcon,
  className,
  size = IconSize.MEDIUM,
}: AvatarProps) => {
  const isMounted = useIsMounted();
  const [useDefaultAvatar, setUseDefaultAvatar] = useState(!url);
  const [imageSource, setImageSource] = useState('');
  const classes = cx(
    'Avatar',
    {
      [`Avatar--${size}`]: !!size,
    },
    className
  );

  const processImageSource = useCallback(async (res: Response) => {
    if (res.status === 404 || res.headers.get('Content-type')?.includes('image/svg')) {
      setImageSource('');
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
    return <DefaultIcon className={classes} size={size} />;
  }

  const dimension = IconDimension[size.toUpperCase() as keyof typeof IconDimension];
  return (
    <img
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
