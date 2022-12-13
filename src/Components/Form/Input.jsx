import React from "react"
import { StyledLogin } from "../../Styles/StyledForm/StyledInput"

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
    <StyledLogin>
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
      {error && <p>{error}</p>}
    </StyledLogin>
  )
}

// Input.defaultProps = {
//   type: "text"
// }

export default Input
