import React from 'react'
//react for elements
import {motion} from 'framer-motion';
import {images} from '../../constants';
import './Headers.scss'

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

const Headers = () => {
  return (
    <div id = "home" className = "app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition= {{duration: 0.5}}
        className="app__header-info">
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">

              <div style = {{marginLeft: 20}}>
                <p className="p-text">Hi! I'm</p>
                <h1 className="head-text">Kevin</h1>
              </div>
            </div>

            <div className="tag-cmp app_flex">
              <p className='p-text'>CS+Chem @UIUC</p>
              <p className='p-text'>Researcher</p>
            </div>
          </div>
      </motion.div>

      <motion.div 
        whileInView={{ opacity: [0, 1]}}
        transition= {{duration: 0.5, delayChildren: 0.5}}
        className="app__header-img">
          <img src = {images.profile} alt="profile_bg"/>
          <motion.img
            whileInView={{ scale: [0, 1]}}
            transition= {{duration: 1, ease: 'easeInOut'}}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />

      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className = "app__header-circles"
        >
          {[images.uiuc, images.react, images.cpp].map((circle, index) => (
            <div className="circle-cmp app__flex" key = {'circle-index'}>
              <img src = {circle} alt = "circle"/>
            </div>
          ))}
        
      </motion.div>
      
    </div>
    
    
  )
}

export default Headers