import React from "react"
import { PHOTOS_GET } from "../../api"
import UseFetch from "../../Hooks/UseFetch"
import StyledFeedPhotos from "../../Styles/StyledFeed/StyledFeedPhotos"
import Error from "../Helpers/Error"
import Loading from "../Helpers/Loading"
import FeedPhotosItem from "./FeedPhotosItem"
import { motion } from "framer-motion"

const FeedPhotos = ({ setPhotoModal, user, page, setInfinity }) => {
  const { request, data, loading, error } = UseFetch()

  React.useEffect(() => {
    const fecthPhotos = async () => {
      const { url, options } = PHOTOS_GET({ total: 6, page, user })
      const { response, json } = await request(url, options)

      if (response && response.ok && json.length < 6) {
        setInfinity(false)
      }
    }
    fecthPhotos()
  }, [request, user, page, setInfinity])

  if (error) return <Error erro={error} />
  if (loading) return <Loading />
  if (!data) return null
  return (
    <StyledFeedPhotos
      className="container"
      as={motion.div}
      initial={{ x: "-3rem", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring" }}
    >
      <ul>
        {data.map((post) => (
          <FeedPhotosItem
            key={post.id}
            photo={post}
            setPhotoModal={setPhotoModal}
          />
        ))}
      </ul>
    </StyledFeedPhotos>
  )
}

export default FeedPhotos
