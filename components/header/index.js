import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from './style'

const Header = () => {
  const router = useRouter()
  return (
    <Container>
      <nav>
        <li className={router.pathname === '/' ? 'active' : ''}>
          <Link href='/'>
            <a>
              <span className='link-space'>
                <span className='fare'>Index</span>
                <span className='back'>Index</span>
              </span>
            </a>
          </Link>
        </li>
        <li className={router.pathname === '/about' ? 'active' : ''}>
          <Link href='/about'>
            <a>
              <span className='link-space'>
                <span className='fare'>About</span>
                <span className='back'>About</span>
              </span>
            </a>
          </Link>
        </li>
      </nav>
    </Container>
  )
}

export default Header
