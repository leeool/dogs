import React from "react"
import StyledPhotoCommentsForm from "../../Styles/StyledPhoto/StyledPhotoCommentsForm"
import { ReactComponent as Enviar } from "../../Assets/enviar.svg"
import UseFetch from "../../Hooks/UseFetch"
import { COMMENT_POST } from "../../api"
import Error from "../Helpers/Error"

const PhotoCommentForm = ({ id, setPostComments }) => {
  const [comment, setComment] = React.useState("")
  const { request, error } = UseFetch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    const { url, options } = COMMENT_POST(id, token, comment)
    const { response, json } = await request(url, options)

    if (response.ok) {
      setPostComments((comentario) => [...comentario, json])
    }
    setComment("")
  }

  return (
    <StyledPhotoCommentsForm onSubmit={handleSubmit}>
      <textarea
        placeholder={error || "Comente..."}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </StyledPhotoCommentsForm>
  )
}

export default PhotoCommentForm
