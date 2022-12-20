import React from "react"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import UserHeader from "./UserHeader"
import Feed from "../Feed/Feed"
import UserPhotoPost from "./UserPhotoPost"
import UserStats from "./UserStats"
import { UserContext } from "../../UserContext"
import NotFound from "../NotFound"
import Head from "../Helpers/Head"

export const User = () => {
  const { data } = React.useContext(UserContext)

  return (
    <section>
      <Head title={data.nome} />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}
