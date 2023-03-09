"use client"
import './Portfolio.css'
import Image from 'next/image'
import aer from '../assets/aer-portfolio.png'
import rps from '../assets/rps.png'
import solar from '../assets/solar-conveyance.png'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import {AiOutlineLink} from 'react-icons/ai'

export default function Portfolio() {

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

    const portfolioArray = [
        {
            img: aer,
            description: "Created a website for client's business which recieves 1000's of visits per week. The frontend was made usings CSS, React.js and some react libraries. Google analytics was implimented to help the client create a business plan to increase the proformance of the business.",
            liveLink: "https://aer-nailbar.netlify.app/"
        },
        {
            img: rps,
            description: "Desktop and laptop view only. A classic game that everyone knows and loves, but with a short narrative, an unique UI and interactions to give it a little bit of life. Hope you enjoy!",
            liveLink: "https://codingkevin95.github.io/-rock-paper-scissor/"
        },
        {
            img: solar,
            description: "The objectivce of this application is to display images and information about our solar system. APIs from SpaceX and NASA were used to create this application.",
            liveLink: "https://solar-conveyance-project.netlify.app/"
        },
        // {
        //     img: rps,
        //     description: "Desktop and laptop view only. A classic game that everyone knows and loves, but with a short narrative, an unique UI and interactions to give it a little bit of life. Hope you enjoy!",
        //     liveLink: "https://codingkevin95.github.io/-rock-paper-scissor/"
        // },
    ]

    return (
        <motion.div className='aboutPortfolio'
        animate={animation}
        ref={ref}
        >
            <h1>Projects</h1>
            <div className='portfolioProjectBox'>
            { portfolioArray.map((item, i) => {
                    return (
                        <div class="portfolioProject"
                        key={i}
                        >
                            <Image
                                src={item.img}
                                alt="Picture of the author"
                                className='portfolioImages'
                            />
                            <div className='portfolioIcons'>
                                <a href={`${item.liveLink}`} target="_blank" rel="noreferrer">
                                    <AiOutlineLink className='linkButton'/>
                                </a>
                            </div>
                            <div className='portfolioParagraphBox'>
                                <p className='portfolioParagraph'>
                                    {item.description}
                                </p>
                            </div>    
                        </div>
                    );
                }) }
            </div>
        </motion.div>
    )
}