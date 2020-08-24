import { CART_ADD_ITEM } from "../constants/cartConstants"

interface cartAction {
  type: string
  payload: {}
}

function cartReducer(state = { cartItems: [] }, action: cartAction) {
  switch (action.type) {
    case CART_ADD_ITEM:
      if (state.cartItems) {
        return { cartItems: [...state.cartItems, action.payload] }
      }
      return { cartItems: [action.payload] }
    default:
      return state
  }
}

export { cartReducer }
