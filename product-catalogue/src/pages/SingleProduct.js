import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"


export default function SingleProduct() {
  const { productId } = useParams()
  const [product, setProduct] = useState([])
  

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${productId}`)
      .then(response => setProduct(response.data))
  }, [])
  console.log(product)

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img className="card-img-top mb-5 mb-md-0" src={product.image} />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bolder">{product.title}</h1>
            <div className="fs-5 mb-3">
              <span>{product.price}KSH</span>
            </div>
            <p className="lead"> Enables us to set up routes that allow our users to navigate to different "pages" in our applications. Will also update the URL in the browser to reflect whichever page the user has navigated to.
            </p>
            <button>EDIT</button>
            <button>DELETE</button>
          </div>
        </div>
      </div>
    </section>
  )
}

