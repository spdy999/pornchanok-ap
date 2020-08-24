import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core'
import React from 'react'
import './App.css'
import { FullPages } from './components/FullPages'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#000',
            contrastText: '#fff',
          },
          text: {
            primary: '#fff',
          },
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
          },
        },
        overrides: {
          MuiTypography: {
            root: {
              marginBlockStart: '0.5em',
              marginBlockEnd: '0.5em',
            },
            h1: {
              fontSize: '2rem',
            },
            h2: {
              fontSize: '1.5rem',
            },
            h3: {
              fontSize: '1rem',
            },
          },
        },
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FullPages />
    </ThemeProvider>
  )
}

export default App
