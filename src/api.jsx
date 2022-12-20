export const API_URL = "https://dogsapi.origamid.dev/json/"

export const TOKEN_POST = (username, password) => {
  return {
    url: API_URL + "jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }
  }
}

export const USER_GET = (token) => {
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

export const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: API_URL + "jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token
      }
    }
  }
}

export const USER_POST = (username, email, password) => {
  return {
    url: API_URL + "api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
        email
      })
    }
  }
}

export const PHOTO_POST = (token, formData) => {
  return {
    url: API_URL + "api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token
      },
      body: formData
    }
  }
}

export const PHOTOS_GET = ({ total, page, user }) => {
  return {
    url: API_URL + `api/photo/?_total=${total}&_page=${page}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store"
    }
  }
}

export const PHOTO_GET = (id) => {
  return {
    url: API_URL + `api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store"
    }
  }
}

export const COMMENT_POST = (id, token, body) => {
  return {
    url: API_URL + `api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({ comment: body })
    }
  }
}

export const PHOTO_DELETE = (id, token) => {
  return {
    url: API_URL + `api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token
      }
    }
  }
}

export const PASSWORD_LOST = (body) => {
  return {
    url: API_URL + `api/password/lost`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
  }
}

export const PASSWORD_RESET = (body) => {
  return {
    url: API_URL + `api/password/reset`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
  }
}

export const STATS_GET = (token) => {
  return {
    url: API_URL + "api/stats",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    }
  }
}
