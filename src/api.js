// export default async function getPlaylist() {
//   const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/')
//     if(!response.ok) {
//     throw new Error('ошибка сервера')
//   }
// const data = await response.json()
//   return data
// }

export default async function getPlaylist() {

  // try {
  const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/')
  
  if(!response.ok) {
    throw new Error('ошибка сервера')
  }
  
  const data = await response.json()
  return data

// } catch (error) {
//   // alert("Ошибка сервера вот же")
//   // setAddTodoError("Не удалось загрузить плейлист, попробуйте позже");
//   console.log("ошибка");

// }

}
