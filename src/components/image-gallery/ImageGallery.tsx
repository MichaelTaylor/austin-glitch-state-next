"use client"

import React from 'react'
import {Images} from '../data/AGSPhotos'
import Image from 'next/image';

import {motion} from 'framer-motion'

const ImageGallery = () => {

  const imageList = Images.map((image, index) => {
    return (
    <motion.div key={index} initial={{opacity:0}} animate={{ opacity: 1 }} transition={{delay: index * 0.05}}>
      <Image  src={image} alt="AGS Photo" height={400} width={400} priority className = "rounded-sm h-auto" />
    </motion.div>)
  })

  return (
    <div className='flex items-center justify-center h-screen'>
    <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1,}}
  viewport={{ once: true }}  className='grid grid-cols-2 grid-rows-2 xl:grid-cols-3 gap-4'>
        {imageList}
    </motion.div>
    </div>
  )
}

export default ImageGallery