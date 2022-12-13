export const API_URL = "https://dogsapi.origamid.dev/json/"

export const TOKEN_POST = (data) => {
  return { url: API_URL + "jwt-auth/v1/token", data: data }
}

export const USER_GET = (token) => {
  console.log(token)
  return {
    url: API_URL + "api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }
  }
}
