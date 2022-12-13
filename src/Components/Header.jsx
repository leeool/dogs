import React from "react"
import { Link } from "react-router-dom"
import { StyledHeader } from "../Styles/StyledHeader"
import theme from "./Theme"
import { ReactComponent as Dogs } from "../Assets/dogs.svg"
import { UserContext } from "../UserContext"

const Header = () => {
  const global = React.useContext(UserContext)
  console.log(global)

  return (
    <StyledHeader theme={theme}>
      <nav>
        <Link className="logo" to={"/"} aria-label="Dogs - Home">
          {<Dogs />}
        </Link>
        <Link className="login" to={"/login"}>
          Login/Criar
        </Link>
      </nav>
    </StyledHeader>
  )
}

export default Header
