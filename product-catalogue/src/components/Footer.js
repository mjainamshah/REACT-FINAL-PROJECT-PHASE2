import React from 'react'

export default function Footer() {

  return (
    <>
      <div id="footerBackground">
        <div className="container">
          <footer className="py-2 my-2 text-dark">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3 text-light">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-light fw-normal fs-4">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-light fw-normal fs-4">Pricing</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-light fw-normal fs-4">FAQs</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-light fw-normal fs-4">About</a></li>
            </ul>
            <h2 className="text-center text-light fw-bold">© 2023 NAIROBI CENTRAL HARWARE LTD.</h2>
          </footer>
        </div>
      </div>
    </>
  )
}
