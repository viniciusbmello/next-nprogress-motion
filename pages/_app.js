import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'

import Particles from 'react-particles-js'
import { useSpring, animated } from 'react-spring'

import Header from '../components/header'

import GlobalStyle from '../styles/global'
import light from '../styles/themes/light'

Router.events.on('routeChangeStart', (url) => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

const MyApp = ({ Component, pageProps }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }))
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      <div
        className='container'
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
          <Particles
            params={{
              particles: {
                number: {
                  value: 200,
                  density: { enable: true, value_area: 1500 }
                },
                lineLinked: { enable: false },
                size: { value: 1 },
                opacity: { anim: { enable: true, speed: 2, opacity_min: 0.1 } }
              },
              interactivity: {
                events: { onhover: { enable: true, mode: 'connect' } },
                modes: {
                  connect: {
                    distance: 120,
                    radius: 180,
                    links: { opacity: 0.05 }
                  }
                }
              },
              retina_detect: true
            }}
          />
        </animated.div>
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
