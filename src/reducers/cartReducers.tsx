import { CART_ADD_ITEM } from "../constants/cartConstants"
import Cookie from "js-cookie"

interface cartAction {
  type: string
  payload: {}
}

const cartItems = Cookie.getJSON("cartItems") || []

function cartReducer(
  state = { cartItems: cartItems, loading: true },
  action: cartAction
) {
  switch (action.type) {
    case CART_ADD_ITEM: 
      if (state.cartItems) {
        return { ...state, cartItems: [...state.cartItems, action.payload] }
      }
      return { ...state, cartItems: [action.payload] }
    default:
      return state
  }
   
}

export { cartReducer }
