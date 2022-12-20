import React from "react"
import { STATS_GET } from "../../api"
import UseFetch from "../../Hooks/UseFetch"
import Error from "../Helpers/Error"
import Head from "../Helpers/Head"
import Loading from "../Helpers/Loading"
const UserStatsGraph = React.lazy(() => import("./UserStatsGraph"))
import { motion } from "framer-motion"

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring" }
}

const UserStats = () => {
  const { loading, error, data, request } = UseFetch()

  React.useEffect(() => {
    const getStats = async () => {
      const token = localStorage.getItem("token")

      const { url, options } = STATS_GET(token)
      await request(url, options)
    }
    getStats()
  }, [request])

  if (error) return <Error erro={error} />
  if (loading) return <Loading />
  if (!data) return null
  return (
    <React.Suspense fallback={<div></div>}>
      <motion.section
        className="container"
        variants={animateLeft}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring" }}
      >
        <Head title="Estatísticas" />
        <UserStatsGraph data={data} />
      </motion.section>
    </React.Suspense>
  )
}

export default UserStats
