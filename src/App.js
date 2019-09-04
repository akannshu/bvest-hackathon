import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Timeline from './components/timeline/Timeline';
import Prize from './components/prize/Prize';
import Themes from './components/Themes/Themes';
import Venue from './components/Venue/Venue';

import Sponsor from './components/Sponsors/Sponsors';
import Faq from './components/faq/Faq';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div style={{overflow: "hidden"}}>
      <Header/>
      <About/>
      <Timeline/>
     
      <Themes/>
      <Venue/>
      <Prize/>
      
      <Sponsor/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
