"use client"

import React from 'react'
import {Images} from '../data/AGSPhotos'
import Image from 'next/image';

import {motion} from 'framer-motion'
import Border from '../shared/reusable-components/Border';

const ImageGallery = () => {

  const imageList = Images.map((image, index) => {
    return (
    <motion.div key={index} initial={{opacity:0}} animate={{ opacity: 1 }} transition={{delay: index * 0.05}} className="relative h-32 w-64 md:h-64 md:w-96">
      <Image src={image} alt="AGS Photo" sizes="100%" fill priority className="rounded-sm" />
    </motion.div>)
  })

  return (
    <div className='flex flex-col items-center justify-center'>
    <motion.div initial={{opacity: 0}} animate={{ opacity: 1,}} className='grid grid-cols-1 lg:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3 gap-4'>
        {imageList}
    </motion.div>
    <Border />
    </div>
  )
}

export default ImageGallery