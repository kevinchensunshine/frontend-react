import React from 'react'
import './About.scss';
import { images } from '../../constants'
import {motion} from 'framer-motion';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const About = () => {
  return ( 
    <>
    <h2 className = 'abouts-title'>About Me</h2>
    <li className='abouts-components'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition= {{duration: 0.5}}
        whileHover={{scale: 1.01}}
        className="app__about">
        <p className="head-texts"> I'm a rising junior at 
        the University of Illinois at Urbana Champaign 
        studying Computer Science and Chemsitry with 
        interests in Computational Modelling, Machine 
        Learning and IoT among others. I'm particularly involved with research here on campus, as well as a few resident student organizations. Right now, I am looking for Summer 2023 internships within software,
        and am excited and ready to contribute. Below is a little about what 
        I have done during my time here over the past few years. 
        </p>  
      </motion.div>
      <p><i class="arrow right"></i></p>
    </li>
    </>
  )
}

export default About