import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

import { images } from '../../constants'
import './Experience.scss';


const abouts = [{title: 'Web Development', description: "I am a web developer", imgUrl: images.about01}, 
{title: 'Web Development', description: "I am a web developer", imgUrl: images.about02}, 
{title: 'Web Development', description: "I am a web developer", imgUrl: images.about03}];

const Experience = () => {

  return (
    <div className = "experience_profiles">
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
  )
}

export default Experience