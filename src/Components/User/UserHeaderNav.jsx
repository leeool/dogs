import React from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../../UserContext"
import StyledUserHeaderNav from "../../Styles/StyledUser/StyledUserHeaderNav"
import { ReactComponent as Adicionar } from "../../Assets/adicionar.svg"
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg"
import { ReactComponent as Feed } from "../../Assets/feed.svg"
import { ReactComponent as Sair } from "../../Assets/sair.svg"
import UseWindowSize from "../../Hooks/UseWindowSize"
import { useLocation } from "react-router-dom"

const UserHeaderNav = () => {
  const { match } = UseWindowSize("(max-width: 40rem)")
  const { userLogout } = React.useContext(UserContext)
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const location = useLocation()

  const handleClick = () => {
    setMobileMenu(!mobileMenu)
  }

  React.useEffect(() => {
    setMobileMenu(false)
  }, [location])

  return (
    <>
      <StyledUserHeaderNav>
        {match && (
          <button
            onClick={handleClick}
            className={
              mobileMenu ? "mobile-button mobile-active" : "mobile-button"
            }
          ></button>
        )}
        <nav className={match ? "nav-mobile" : "nav"}>
          <NavLink to={"/conta"} end>
            <Feed />
            {match && "Feed"}
          </NavLink>
          <NavLink to={"/conta/estatisticas"}>
            <Estatisticas />
            {match && "Estatisticas"}
          </NavLink>
          <NavLink to={"/conta/postar"}>
            <Adicionar />
            {match && "Adicionar"}
          </NavLink>
          <button onClick={() => userLogout()} className="sair">
            <Sair />
            {match && "Sair"}
          </button>
        </nav>
      </StyledUserHeaderNav>
    </>
  )
}

export default UserHeaderNav
