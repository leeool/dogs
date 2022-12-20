import React from "react"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import StyledGlobal from "./Styles/StyledGlobal"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Login from "./Components/Login/Login"
import UseStorage from "./UserContext"
import { User } from "./Components/User/User"
import ProtectedRouter from "./Components/Helpers/ProtectedRouter"
import Photo from "./Components/Photo/Photo"
import UserProfile from "./Components/User/UserProfile"
import NotFound from "./Components/NotFound"
import StyledApp from "./Styles/StyledApp"

const App = () => {
  return (
    <StyledApp>
      <BrowserRouter>
        <StyledGlobal />
        <UseStorage>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRouter>
                    <User />
                  </ProtectedRouter>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UseStorage>
      </BrowserRouter>
    </StyledApp>
  )
}

export default App
