import React from 'react';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Header from './components/Header';
import Partner from './components/Partner';
import About from './components/About';
import Work from './components/Work';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Header />
      <About/>
      <Partner/>
      <Work/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App;
