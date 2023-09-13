// export async function getPlaylist() {
//   const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/')


//   if
//   const data = await response.json()
//   return data
// }


// // https://painassasin.online/catalog/track/all/

import {  useEffect } from 'react';

const DataFetcher = ({ setTracks, setAddTodoError, setShowSkeleton }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');

        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data = await response.json();
        setTracks(data); 
      } catch (error) {
        setAddTodoError("Не удалось загрузить плейлист, попробуйте позже");
      } finally {
        setShowSkeleton(false);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    });

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default DataFetcher;

