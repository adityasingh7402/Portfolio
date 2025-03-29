import React, { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const TransitionEffect = () => {
  const controls = useAnimationControls()

  useEffect(() => {
    const sequence = async () => {
      // First move to right edge
      await controls.start({
        x: "100%",
        transition: { duration: 0.4, ease: "easeInOut" }
      })
      // Then reverse with width animation
      await controls.start({
        x: "0%",
        width: "0%",
        transition: { duration: 0.8, ease: "easeInOut" }
      })
      window.dispatchEvent(new Event('transitionComplete'))
    }
    sequence()
  }, [controls])

  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-[999] bg-primary'
        initial={{ x: "0", width: "100%" }}
        animate={controls}
      />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-[998] bg-muted'
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-[997] bg-background'
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  )
}

export default TransitionEffect
