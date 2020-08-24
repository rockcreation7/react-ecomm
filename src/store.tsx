import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./reducers/cartReducers"

const initialState = {
  cart: { cartItems: {} }
}
const reducer = combineReducers({
  cart: cartReducer,
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)
export default store

export type RootState = {
  cart: { cartItems: {} }
}
