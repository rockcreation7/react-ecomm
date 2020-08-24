import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./reducers/cartReducers"
import Cookie from "js-cookie"

const reducer = combineReducers({
  cart: cartReducer,
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const cartItems = Cookie.getJSON("cartItems") 
console.log(cartItems)
 
const store = createStore(
  reducer, 
  composeEnhancer(applyMiddleware(thunk))
)
export default store
