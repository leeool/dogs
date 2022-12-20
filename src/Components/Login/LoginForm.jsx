import React from "react"
import { Link } from "react-router-dom"
import Input from "../Form/Input"
import { StyledLoginForm } from "../../Styles/StyledLogin/StyledLoginForm"
import Button from "../Form/Button"
import UseForm from "../../Hooks/UseForm"
import UsePasswordToggle from "../../Hooks/UsePasswordToggle"
import { UserContext } from "../../UserContext"
import { motion } from "framer-motion"
import Error from "../Helpers/Error"
import Head from "../Helpers/Head"

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring" }
}

const LoginForm = () => {
  const username = UseForm("")
  const password = UseForm("")
  const passwordToggle = UsePasswordToggle()
  const { userLogin, error, loading } = React.useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (username.validate() && password.validate()) {
      await userLogin(username.value, password.value)
    }
  }

  return (
    <StyledLoginForm>
      <motion.div
        className="login-content"
        variants={animateLeft}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring" }}
      >
        <Head title="Faça login" />
        <div className="login">
          <h1 className="main-title">Login</h1>
          <form onSubmit={handleSubmit}>
            <Input
              id={"user"}
              label={"Usuário"}
              inputType={"text"}
              {...username}
            />
            <Input
              id={"password"}
              label={"Senha"}
              {...password}
              {...passwordToggle}
            />
            {loading ? (
              <Button content={"Carregando..."} disabled />
            ) : (
              <Button content={"Entrar"} />
            )}
            <Error erro={error} />
          </form>
        </div>
        <Link className="perdeu" to={"/login/perdeu"}>
          Perdeu a senha?
        </Link>
        <div className="criar">
          <h2>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link to={"/login/criar"}>
            <Button type={"button"} content={"Cadastro"} />
          </Link>
        </div>
      </motion.div>
    </StyledLoginForm>
  )
}

export default LoginForm
