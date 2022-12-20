import React from "react"
import StyeldLoginCriar from "../../Styles/StyledLogin/StyledLoginCriar"
import Input from "../Form/Input"
import { motion } from "framer-motion"
import Button from "../Form/Button"
import UseForm from "../../Hooks/UseForm"
import { UserContext } from "../../UserContext"
import Error from "../Helpers/Error"
import { Link } from "react-router-dom"
import UseFetch from "../../Hooks/UseFetch"
import { USER_POST } from "../../api"
import Head from "../Helpers/Head"

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring" }
}

const LoginCriar = () => {
  const { userLogin } = React.useContext(UserContext)

  const username = UseForm("")
  const email = UseForm("email")
  const password = UseForm("password")
  const { loading, error, request } = UseFetch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (username.validate() && email.validate() && password.validate()) {
      const { url, options } = USER_POST(
        username.value,
        email.value,
        password.value
      )

      const { response } = await request(url, options)
      if (response.ok) userLogin(username.value, password.value)
    }
  }

  return (
    <StyeldLoginCriar
      as={motion.div}
      variants={animateLeft}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring" }}
    >
      <Head title="Crie uma conta" />
      <Link to={"/login"}>
        <Button className="btn-voltar" content={"Voltar"} />
      </Link>
      <form onSubmit={handleSubmit}>
        <h1 className="main-title">Cadastre-se</h1>
        <Input label={"Usuário"} id={"user"} inputType={"text"} {...username} />
        <Input label={"Email"} id={"user"} inputType={"email"} {...email} />
        <Input
          label={"Senha"}
          id={"user"}
          inputType={"password"}
          {...password}
        />
        {loading ? (
          <Button content={"Cadastrando..."} disabled />
        ) : (
          <Button content={"Cadastrar"} />
        )}
        <Error erro={error} />
      </form>
    </StyeldLoginCriar>
  )
}

export default LoginCriar
