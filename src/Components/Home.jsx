import React from "react"
import Feed from "./Feed/Feed"
import Head from "./Helpers/Head"

const Home = () => {
  return (
    <section style={{ marginTop: "8.4rem" }}>
      <Head title="Fotos" description="Home do site Dogs, com feed de fotos." />
      <Feed />
    </section>
  )
}

export default Home
