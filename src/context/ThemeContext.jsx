import { createContext, useState, useLayoutEffect } from 'react';

export const ThemeContext = createContext();

const getInitialTheme = () => {
  try {
    return localStorage.getItem('current_theme') || 'light';
  } catch {
    return 'light';
  }
};

const applyTheme = (theme) => {
  try {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('current_theme', theme);
  } catch {}
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
