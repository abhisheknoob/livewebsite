import React from 'react'
import Common from './Common'
import image from '../images/Png3.jpg'

export default function About() {
  return (
   <>
<Common name='Welcome to About Page' img={image} visit='/Contact' btname='contact us' />
   </>
  )
}
