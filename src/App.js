import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
  } from "react-router-dom";
import {About, Experience, Footer, Headers, Skills, Testimonials, Flory} from './containers';
import { NavBar } from './components/NavBar';
import './App.scss';

const App = () => {
    return (<div className = "app"> 
    <Router>
        <NavBar/>
        <Routes>

          <Route path="/about" component={About} />
            
        </Routes>
        
      
    <Headers />
    <Testimonials />
    <About />
    <Experience />
    <Skills />
    <Footer />
    </Router>
    </div>);
}

export default App;