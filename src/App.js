// App.js
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Services from './component/Services';
import Home from './component/Home';
import About from './component/About';

import Contact from './component/Contact';
import Navbar from './component/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route  path='/Home' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;

