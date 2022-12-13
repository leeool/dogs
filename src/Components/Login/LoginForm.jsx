import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import loginImage from "../../Assets/login.jpg"
import Input from "../Form/Input"
import { StyledLoginForm } from "../../Styles/StyledLogin/StyledLoginForm"
import Button from "../Form/Button"
import UseForm from "../../Hooks/UseForm"
import UsePasswordToggle from "../../Hooks/UsePasswordToggle"
import { TOKEN_POST, USER_GET } from "../../../api"

const LoginForm = () => {
  const username = UseForm("")
  const password = UseForm("")
  const passwordToggle = UsePasswordToggle()
  const [loadButton, setLoadButton] = React.useState(false)

  React.useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) getUser(token)
  }, [])

  const getUser = async () => {
    const token = localStorage.getItem("token")

    const { url, options } = USER_GET(token)

    const response = await axios.get(url, options)
    console.log(response.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (username.validate() && password.validate()) {
      const { url, data } = TOKEN_POST({
        username: username.value,
        password: password.value
      })

      const request = await axios.post(url, data)
      localStorage.setItem("token", request.data.token)
      getUser()
    }
  }

  return (
    <StyledLoginForm>
      <div>
        <img src={loginImage} alt="cachorro de touca amarela" />
      </div>
      <div className="login-content">
        <div className="login">
          <h1>Login</h1>
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
            <Button content={"Entrar"} />
          </form>
        </div>
        <Link className="perdeu" to={"perdeu"}>
          Perdeu a senha?
        </Link>
        <div className="criar">
          <h2>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link to={"criar"}>
            <Button type={"button"} content={"Cadastro"} />
          </Link>
        </div>
      </div>
    </StyledLoginForm>
  )
}

export default LoginForm
