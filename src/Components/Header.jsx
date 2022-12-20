import React from "react"
import { Link } from "react-router-dom"
import { StyledHeader } from "../Styles/StyledHeader"
import theme from "./Theme"
import { ReactComponent as Dogs } from "../Assets/dogs.svg"
import { UserContext } from "../UserContext"
import { ReactComponent as Perfil } from "../Assets/usuario.svg"

const Header = () => {
  const { data } = React.useContext(UserContext)

  return (
    <StyledHeader theme={theme}>
      <nav>
        <Link className="logo" to={"/"} aria-label="Dogs - Home">
          {<Dogs />}
        </Link>
        {data ? (
          <Link className="login" to={"/conta"}>
            {data.nome}
            <Perfil />
          </Link>
        ) : (
          <Link className="login" to={"/login"}>
            Login/Criar
          </Link>
        )}
      </nav>
    </StyledHeader>
  )
}

export default Header
