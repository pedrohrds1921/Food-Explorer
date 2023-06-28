import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/Styles/global'
import theme from './Styles/theme'
import { Routes } from './routes'

import { AuthProvider } from './hooks/auth'
import { SearchProvider } from './hooks/Search'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthProvider>
      <SearchProvider>
        <Routes />
      </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
