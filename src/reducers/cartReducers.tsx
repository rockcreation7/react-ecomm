import { CART_ADD_ITEM } from "../constants/cartConstants"

interface cartAction {
  type: string
  payload: {}
}

function cartReducer(
  state = { cartItems: [], shipping: {}, payment: {} },
  action: cartAction
) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { cartItiems: [...state.cartItems, action.payload] }
    default:
      return state
  }
}

export { cartReducer }
