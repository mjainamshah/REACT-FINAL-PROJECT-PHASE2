import React from 'react'
import img6 from '../images/img6.jpg'

export default function About() {
  return (
    <div>
      <h1>About</h1>

      <div>
      <img src={img6} alt='Image loading...' className='img-fluid'/>
      </div>
      <div className='col-md-6'>
        <div id="landingTitle">Introduction</div>
        <p id="landingText" className="text-dark fs-4 fst-italic text-center py-2 px-5 fw-bolder">
          At Nairobi Central Hardware Ltd, our primary mission is to create opportunities for you and to enhance our communities. To achieve this, we deliver high-quality general hardware and safety-wear products used in construction, manufacturing, home improvement, plumbing, and agriculture.

          Our management philosophy is centered around building a strong, sustainable relationship with you, and our entire business set-up is designed to make transactions easy and efficient.

          Come realize your vision at Nairobi Central Hardware Ltd.
        </p>
      </div>
    </div>
  )
}
