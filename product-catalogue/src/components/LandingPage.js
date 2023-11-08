import React from 'react'
import bulb1 from '../images/bulb1'

export default function LandingPage() {
  return (
    <div id='landing' className='container row mx-auto'>   
      <div className='col-md-6'>
        <img src={bulb1} alt='Image loading...' className='img-fluid'/>
      </div>
      <div className='col-md-6'>
        <div id="landingTitle" >Landingpage</div>
        <p id="landingText" className="text-white fs-4 fst-italic text-center py-2 px-5 fw-bolder">
            Imperative programming: Explicitly describes the actions a program should take, each step of the way. Describes how a program should go about doing those actions.
            Declarative programming: Explicitly describes the actions a program should take, each step of the way. Describes how a program should go about doing those actions.Explicitly describes the actions a program should take, each step of the way. Describes how a program should go about doing those actions!
        </p>
      </div>
    </div> 
  )
}
 