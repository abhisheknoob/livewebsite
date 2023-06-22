import React from 'react'
import image from '../images/png4.jpg'
import { NavLink } from 'react-router-dom'
export default function Common(props) {
  return (
    <div>
         <section>
        <div className='left'>
            <h1>{props.name}</h1>
            <h2>with <span>Abhishek Chaudhary</span></h2>
            <h3>
                we are the tream of talented web developers 
            </h3>
           <div className='btn1'>
            <NavLink  to={props.visit}>
            <button>{props.btname}</button>
            </NavLink>
           </div>
        </div>
        <div className='right'>
            <img src={props.img} height='70%' width='65%'></img>
        </div>
    </section>
    </div>
  )
}
