export async function getTrack() {
  const trackResponse = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );
  const trackData = await trackResponse.json();

  if (!trackData) {
    throw new Error("Failed to fetch tracks");
  }

  return trackData;
}
