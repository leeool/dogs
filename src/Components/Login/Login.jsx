import React from "react"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import LoginForm from "./LoginForm"
import LoginPerdeu from "./LoginPerdeu"
import LoginCriar from "./LoginCriar"
import { UserContext } from "../../UserContext"
import { Navigate } from "react-router-dom"
import loginImage from "../../Assets/login.jpg"
import { StyledLogin } from "../../Styles/StyledLogin/StyledLogin"

const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login) return <Navigate to={"/conta"} />
  return (
    <StyledLogin>
      <div>
        <img src={loginImage} alt="cachorro de touca amarela" />
      </div>
      <div className="form-container">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCriar />} />
          <Route path="/perdeu" element={<LoginPerdeu />} />
        </Routes>
      </div>
    </StyledLogin>
  )
}

export default Login
