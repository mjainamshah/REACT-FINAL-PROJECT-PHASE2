import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${productId}`)
      .then(response => setProduct(response.data));
  }, [productId]);

  const handleEdit = () => {
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      axios.delete(`http://localhost:3001/products/${productId}`)
        .then(response => {
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
    }
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img className="card-img-top mb-5 mb-md-0" src={product.image} alt={product.title} />
          </div>
          <div className="col-md-6">
            <h1 className="singleTitle">{product.title}</h1>
            <div className="singlePrice mb-3">
              <span>{product.price}KSH</span>
            </div>
            <p className="singleDescription">{product.description}</p>
            <button onClick={handleEdit}>EDIT</button>
            <button onClick={handleDelete}>DELETE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
