import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    
    <Laurels />
    <h1>Stopped at 05:40</h1>
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
