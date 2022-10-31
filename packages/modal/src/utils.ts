import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const handleMediaChange = () => {
      setMatches(media.matches);
    };
    media.addEventListener('change', handleMediaChange);
    return () => media.addEventListener('change', handleMediaChange);
  }, [matches, query]);

  return matches;
};

export { useMediaQuery };
