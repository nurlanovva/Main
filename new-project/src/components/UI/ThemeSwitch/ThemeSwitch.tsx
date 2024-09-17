import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeProvider/ThemeProvider';
import { Button } from '@mui/material';
export const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <Button onClick={toggleTheme}>{theme}</Button>;
};
