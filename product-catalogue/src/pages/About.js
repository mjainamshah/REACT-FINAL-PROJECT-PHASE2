import React from 'react'
import img6 from '../images/img6.jpg'

export default function About() {
  return (
    <div id="backgroundImage"className="container">
      <h1 id="landingTitle">ABOUT US</h1>
      <div className="row p-0 align-items-center">
        <div className="p-1 col-md-6 text-center">
          {/* <img src={img6} alt="Image loading..." id="landingImage" /> */}
        </div>
        <div className="p-0 col-md-6">
          <p id="landingText" className="text-white fst-italic text-center px-5 py-0 ">
            At Nairobi Central Hardware Ltd, our primary mission is to create opportunities for you and to enhance our communities. To achieve this, we deliver high-quality general hardware and safety-wear products used in construction, manufacturing, home improvement, plumbing, and agriculture.

            Our management philosophy is centered around building a strong, sustainable relationship with you, and our entire business set-up is designed to make transactions easy and efficient.

            Come realize your vision at Nairobi Central Hardware Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}