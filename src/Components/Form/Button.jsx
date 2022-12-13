import React from "react"
import { StyledButton } from "../../Styles/StyledForm/StyledButton"

const Button = ({ onClick, content, ...props }) => {
  return (
    <>
      <StyledButton onClick={onClick} {...props}>
        {content}
      </StyledButton>
    </>
  )
}

export default Button
