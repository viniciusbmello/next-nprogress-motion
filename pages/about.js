import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1
        }
      }}
    >
      <h1>About</h1>
    </motion.div>
  )
}

export default About
