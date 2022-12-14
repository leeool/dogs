import React from "react"
import styled from "styled-components"

const StyledError = styled.p`
  color: red;
  margin: 1rem 0;
  font-size: 1.6rem;
`

const Error = ({ erro }) => {
  if (!erro) return null
  return <StyledError>{erro}</StyledError>
}

export default Error
