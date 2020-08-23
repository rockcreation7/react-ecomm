import React from "react"
import { Link } from "react-router-dom"
import data from "../data"
export const HomeScreen: React.FC = () => (
  <>
    {data.products.map((product) => (
      <>
        <Link to={"/product/" + product._id}>Go to Product detail</Link>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.rating}</div>
        <div>{product.category}</div>
        <div>{product._id}</div>
      </>
    ))}
  </>
)
