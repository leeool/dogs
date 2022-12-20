import React from "react"
import StyledFeed from "../../Styles/StyledFeed/StyledFeed"
import FeedModal from "./FeedModal"
import FeedPhotos from "./FeedPhotos"

const Feed = ({ user }) => {
  const [photoModal, setPhotoModal] = React.useState(null)
  const [pages, setPages] = React.useState([1])
  const [infinite, setInfinite] = React.useState(true)

  React.useEffect(() => {
    let wait = false

    function infinityScroll() {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true

          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }

    window.addEventListener("wheel", infinityScroll)
    window.addEventListener("scroll", infinityScroll)

    return () => {
      window.removeEventListener("wheel", infinityScroll)
      window.removeEventListener("scroll", infinityScroll)
    }
  }, [infinite])

  return (
    <StyledFeed>
      {photoModal && (
        <FeedModal photo={photoModal} setPhotoModal={setPhotoModal} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          user={user}
          key={page}
          page={page}
          setPhotoModal={setPhotoModal}
          setInfinity={setInfinite}
        />
      ))}
    </StyledFeed>
  )
}

export default Feed
