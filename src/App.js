import React from 'react'

import {About, Experience, Footer, Headers, Skills, Testimonials} from './containers';
import { NavBar } from './components/NavBar';

import './App.scss';

const App = () => {
    return (<div className = "app"> 
    <NavBar/>
    <Headers />
    <About />
    <Experience />
    <Skills />
    <Testimonials />
    <Footer />

    </div>);
}

export default App;