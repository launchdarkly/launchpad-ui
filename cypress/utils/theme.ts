const applyTheme = (theme: string) => {
  setTimeout(() => document.documentElement.setAttribute('data-theme', theme));
};

const onChange = ({ matches: isDark }: { matches: boolean }) => {
  applyTheme(isDark ? 'dark' : 'light');
};

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', onChange);
applyTheme(mediaQuery.matches ? 'dark' : 'light');
