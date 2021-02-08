import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import NProgress from 'nprogress'
import GlobalStyle from '../styles/global'

Router.events.on('routeChangeStart', (url) => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <nav>
        <style jsx>{`
          a {
            margin: 0 10px 0 0;
          }
        `}</style>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
