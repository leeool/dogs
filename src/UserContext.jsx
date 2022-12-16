import React from "react"
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET, USER_POST } from "./api"
import axios from "axios"
import { useNavigate, redirect } from "react-router-dom"

export const UserContext = React.createContext()

export const UseStorage = ({ children }) => {
  const [data, setData] = React.useState("")
  const [login, setLogin] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  let navigate = useNavigate()

  const userPost = async (username, email, password) => {
    const { url, options } = USER_POST(username, email, password)

    try {
      setLoading(true)
      setError(null)
      const response = await fetch(url, options)
      const json = await response.json()
      if (!response.ok) throw new Error(json.message)

      setLogin(true)
      userLogin(username, password)
      navigate("/conta")
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("token")

      if (token) {
        try {
          setError(null)
          setLoading(true)

          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)

          if (!response.ok) throw new Error("TOKEN INVÁLIDO")

          userGet(token)
        } catch (err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      }
    }

    autoLogin()
  }, [])

  const userGet = async (token) => {
    const { url, options } = USER_GET(token)

    const userRes = await axios.get(url, options)
    setData(userRes.data)
    setLogin(true)
  }

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST(username, password)

    try {
      setLoading(true)
      setError(null)

      const response = await fetch(url, options)
      if (!response.ok) throw new Error("Usuário Inválido")
      const json = await response.json()
      localStorage.setItem("token", json.token)
      await userGet(json.token)
      navigate("/conta")
    } catch (err) {
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  const userLogout = () => {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, login, loading, userPost }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UseStorage
