import React from "react"
import { Link } from "react-router-dom"
import StyledPhotoContent from "../../Styles/StyledPhoto/StyledPhotoContent"
import { ReactComponent as Visualizacao } from "../../Assets/visualizacao.svg"
import PhotoComments from "./PhotoComments"
import { motion } from "framer-motion"
import { UserContext } from "../../UserContext"
import PhotoDelete from "./PhotoDelete"
import Image from "../Helpers/Image"

const PhotoContent = ({ data }) => {
  const { data: user } = React.useContext(UserContext)
  const { photo, comments } = data

  return (
    <StyledPhotoContent
      as={motion.div}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring" }}
    >
      <div className="img">
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className="content">
        <div>
          <div className="post-info">
            {user.nome === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <span className="author">
                <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              </span>
            )}

            <span className="acessos">
              <Visualizacao />
              {photo.acessos}
            </span>
          </div>
          <Link to={`/foto/${photo.id}`}>
            <h1 className="main-title">{photo.title}</h1>
          </Link>
          <div className="dog-info">
            <p>{photo.peso} Kg</p>
            <p>
              {photo.idade} {photo.idade === "1" ? "ano" : "anos"}
            </p>
          </div>
        </div>
        <PhotoComments comments={comments} id={photo.id} />
      </div>
    </StyledPhotoContent>
  )
}

export default PhotoContent
