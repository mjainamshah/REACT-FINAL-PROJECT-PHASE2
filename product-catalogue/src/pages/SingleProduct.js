import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function SingleProduct() {     // SingleProduct component
  const { productId } = useParams();          // Get the productId from the route parameters
  const [product, setProduct] = useState({}); // State to hold the product data
  const [editedProduct, setEditedProduct] = useState({}); // State for handling editing of products
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();             // Navigation function for redirecting after deletion

  useEffect(() => {                           // Fetch the product data when the component mounts or even when the productId changes
    axios.get(`https://crud-react-oc6v.onrender.com/products/${productId}`)
      .then(response => setProduct(response.data));
  }, [productId]);

  const handleEdit = () => {                  // Function to handle entering edit mode
    setIsEditing(true);
    setEditedProduct({ ...product });
  };

  const handleSave = () => {                  // Function to handle saving the edited product
    axios.put(`http://localhost:3001/products/${productId}`, editedProduct)
      .then(response => {
        setProduct(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  };

  const handleDelete = () => {                // Function to handle product deletion
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
                <label htmlFor="editTitle">Title:</label>
                <input
                  type="text"
                  id="editTitle"
                  value={editedProduct.title || ""}
                  onChange={(e) => setEditedProduct({ ...editedProduct, title: e.target.value })}
                  style={{ color: 'black' }}
                />
                <label htmlFor="editRating">Rating:</label>
                <input
                  type="text"
                  id="editRating"
                  value={editedProduct.rating || ""}
                  onChange={(e) => setEditedProduct({ ...editedProduct, rating: e.target.value })}
                  style={{ color: 'black' }}
                />
                <label htmlFor="editPrice">Price:</label>
                <input
                  type="text"
                  id="editPrice"
                  value={editedProduct.price || ""}
                  onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
                  style={{ color: 'black' }}
                />
                <label htmlFor="editDescription">Description:</label>
                <textarea
                  id="editDescription"
                  value={editedProduct.description || ""}
                  onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
                  style={{ color: 'black' }}
                />
                <button className="btn btn-primary" onClick={handleSave}>Save</button>
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
