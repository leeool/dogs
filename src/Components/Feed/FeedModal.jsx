import React from "react"
import { PHOTO_GET } from "../../api"
import UseFetch from "../../Hooks/UseFetch"
import StyledFeedModal from "../../Styles/StyledFeed/StyledFeedModal"
import Error from "../Helpers/Error"
import Loading from "../Helpers/Loading"
import PhotoContent from "../Photo/PhotoContent"

const FeedModal = ({ photo, setPhotoModal }) => {
  const { data, error, request, loading } = UseFetch()

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)

    request(url, options)
  }, [photo])

  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      setPhotoModal(null)
    }
  }

  if (error) return <Error erro={error} />
  if (loading) return <Loading />
  if (!data) return null
  return (
    <StyledFeedModal onClick={handleClick}>
      <PhotoContent data={data} />
    </StyledFeedModal>
  )
}

export default FeedModal
