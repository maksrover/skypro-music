// import {  useState } from 'react'
// import { getCategory } from '../api';

import { useEffect, useState } from "react";
import { getCategory } from "../api";


// const [tracksData, setTracksData] = useState([]);
// const [error, setError] = useState(null)
// console.log(error);
// useEffect(() => {
// getCategory()
//   .then((trackList) => {
//     setTracksData(trackList);
//   })
//   .catch(() => {
//     setError('Не удалось загрузить плейлист, попробуйте позже');
//   });
// }, [])

// export const PLAYLISTTRACK = [
//   {
//     id: 1,
//     name: 'Плейлист дня',
//     // tracks: tracksData[0],
//     img: 'img/playlist01.png',
//   },
//   {
//     id: 2,
//     name: '100 танцевальных хитов',
//     // tracks: tracksData[1],
//     img: 'img/playlist02.png',
//   },
//   {
//     id: 3,
//     name: 'Инди-заряд',
//     // tracks: tracksData[2],
//     img: 'img/playlist03.png',
//   },
// ];

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
      tracks: tracksData.length > 0 ? tracksData[0].item : [],
      img: 'img/playlist01.png',
    },
    {
      id: 2,
      name: '100 танцевальных хитов',
      tracks: tracksData.length > 1 ? tracksData[1].item : [],
      img: 'img/playlist02.png',
    },
    {
      id: 3,
      name: 'Инди-заряд',
      tracks: tracksData.length > 2 ? tracksData[2].item : [],
      img: 'img/playlist03.png',
    },
  ];

  return { tracksData, error, PLAYLISTTRACK };
};
