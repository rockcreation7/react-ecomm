import React from "react"
import { Link } from "react-router-dom"
import data from "../data"
import { useDispatch } from "react-redux"
import {addToCart} from "../actions/cartActions"
export const HomeScreen: React.FC = () => {
  const dispatch = useDispatch()
  const handleAddToCart = (id: string) => {
    dispatch(addToCart(id))
  }
  return (
    <>
      {data.products.map((product) => (
        <div key={product._id}>
          <Link to={"/product/" + product._id}>Go to Product detail</Link>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.rating}</div>
          <div>{product.category}</div>
          <button onClick={() => handleAddToCart(product._id)}>
            Add To Cart
          </button>
        </div>
      ))}
    </>
  )
}
