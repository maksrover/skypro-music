const assessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwOTcxMjcxLCJpYXQiOjE2OTA5NjAxMzEsImp0aSI6ImE4YzQ5NDNmOWNmNTRlZjI5NmFmNTMyOWUwODM4YWQ5IiwidXNlcl9pZCI6NzkyfQ.5n8YHTjsgAnYnc4gioyV1wPnxM2D16PS6c9kNhC-JoE";
const allTrack = "https://skypro-music-api.skyeng.tech/catalog/track/all/";

export const getTrack = async () => {
  const response = await fetch(allTrack, {
    method: "GET",
    headers: {
      Authorization: `Bearer${assessToken}`,
    },
  });
  if (!response) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
};
