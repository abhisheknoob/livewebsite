import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

export default function Navbar() {
  return (
   <>
   <header>
   <div className='logo'>
    <h1>Abhishek</h1>
   </div>
   <div className='nav'>
      <ul>
        <li><NavLink  to='./Home'>Home</NavLink></li>
        <li><NavLink to='./About'>About</NavLink></li>
        <li><NavLink to='./Services'>Services</NavLink></li>
        <li><NavLink to='./Contact'>Contact</NavLink></li>
      </ul>
   </div>

   </header>
   </>
  )
}
