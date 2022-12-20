import React from "react"

const UseWindowSize = (media) => {
  const getWindowSize = () => {
    const { matches } = window.matchMedia(media)
    return matches
  }
  const [match, setMatch] = React.useState(getWindowSize())

  React.useEffect(() => {
    const handleMatch = () => {
      setMatch(getWindowSize)
    }
    window.addEventListener("resize", handleMatch)
  }, [])

  return { match }
}

export default UseWindowSize
