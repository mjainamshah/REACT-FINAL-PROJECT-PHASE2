import React, { useState, useEffect } from 'react'
import "../assets/styles.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const base_URL = "http://localhost:3001/products"


export default function Products() {
    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get(base_URL)
            .then(response => setProducts(response.data))
    }, [])
    console.log(products)

    return (
        <section className="products py-5 mb-3">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="header">
                            <h2>
                                PRODUCTS
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {products.map((product) => (
                        <>
                            <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <div className="single__product">
                                        <div className="part1">
                                            <img className="img-fluid" src={product.image} />
                                        </div>
                                        <div className="part2">
                                            <h3 className="product__title">{product.title}</h3>
                                            <h4 className="product__price">{product.price}</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </>
                    ))}
                </div>
            </div>
        </section>

    )
}
