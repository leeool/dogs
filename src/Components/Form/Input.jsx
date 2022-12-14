import React from "react"
import { StyledInput } from "../../Styles/StyledForm/StyledInput"
import Error from "../Helpers/Error"

const Input = ({
  id,
  value,
  label,
  onChange,
  error,
  onBlur,
  inputType,
  icon
}) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <div className="wrap">
        <input
          type={inputType}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <button type="button">{icon}</button>
      </div>
      <Error erro={error} />
    </StyledInput>
  )
}

// Input.defaultProps = {
//   type: "text"
// }

export default Input
