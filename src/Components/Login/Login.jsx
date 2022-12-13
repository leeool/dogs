import React from "react"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import LoginForm from "./LoginForm"
import LoginPerdeu from "./LoginPerdeu"
import LoginCriar from "./LoginCriar"

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCriar />} />
        <Route path="perdeu" element={<LoginPerdeu />} />
      </Routes>
    </div>
  )
}

export default Login
