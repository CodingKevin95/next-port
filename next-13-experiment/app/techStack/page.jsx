'use client';
import './techStack.css'
import kevin from '../assets/photo-of-kevin.jpg'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

export default function techStack() {

    const {ref, inView} = useInView();

    const animation = useAnimation()

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1,
                }
            })
        }
        if(!inView){
            animation.start({x: '-100vw'})
        }
        console.log("use effect hook, inView = ", inView)
    }, [inView])

    return (
    <div className='techStackBackground'>
        <div className='imageOfKevinPage'
        // animate={animation}
        // ref={ref}
        >
            <Image
              src={kevin}
              alt="Picture of the author"
              className='imageOfKevin'
            />
            <div className='skillsBox'>
                <h1 className='skillsTitle'>Skills</h1>
                <p>HTML</p>
            </div>
        </div>
    </div>
    )
}