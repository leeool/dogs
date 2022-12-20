import React from "react"
import { PHOTO_DELETE } from "../../api"
import UseFetch from "../../Hooks/UseFetch"

const PhotoDelete = ({ id }) => {
  const { request, loading } = UseFetch()

  const handleDelete = async () => {
    const token = localStorage.getItem("token")
    const confirmar = window.confirm(
      "Tem certeza de que deseja excluir esta foto?"
    )

    if (confirmar) {
      const { url, options } = PHOTO_DELETE(id, token)
      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }

  return (
    <button className="delete" onClick={handleDelete}>
      Deletar
    </button>
  )
}

export default PhotoDelete
