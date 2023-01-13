import React from 'react'
import {motion} from 'framer-motion';
import './Footer.scss'

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
const styles = {
  className:'text-gray-600 block px-2 py-1 hover:underline hover:text-gray-900',
  activeClassName: 'underline text-gray-900'
}
const links = [
  {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: 'https://github.com/kevinchensunshine',
      name: 'Github'
  },
  {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: 'https://www.linkedin.com/in/kevin-chen-uiuc/',
      name: 'LinkedIn'
  },
  {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/contact',
      name: 'Phone: 971-371-8086'
  },    
  {
    className: styles.className,
    activeClassName: styles.activeClassName,
    to: '/contact',
    name: 'Email: kevinlc3@illinois.edu'
  },    
]    

const Footer = () => {
  return (
    <ul className='app-footer'
    whileInView = {{ x: [-100, 0], opacity: [0.5]}}>
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition= {{duration: 0.5}}
        className="app__footer-info">
          {links.map((item) => (
            item.to != '/contact' ?
              <li className="app__flex p-text" key = {`link-${item}`}>
                <div/>
                <a target = "_blank" rel="noreferrer" href={`${item.to}`}>{item.name}</a>
              </li>
            : <li className="app__flex p-text" key = {`link-${item}`}>
                <div/>
                <a>{item.name}</a>
              </li>
          ))}
      </motion.div>
    </ul>

  )
}

export default Footer