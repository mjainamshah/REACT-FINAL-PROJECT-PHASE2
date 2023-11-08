import React from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'

export default function LandingPage() {
  return (
    <div id='landing' className='container row mx-auto'>
      <div className='col-md-6'>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={img1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        
        {/* <header className="bg-image"><div className="bg-container"><h1>NCH</h1><h2>ORDER WITH US TODAY!</h2><button className="h-btn"><a className="btn-link" href="/estimate">Know your emissions</a> </button></div><div className="carbon-video-container"><video className="carbon-video" type="video/mp4" src="https://assets.mixkit.co/videos/preview/mixkit-man-with-refining-tool-producing-sparks-30764-large.mp4" autoPlay="" loop=""></video></div></header> */}
      </div>
      <div className='col-md-6'>
        {/* <div id="landingTitle">Introduction</div> */}
        <p id="landingText" className="text-dark fs-4 fst-italic text-center py-2 px-5 fw-bolder">
          At Nairobi Central Hardware Ltd, our primary mission is to create opportunities for you and to enhance our communities. To achieve this, we deliver high-quality general hardware and safety-wear products used in construction, manufacturing, home improvement, plumbing, and agriculture.

          Our management philosophy is centered around building a strong, sustainable relationship with you, and our entire business set-up is designed to make transactions easy and efficient.

          Come realize your vision at Nairobi Central Hardware Ltd.
        </p>
      </div>
    </div>
  )
}
