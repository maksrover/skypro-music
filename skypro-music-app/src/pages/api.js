export async function getTrack() {
  const trackResponse = (
    await fetch(` 	https://skypro-music-api.skyeng.tech/catalog/track/all/`)
  ).json();

  if (!trackResponse) {
    throw new Error("Ошибка сервера");
  }

  return trackResponse;
}
