"use client"

import React from 'react'
import Image from 'next/image'
import Circles from "../public/circles.png"

const CircleImage = () => {
  return (
    <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
        <Image
        className='w-full h-full'
        src={Circles} width={200} height={300} alt='circle'
        />
    </div>
)
}

export default CircleImage