import React from "react"
import { PASSWORD_LOST } from "../../api"
import UseFetch from "../../Hooks/UseFetch"
import UseForm from "../../Hooks/UseForm"
import Button from "../Form/Button"
import Input from "../Form/Input"
import Error from "../Helpers/Error"
import Head from "../Helpers/Head"
import { motion } from "framer-motion"

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring" }
}

const LoginPerdeu = () => {
  const login = UseForm("")
  const { loading, request, error, data } = UseFetch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar")
      })

      request(url, options)
    }
  }

  return (
    <motion.section
      onSubmit={handleSubmit}
      variants={animateLeft}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring" }}
    >
      <Head title="Perdeu a senha" />
      <h1 className="main-title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "green", fontSize: "1.6rem" }}>{data}</p>
      ) : (
        <form>
          <Input
            label={"Email / Usuário"}
            {...login}
            inputType="text"
            id={"email"}
          />
          {loading ? (
            <Button content={"Enviando..."} disabled />
          ) : (
            <Button content={"Enviar Email"} />
          )}
        </form>
      )}

      <Error erro={error} />
    </motion.section>
  )
}

export default LoginPerdeu
