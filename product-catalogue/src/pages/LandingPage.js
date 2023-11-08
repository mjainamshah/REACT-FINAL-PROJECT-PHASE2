import React from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'

export default function LandingPage() {
  return (
    <div className="container my-2 mx-auto">
      <div>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={img1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img4} alt="Fourth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img5} alt="Fifth slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}