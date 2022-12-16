import React from "react"
import StyeldLoginCriar from "../../Styles/StyledLogin/StyledLoginCriar"
import Input from "../Form/Input"
import { motion } from "framer-motion"
import Button from "../Form/Button"
import UseForm from "../../Hooks/UseForm"
import { UserContext } from "../../UserContext"
import Error from "../Helpers/Error"

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring" }
}

const LoginCriar = () => {
  const { userPost, error, loading } = React.useContext(UserContext)

  const username = UseForm("")
  const email = UseForm("email")
  const password = UseForm("password")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (username.validate() && email.validate() && password.validate()) {
      await userPost(username.value, email.value, password.value)
      console.log("conta criada")
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
          <Button content={"Cadastrar"} disabled />
        ) : (
          <Button content={"Cadastrar"} />
        )}
        <Error erro={error} />
      </form>
    </StyeldLoginCriar>
  )
}

export default LoginCriar
