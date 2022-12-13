import React from "react"
import { ReactComponent as VisibilityTrue } from "../Assets/visibility_true.svg"
import { ReactComponent as VisibilityFalse } from "../Assets/visibility_off.svg"

const UsePasswordToggle = () => {
  const [visibility, setVisibility] = React.useState(false)

  const handleToggle = () => {
    setVisibility(!visibility)
  }

  const inputType = visibility ? "text" : "password"
  const icon = visibility ? (
    <VisibilityTrue onClick={handleToggle} />
  ) : (
    <VisibilityFalse onClick={handleToggle} />
  )

  return { inputType, icon }
}

export default UsePasswordToggle
