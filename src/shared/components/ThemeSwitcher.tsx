import React, { createContext, useContext, useState, Dispatch,  SetStateAction} from 'react';
type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};
// Fix this component so that the theme can be toggled using React Context.
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

export default () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);
