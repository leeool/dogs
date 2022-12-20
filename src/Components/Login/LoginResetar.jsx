import React from "react"
import { useNavigate } from "react-router-dom"
import { PASSWORD_RESET } from "../../api"
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

const LoginResetar = () => {
  const senha = UseForm("password")
  const navigate = useNavigate()
  const { error, loading, request } = UseFetch()
  const [key, setKey] = React.useState("")
  const [login, setLogin] = React.useState("")

  React.useEffect(() => {
    const login = new URLSearchParams(window.location.search).get("login")
    const key = new URLSearchParams(window.location.search).get("key")

    if (login) setLogin(login)
    if (key) setKey(key)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (senha.validate()) {
      const { url, options } = PASSWORD_RESET({
        login: login,
        password: senha.value,
        key: key
      })
      const { response } = await request(url, options)

      if (response.ok) navigate("/login")
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
      <Head title="Resete a sua senha" />
      <h1 className="main-title">Resete sua senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Nova senha"}
          id="novasenha"
          inputType={"password"}
          {...senha}
        />
        {loading ? (
          <Button content={"Resetando..."} />
        ) : (
          <Button content={"Resetar"} />
        )}
      </form>
      <Error erro={error} />
    </motion.section>
  )
}

export default LoginResetar
