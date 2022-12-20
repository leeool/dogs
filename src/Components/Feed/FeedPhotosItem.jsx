import React from "react"
import StyledFeedPhotoItem from "../../Styles/StyledFeed/StyledFeedPhotoItem"
import { ReactComponent as Visualizacao } from "../../Assets/visualizacao.svg"
import Image from "../Helpers/Image"

const FeedPhotosItem = ({ photo, setPhotoModal }) => {
  const handleClick = () => {
    setPhotoModal(photo)
  }

  return (
    <StyledFeedPhotoItem onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span>
        <Visualizacao />
        {photo.acessos}
      </span>
      {/* <img src={photo.src} alt={photo.title} /> */}
    </StyledFeedPhotoItem>
  )
}

export default FeedPhotosItem
