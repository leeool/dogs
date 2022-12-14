import React from "react"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import StyledGlobal from "./Styles/StyledGlobal"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Container from "./Styles/StyledContainer"
import Login from "./Components/Login/Login"

import Theme from "./Components/Theme"
import NoMatch from "./Components/NoMatch"
import UseStorage from "./UserContext"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <StyledGlobal />
        <UseStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer />
        </UseStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
