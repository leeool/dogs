import React from "react"

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Insira um email válido"
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: "A senha deve conter ao menos 8 caracteres e 1 número"
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize apenas números"
  }
}

const UseForm = (type) => {
  const [value, setValue] = React.useState("")
  const [error, setError] = React.useState(null)

  const validate = (value) => {
    if (type === false) return true
    if (value.length === 0) {
      setError("Preencha este campo")
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  const onChange = ({ target }) => {
    setValue(target.value)
    if (error) validate(target.value)
  }

  return {
    value,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value)
  }
}

export default UseForm
