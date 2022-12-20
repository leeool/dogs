import React from "react"
import { useParams } from "react-router-dom"
import UseFetch from "../../Hooks/UseFetch"
import StyledPhoto from "../../Styles/StyledPhoto/StyledPhoto"
import { PHOTO_GET } from "../../api"
import Error from "../Helpers/Error"
import Loading from "../Helpers/Loading"
import PhotoContent from "./PhotoContent"
import Head from "../Helpers/Head"

const Photo = () => {
  const { id } = useParams()
  const { data, error, loading, request } = UseFetch()

  React.useEffect(() => {
    const { url } = PHOTO_GET(id)
    request(url)
  }, [id])

  if (error) return <Error erro={error} />
  if (loading) return <Loading />
  if (!data) return null
  return (
    <StyledPhoto className="container">
      <Head title={data.photo.title} />
      <PhotoContent data={data} />
    </StyledPhoto>
  )
}

export default Photo
