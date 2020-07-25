import React from 'react';
import logo from './logo.svg';
import {
  useMediaQuery,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
