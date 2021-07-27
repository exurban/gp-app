import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

const ThemeMenuItem: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="mr-8 p-2" aria-label="toggle light dark">
      {theme === 'light' ? (
        <MoonIcon
          className="h-6 lg:h-7 xl:h-8 2xl:h-9 w-6 lg:w-7 xl:w-8 2xl:w-9 text-yellow-400"
          onClick={() => setTheme('dark')}
        />
      ) : (
        <SunIcon
          className="h-6 lg:h-7 xl:h-8 2xl:h-9 w-6 lg:w-7 xl:w-8 2xl:w-9 text-yellow-200"
          onClick={() => setTheme('light')}
        />
      )}
    </div>
  );
};

export default ThemeMenuItem;
