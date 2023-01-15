import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { images } from '../../constants'
import './Experience.scss';


const abouts = [{title: 'Flory Huggins', description: "Flory Huggins Interactive Simulator", imgUrl: images.flory, link: 'https://polymerphysicsdemos.pages.dev/'}, 
{title: 'Stocastic Percolation', description: "Stocastic Percolation Visualizer", imgUrl: images.stoc, link: 'http://statt.web.illinois.edu/percolation/main.html'}, 
{title: 'Primitive Server', description: "Clients, Servers, and Databases - from scratch!", imgUrl: images.serv, link: 'https://github.com/kevinchensunshine/Workspace'},
{title: 'Personal Portfolio', description: "Built on React.js, HTML5, and SASS", imgUrl: images.back, link: 'https://github.com/kevinchensunshine/Portfolio'},
{title: 'ACSL Assembly', description: "Assembler for the ACSL language", imgUrl: images.acsl, link: 'https://github.com/kevinchensunshine/Acsl-Assembly'}];

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
          <a target = "_blank" rel="noreferrer" href={`${about.link}`}> 
          
          <img src={about.imgUrl} alt = {about.title}></img>
          </a>
          <h2 className = "bold-text" style={{marginTop: 20}}>{about.title}</h2>
          <p className = "p-text" style={{marginTop: 10}}>{about.description}</p>
          
        </motion.div>
      ))}

    </div>
  )
}

export default Experience