
export default async function getPlaylist() {

  const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/')

  if(!response.ok) {
    throw new Error('ошибка сервера')
  }

  const data = await response.json()
  return data
}

export const getFavorites = async ({accessToken}) => {
    const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if(!response.ok) {
        throw new Error('ошибка сервера')
    }

    const data = await response.json()
    return data
}

export const addToFavorites = async ({accessToken, trackId}) => {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${trackId}/favorite/`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if(!response.ok) {
        throw new Error('ошибка сервера')
    }

    const data = await response.json()
    return data
}


export const refreshToken = async ({refreshToken}) => {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/user/token/refresh/`, {
        method: "POST",
        body: JSON.stringify({
            refresh:
            refreshToken,
          }),
          headers: {
            // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
            "content-type": "application/json",
          },
    });

    if(!response.ok) {
        throw new Error('ошибка сервера')
    }

    const data = await response.json()
    return data
}

export const delToFavorites = async ({accessToken, trackId}) => {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${trackId}/favorite/`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if(!response.ok) {
        throw new Error('ошибка сервера')
    }

    const data = await response.json()
    return data
}


export const getToken = async ({email, password}) => {
    const response = await fetch("https://skypro-music-api.skyeng.tech/user/token/", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            "content-type": "application/json",
        },
    })
        .then((response) => response.json());

    return response;
}


// для работы с избранным
// export const addToFavorites и тд по аналогии с getFavorites