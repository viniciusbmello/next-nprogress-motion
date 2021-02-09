import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Index = () => {
  return (
    <>
      <Image
        src='/images/indexBackground.webp'
        alt='Hands'
        layout='fill'
        objectFit='cover'
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <h1 style={{ color: 'white' }}>Index</h1>
      </motion.div>
    </>
  )
}

export default Index
