import React from "react"

const UseFetch = () => {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)

  const request = React.useCallback(async (url, options) => {
    let response
    let json

    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
      if (!response.ok) throw new Error(json.message)
    } catch (err) {
      json = null
      setError(err.message)
    } finally {
      setData(json)
      setLoading(false)
      return { json, response }
    }
  }, [])

  return { data, loading, error, request }
}

export default UseFetch
