import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const ThemeButtonComponent: React.FC = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <button onClick={changeTheme}>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeButtonComponent;