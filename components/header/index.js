import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from './style'

const Header = () => {
  const router = useRouter()
  return (
    <Container>
      <div id='header-content'>
        <div>
          <h1>Next.js</h1>
          <p>Styled-Components + NProgress + Framer Motion</p>
        </div>
        <ul>
          <li className={router.pathname === '/' ? 'active' : ''}>
            <Link href='/'>
              <a>INDEX</a>
            </Link>
          </li>
          <li className={router.pathname === '/about' ? 'active' : ''}>
            <Link href='/about'>
              <a>ABOUT</a>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Header
