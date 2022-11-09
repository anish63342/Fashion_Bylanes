import React from 'react';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Partner from './components/Partner';
import About from './components/About';
import Work from './components/Work';
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Homepage />
      <About/>
      <Partner/>
      <Work/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App;
