"use client"

import React from 'react'
import Image from 'next/image'
import { GradientBlob } from './ui/GradientBlob'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='relative flex-col items-center justify-center p-10 overflow-x-clip'>
        <div className='absolute -top-20 -left-40 opacity-50 -z-10 animate-pulse-slow' >
            <GradientBlob colors={["#FF00A9", "#00F0FF"]} size={500} blur={60} />
        </div>
        <h1 className='text-3xl md:text-5xl font-bold text-center'>
            <span className='text-fuchsia-700'>Empower Your Code</span><br /> Tips, Tricks, and Insights for Programmers
        </h1>
        <p className='text-lg text-center mt-6'>
            Learn how to write better code, faster, and with fewer bugs
        </p>
        <div className='flex items-center justify-center mt-10 space-x-2'>
            <motion.div
            className='rounded-lg aspect-square overflow-hidden'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{  opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{  duration: 0.2, type: 'spring', damping: 10, stiffness: 100 }}
            >
                <Image src='/images/binary-6285217.jpg' alt='Hero Image' width={400} height={500}
                className='rounded-lg aspect-square'
                />
            </motion.div>
            <motion.div
            className='rounded-lg aspect-square overflow-hidden'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{  opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{  duration: 0.8, type: 'spring', damping: 10, stiffness: 100 }}
            >
                <Image src='/images/pass2.jpg' alt='Hero Image' width={400} height={500}            
                className='rounded-lg aspect-square'
                />
            </motion.div>
            <motion.div
            className='rounded-lg aspect-square overflow-hidden'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{  opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{  duration: 0.2, type: 'spring', damping: 10, stiffness: 100 }}
            >
                <Image src='/images/rahul-mishra-glmeeU0zabw-unsplash.jpg' alt='Hero Image' width={400} height={500}            
                className='rounded-lg aspect-square'
                />
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
