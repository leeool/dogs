import React from "react"
import { Link } from "react-router-dom"
import { StyledHeader } from "../Styles/StyledHeader"
import theme from "./Theme"
import { ReactComponent as Dogs } from "../Assets/dogs.svg"
import { UserContext } from "../UserContext"

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext)
  // console.log(data)

  return (
    <StyledHeader theme={theme}>
      <nav>
        <Link className="logo" to={"/"} aria-label="Dogs - Home">
          {<Dogs />}
        </Link>
        {data ? (
          <Link className="login" to={"/conta"}>
            {data.nome}
            <button onClick={userLogout}>sair</button>
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
