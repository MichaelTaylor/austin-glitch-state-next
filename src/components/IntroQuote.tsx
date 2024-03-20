"use client"

import React from 'react'
import {motion} from 'framer-motion'
import Border from './reusable-components/Border'

const IntroQuote = () => {

    const quote : string = `"A delayed game is eventually good, but a rushed game is forever bad."`
    const name : string = `-Shigeru Miyamoto`
  return (
    <div className='font-custom text-center text-3xl xl:text-6xl'>
        <motion.h1 initial={{opacity:0, x: -50}} animate={{opacity:1, x:0}} transition={{delay:0.25, duration: 0.75}}>
            {quote}
        </motion.h1>
        <motion.h1 initial={{opacity:0, x: 50}} animate={{opacity:1, x:0}} transition={{delay:1, duration: 0.75}}>
            {name}
        </motion.h1>
        <Border/>
    </div>
  )
}

export default IntroQuote