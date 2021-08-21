import React from 'react';

const ThemeContext = React.createContext({
  theme: 'primary',
  onChange: () => {},
});

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
