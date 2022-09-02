import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Partner from './components/Partner';
import Platform from './components/Platform';
import Work from './components/Work';


const App = () => {
  return (
    <div>
      <Header />
      <Platform/>
      <Partner/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default App;
