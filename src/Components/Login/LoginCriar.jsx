import React from "react"
import StyeldLoginCriar from "../../Styles/StyledLogin/StyledLoginCriar"
import Input from "../Form/Input"
import { motion } from "framer-motion"
import Button from "../Form/Button"
import UseForm from "../../Hooks/UseForm"

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring" }
}

const LoginCriar = () => {
  const password = UseForm("password")
  const email = UseForm("email")

  return (
    <StyeldLoginCriar
      as={motion.div}
      variants={animateLeft}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring" }}
    >
      <form>
        <h1 className="main-title">Cadastre-se</h1>
        <Input label={"Usuário"} id={"user"} inputType={"text"} />
        <Input label={"Email"} id={"user"} inputType={"text"} {...email} />
        <Input
          label={"Senha"}
          id={"user"}
          inputType={"password"}
          {...password}
        />
        <Button content={"Cadastrar"} />
      </form>
    </StyeldLoginCriar>
  )
}

export default LoginCriar
