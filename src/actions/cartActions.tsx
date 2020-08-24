import { Dispatch } from "redux"
import Cookie from "js-cookie"
import data from "../data"
import { CART_ADD_ITEM } from ".././constants/cartConstants"

const addToCart = (id: string) => async (dispatch: Dispatch, getState: any) => { 
  const product = data.products.find((product) => product._id === id)

  if (!product) {
    console.log("add to cart fail")
    return
  }
 
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
    },
  })
  const {
    cart: { cartItems },
  } = getState() 
  Cookie.set("cartItems", JSON.stringify(cartItems))
}

export { addToCart }
