"use client"

import React from 'react'
import {useRouter} from 'next/navigation'
import Button from '../shared/reusable-components/Button'
import Border from '../shared/reusable-components/Border'

const AGSPitch = () => {

    const router = useRouter()

    const pitch : string = `How do you know your game's good? Do you know? When did you show it to anyone? Tunnel vision is going to seep 
in after awhile and we don't want to show our games half blind.
That's what Austin Glitch State is for. AGS is an local meetup for developers to get feedback from other developers 
on their games in a chill and free flowing setting.`

    const callToAction : string = `We meet every other month but you can submit your game at any time. Further details will be below. Join us!`

    const submitGame = () => {
        router.push('/signup')
    }

  return (
    <div className='font-custom'>
        <h1 className='w-4/5 xl:w-3/5  mx-auto text-3xl xl:text-5xl'>
            {pitch}
        </h1>
        <h1 className='w-4/5 xl:w-3/5 text-center mx-auto mb-20 mt-36 text-4xl xl:text-6xl'>
            {callToAction}
        </h1>
        <Button className='border-8 xl:w-1/4 h-48 xl:text-7xl' buttonText='Submit Game' onclick={submitGame}/>
        <Border/>
    </div>
  )
}

export default AGSPitch