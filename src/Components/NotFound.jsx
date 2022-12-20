import React from "react"
import StyledNotFound from "../Styles/StyledNotFound"

const NotFound = () => {
  return (
    <StyledNotFound className="margin-top container">
      <h1 className="main-title">Erro: 404</h1>
      <p>Página não encontrada.</p>
    </StyledNotFound>
  )
}

export default NotFound
