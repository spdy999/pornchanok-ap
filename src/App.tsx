import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core'
import React from 'react'
import './App.css'
import { FullPages } from './components/FullPages'
import { NavBar } from './components/NavBar'

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
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <CssBaseline />
      <FullPages />
    </ThemeProvider>
  )
}

export default App
