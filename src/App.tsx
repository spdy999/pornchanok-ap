import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core'
import React from 'react'
import './App.css'
import { Cover } from './components/Cover'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#000',
            contrastText: '#939DAB',
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
      <CssBaseline />
      <Cover />
      <div>under cover</div>
    </ThemeProvider>
  )
}

export default App
