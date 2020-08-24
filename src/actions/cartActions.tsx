import { Dispatch } from "redux"
import Cookie from "js-cookie"
import data from "../data"
import { RootState } from "../store"
import { CART_ADD_ITEM } from ".././constants/cartConstants"

const addToCart = (id: string) => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  //get product from data
  const product = data.products.find((product) => product._id === id)

  if(!product){
      console.log('add to cart fail')
      return
  }
  //get product from cart
/*   const {
    cart: { cartItems },
  } = getState()
 */
  console.log({ cart: id, product })

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: product._id,
      name: product.name,
      image: product.image,
      price: product.price
    },
  })

/*   Cookie.set("cartItems", JSON.stringify(cartItems)) */
}

export { addToCart }

