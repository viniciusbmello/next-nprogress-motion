import React from 'react'
import Link from 'next/link'

import Container from './style'

const Header = () => {
  return (
    <Container>
      <div>
        <h1>{'</>'} codar.studio</h1>
      </div>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>
    </Container>
  )
}

export default Header
