import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
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
        <h1>About</h1>
      </motion.div>
    </>
  )
}

export default About
