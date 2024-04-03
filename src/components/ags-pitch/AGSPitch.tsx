"use client"

import React, {useEffect, useRef} from 'react'
import {useRouter} from 'next/navigation'
import Button from '../shared/reusable-components/Button'
import Border from '../shared/reusable-components/Border'

import {motion, useInView, useAnimation} from 'framer-motion'

const AGSPitch = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }
    , [isInView, mainControls])

    const router = useRouter()

    const pitch : string = `How do you know your game's good? Do you know? When did you show it to anyone? Tunnel vision is going to seep 
in after awhile and we don't want to show our games half blind.
That's what Austin Glitch State is for. AGS is an local meetup for developers to get feedback from other developers 
on their games in a chill and free flowing setting.`

    const callToAction : string = `We meet every other month but you can submit your game at any time. Further details will be below. Join us!`

    const submitGame = () => {
        router.push('/signup')
    }
//todo make hook for useAnimation
  return (
    <div ref={ref} className='font-custom'>
        <motion.h1 variants={{hidden: {opacity:0}, visible: {opacity: 1}}} 
        initial="hidden" 
        animate={mainControls} 
        transition={{duration: 1, delay: 0.5}}
        className='w-4/5 xl:w-3/5  mx-auto text-3xl xl:text-5xl'>
            {pitch}
        </motion.h1>
        <motion.h1 initial={{opacity: 0}} animate={{opacity:1}} className='w-4/5 xl:w-3/5 text-center mx-auto mb-20 mt-36 text-4xl xl:text-6xl'>
            {callToAction}
        </motion.h1>
        <Button className='border-8 xl:w-1/4 h-48 xl:text-7xl' buttonText='Submit Game' onclick={submitGame}/>
        <Border/>
    </div>
  )
}

export default AGSPitch