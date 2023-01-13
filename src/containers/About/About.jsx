import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

import { images } from '../../constants'
import './About.scss';

const abouts = [{title: 'Web Development', description: "I am a web developer", imgUrl: images.about01}, 
{title: 'Web Development', description: "I am a web developer", imgUrl: images.about02}, 
];

const About = () => {
  return (
    <>
    <small className="head-text"> I'm a rising junior at the University of Illinois at Urbana Champaign studying Computer Science and Chemsitry with interests in Computational Modelling, Machine Learning and IoT with applications in the natural sciences. Below is a little about what I have done during my time here. 
    </small>
    <div className='app__profiles'>
      {abouts.map((about, index) => (
        <motion.div
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration:0.5, type: 'tween'}}
        className="app__profile-item"
        key={about.title + index}>
          <img src={about.imgUrl} alt = {about.title}></img>
          <h2 className = "bold-text" style={{marginTop: 20}}>{about.title}</h2>
          <p className = "p-text" style={{marginTop: 10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About