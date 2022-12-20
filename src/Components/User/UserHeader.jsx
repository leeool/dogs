import React from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import StyledUserHeader from "../../Styles/StyledUser/StyledUserHeader"
import UserHeaderNav from "./UserHeaderNav"

const UserHeader = () => {
  const [title, setTitle] = React.useState("")
  const { pathname } = useLocation()

  React.useEffect(() => {
    switch (pathname) {
      case "/conta/estatisticas":
        setTitle("Estatísticas")
        break
      case "/conta/postar":
        setTitle("Poste uma foto")
        break
      default:
        setTitle("Minha conta")
    }
  }, [pathname])

  return (
    <StyledUserHeader className="container">
      <h1 className="main-title">{title}</h1>
      <UserHeaderNav />
    </StyledUserHeader>
  )
}

export default UserHeader
