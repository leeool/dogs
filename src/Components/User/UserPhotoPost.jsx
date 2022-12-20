import React from "react"
import { PHOTO_POST } from "../../api"
import UseFetch from "../../Hooks/UseFetch"
import UseForm from "../../Hooks/UseForm"
import StyledUserPhotoPost from "../../Styles/StyledUser/StyledUserPhotoPost"
import Button from "../Form/Button"
import Input from "../Form/Input"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Error from "../Helpers/Error"
import Head from "../Helpers/Head"

const UserPhotoPost = () => {
  const nome = UseForm()
  const peso = UseForm("number")
  const idade = UseForm("number")
  const [img, setImg] = React.useState()
  const { request, data, error, loading } = UseFetch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")

    const formData = new FormData()
    formData.append("img", img.raw)
    formData.append("nome", nome.value)
    formData.append("peso", peso.value)
    formData.append("idade", idade.value)

    const { url, options } = PHOTO_POST(token, formData)
    const { response } = await request(url, options)

    if (response.ok) {
      navigate("/conta")
    }
  }

  const handleImgChange = ({ target }) => {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0])
    })
  }

  return (
    <StyledUserPhotoPost
      className="container"
      as={motion.section}
      initial={{ opacity: 0, x: "-3rem" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring" }}
    >
      <Head title="Poste uma foto" />
      <form onSubmit={handleSubmit}>
        <Input inputType={"text"} label="Nome" id="nome" {...nome} />
        <Input inputType={"number"} label="Peso" id="peso" {...peso} />
        <Input inputType={"number"} label="Idade" id="idade" {...idade} />
        <Input
          inputType={"file"}
          label="Imagem"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button content={"Enviando..."} disabled />
        ) : (
          <Button content={"Enviar"} />
        )}

        <Error erro={error} />
      </form>
      {img && <img className="preview" src={img.preview} />}
    </StyledUserPhotoPost>
  )
}

export default UserPhotoPost
