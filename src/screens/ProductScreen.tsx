import React from "react"
import { Link } from "react-router-dom"
import data from "../data"

type Props = {
  match: {
    params: {
      id: string
    }
  }
}

export const ProductScreen: React.FC<Props> = props => {
  const product = data.products.find(
    (product) => product._id === props.match.params.id
  )
  if (!product) {
    return (<div>Product Not Exist</div>)
  }
  return (<>
      <Link to="/"> Home </Link>
      <>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.rating}</div>
        <div>{product.category}</div>
        <div>{/* product._id */} Add to Cart</div>
      </> 
   </>)
 
}
