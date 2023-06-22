import React from 'react'

export default function Contact() {
  return (
   <>
    <form>
  <label for="fullName">Full Name:</label>
  <input type="text" id="fullName" name="fullName" required/>

  <label for="email">Email Address:</label>
  <input type="email" id="email" name="email" required/>

  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" required/>

  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" required></textarea>

  <div className='btn2'><button type="submit">Submit</button></div>
</form>

   </>
  )
}
