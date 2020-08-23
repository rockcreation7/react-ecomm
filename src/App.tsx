import React from "react"
import "./App.css"
import data from "./data"
import { BrowserRouter, Route, Link } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
      </BrowserRouter>
      <div className="App">
         
      </div>
    </>
  )
}

export default App
