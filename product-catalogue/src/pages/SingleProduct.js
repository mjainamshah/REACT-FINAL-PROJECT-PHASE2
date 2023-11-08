import React from 'react'

export default function SingleProduct() {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
        <div  className="col-md-6">
         <img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"/>
        </div>
        <div  className="col-md-6">
          <h1 className="display-5 fw-bolder">Product 1</h1>
          <div className="fs-5 mb-3"> 
            <span>500KSH</span>
          </div>
          <p className="lead"> Enables us to set up routes that allow our users to navigate to different "pages" in our applications. Will also update the URL in the browser to reflect whichever page the user has navigated to.

</p>
        </div>
        </div>
      </div>
    </section>
  )
}
