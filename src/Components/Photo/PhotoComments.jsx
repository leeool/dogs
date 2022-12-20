import React from "react"
import StyledPhotoComments from "../../Styles/StyledPhoto/StyledPhotoComments"
import { UserContext } from "../../UserContext"
import PhotoCommentForm from "./PhotoCommentForm"

const PhotoComments = ({ id, comments }) => {
  const [postComments, setPostComments] = React.useState(() => comments)
  const { login } = React.useContext(UserContext)
  const comentsSection = React.useRef(null)

  React.useEffect(() => {
    comentsSection.current.scrollTop = comentsSection.current.scrollHeight
  }, [postComments])

  return (
    <StyledPhotoComments>
      <ul ref={comentsSection}>
        {postComments.map((comment) => (
          <li key={comment.comment_ID}>
            <span style={{ fontWeight: "bold" }}>
              {comment.comment_author}:{" "}
            </span>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentForm id={id} setPostComments={setPostComments} />}
    </StyledPhotoComments>
  )
}

export default PhotoComments
