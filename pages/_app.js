import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'

import Header from '../components/header'

import GlobalStyle from '../styles/global'
import light from '../styles/themes/light'

Router.events.on('routeChangeStart', (url) => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
