import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"
import { useNavigate } from "react-router-dom"

const base_URL = "http://localhost:3001/products"

export default function AddProduct() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios.post(base_URL, {
      title: data.title,
      price: data.price,
      description: data.description,
      image: data.image,
      rating: data.rating,
    })
      .then(response => {
        navigate("/products")
      })
  }

  return (
    <form id="productForm"className="container my-1" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="formTitle">CREATE A NEW PRODUCT!</h1>
      </div>
      <div className="form-group">
        <label htmlFor="title">ITEM NAME:</label>
        <input type="text" id="title" className="form-control" {...register("title", { required: true })} placeholder="Insert item name" />
      </div>
      <div className="form-group">
        <label htmlFor="price">PRICE:</label>
        <input type="text" id="price" className="form-control" {...register("price", { required: true })} placeholder="Insert price (KSH)" />
      </div>
      <div className="form-group">
        <label htmlFor="description">DESCRIPTION:</label>
        <textarea id="description" className="form-control" {...register("description", { required: true })} placeholder="Insert your description" rows="3"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="image">IMAGE URL:</label>
        <input type="text" id="image" className="form-control" {...register("image", { required: true })} placeholder="Insert image URL" />
      </div>
      <div className="form-group">
        <label htmlFor="rating">RATING:</label>
        <select id="rating" className="form-control" {...register('rating', { required: true })}>
          <option value="⭐">⭐</option>
          <option value="⭐⭐">⭐⭐</option>
          <option value="⭐⭐⭐">⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      <button type="submit" className="addProductBtn">ADD PRODUCT!</button>
    </form>
  )
}
