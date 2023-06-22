import React from 'react'
import image from '../images/png4.jpg'
import { NavLink } from 'react-router-dom'
import Common from './Common'

export default function Home() {
  return (
    <>
<Common name="Grow Your Bussiness " img={image} visit='/Services' btname='Get Started'/>

    </>
  )
}
