"use client"
import './page.module.css'
import {BsArrow90DegRight} from 'react-icons/bs'
import { useScroll } from 'framer-motion'
import Portfolio from './portfolio/page'
import InBetweenMainAndTechStack from './techStack/page'
import IntroPage from './introPage/page'
import Contact from './contact/page'

export default function Home() {

  return (
    <div id='home'>
        <IntroPage/>
        {/* <InBetweenMainAndTechStack id='techStack'/> */}
        <Portfolio id='portfolio'/>
        <Contact id='contact'/>
    </div>
  )
}
