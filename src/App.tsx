import React from "react"
import "./App.css"
import { BrowserRouter, Route } from "react-router-dom"
import { ProductScreen } from "./screens/ProductScreen"
import { HomeScreen } from "./screens/HomeScreen"

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
      </BrowserRouter>
    </>
  )
}

export default App
