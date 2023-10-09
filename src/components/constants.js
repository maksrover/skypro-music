import { useEffect, useState } from "react";
import { getCategory } from "../api";

export const usePlaylistTracks = () => {
  const [tracksData, setTracksData] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const trackList = await getCategory();
        setTracksData(trackList);
      } catch (error) {
        setError('Не удалось загрузить плейлист, попробуйте позже');
      }
    };
    
    fetchData();
  }, []);

  console.log(tracksData);
  
  const PLAYLISTTRACK = [
    {
      id: 1,
      name: 'Плейлист дня',
      tracks: tracksData.length > 0 ? tracksData[0].items : [],
      img: 'img/playlist01.png',
    },
    {
      id: 2,
      name: '100 танцевальных хитов',
      tracks: tracksData.length > 1 ? tracksData[1].items : [],
      img: 'img/playlist02.png',
    },
    {
      id: 3,
      name: 'Инди-заряд',
      tracks: tracksData.length > 2 ? tracksData[2].items : [],
      img: 'img/playlist03.png',
    },
  ];

  return { tracksData, error, PLAYLISTTRACK };
};
