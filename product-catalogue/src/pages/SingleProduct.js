import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${productId}`)
      .then(response => setProduct(response.data));
  }, [productId]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      axios.delete(`http://localhost:3001/products/${productId}`)
        .then(response => {
          console.log('Product deleted successfully:', response);
          navigate('/Products'); 
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
            <h5>{product.rating}</h5>
            <h1 className="singleTitle">{product.title}</h1>
            <div className="singlePrice mb-3">
              <span>{product.price}KSH</span>
            </div>
            {isEditing ? (
              <div>
                {/* Render editable fields here */}
                {/* Example: */}
                <input type="text" value={product.title} onChange={(e) => setProduct({ ...product, title: e.target.value })} />
              </div>
            ) : (
              <p className="singleDescription">{product.description}</p>
            )}
            <button className="singleProductButton btn-lg btn-outline-light" onClick={handleEdit}>EDIT</button>
            <button className="singleProductButton btn-lg btn-outline-light" onClick={handleDelete}>DELETE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
