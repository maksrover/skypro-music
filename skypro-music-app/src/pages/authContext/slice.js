import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackList: [],
  activeTrack: null,
  shuffledList: [],
  isShuffledTrackList: false,
  isPlaying: true,
  filteredTracks: [],
  tracksForFilter: [],
  isFiltred: false,
  $isAuthorClick: false,
  $isGenreClick: false,
  $isYearsClick: false,
  countYears: 0,
  filters: {
    genre: [],
    author: [],
    years: "По умолчанию",
    search: "",
    searchFavorite: "",
  },
};

export const sliceTrackList = createSlice({
  name: "music",
  initialState,
  reducers: {
    clearTheFilter: (state, action) => {
      state.filters = {
        genre: [],
        author: [],
        years: "По умолчанию",
        search: "",
      };

      state.countYears = 0;
      state.isFiltred = false;
    },
    selectedFiltered: (state, action) => {
      const author = [...state.filteredAuthorGenreYears, action.payload];
      state.filteredAuthorGenreYears = author;
    },
    setFilters: (state, action) => {
      // state.filters[action.payload.nameFilter] = action.payload.valueFilter;

      if (
        action.payload.nameFilter !== "search" &&
        action.payload.nameFilter !== "years"
      ) {
        if (
          state.filters[action.payload.nameFilter].includes(
            action.payload.valueFilter
          )
        ) {
          state.filters[action.payload.nameFilter] = state.filters[
            action.payload.nameFilter
          ].filter((elem) => elem !== action.payload.valueFilter);
        } else {
          state.filters[action.payload.nameFilter].push(
            action.payload.valueFilter
          );
        }
      } else {
        state.filters[action.payload.nameFilter] = action.payload.valueFilter;
      }
      state.filteredTracks = state.tracksForFilter;
      //console.log(state.filters[action.payload.nameFilter]);
      if (
        !state.filters.genre.length > 0 &&
        !state.filters.author.length > 0 &&
        !state.filters.years &&
        !state.filters.search
      ) {
        state.isFiltred = false;
        return;
      }

      state.isFiltred = true;
      if (state.filters.years) {
        state.$isYearsClick = true;
        if (state.filters.years === "Сначала старые") {
          state.countYears = state.countYears = 1;
          state.filteredTracks = [...state.filteredTracks].sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
          );
        }
        if (state.filters.years === "Сначала новые") {
          state.countYears = state.countYears = 1;
          state.filteredTracks = [...state.filteredTracks].sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          );
        }
        if (state.filters.years === "По умолчанию") {
          state.countYears = state.countYears = 0;
          state.filteredTracks = state.tracksForFilter;
        }
      }

      if (state.filters.genre.length > 0) {
        state.$isGenreClick = true;
        state.filteredTracks = state.filters.genre
          .map((elemFilter) => {
            return state.filteredTracks.filter(
              (elem) => elem.genre === elemFilter
            );
          })
          .flat();
      }

      if (state.filters.author.length > 0) {
        state.$isAuthorClick = true;
        state.filteredTracks = state.filters.author
          .map((authorItem) => {
            return state.filteredTracks.filter(
              (elem) => elem.author === authorItem
            );
          })
          .flat();
        //console.log(state.filteredTracks);
        // state.filteredAuthorGenreYears.push(action.payload.filters);
      }

      // console.log(state.filteredAuthorGenreYears);

      if (state.filters.search) {
        state.filteredTracks = state.filteredTracks.filter((track) => {
          return (
            track.name
              .toLowerCase()
              .includes(state.filters.search.toLowerCase()) ||
            track.author
              .toLowerCase()
              .includes(state.filters.search.toLowerCase())
          );
        });
      }
    },
    getSearchFavorite: (state, action) => {
      if (state.filters.searchFavorite) {
        state.filteredTracks = state.filteredTracks.filter((track) => {
          return (
            track.name
              .toLowerCase()
              .includes(state.filters.search.toLowerCase()) ||
            track.author
              .toLowerCase()
              .includes(state.filters.search.toLowerCase())
          );
        });
      }
    },
    getAllTrack: (state, action) => {
      state.activeTrack = action.payload;
      state.trackList = action.payload.data;
      state.shuffledList = action.payload.data;
    },
    getPlayTrack: (state) => {
      state.isPlaying = true;
    },
    getPauseTrack: (state) => {
      state.isPlaying = false;
    },
    getNextTrack: (state) => {
      const allTrackList = state.isShuffledTrackList
        ? state.shuffledList.sort(() => Math.random() - 0.5)
        : state.trackList;

      const tracksIndex = allTrackList.findIndex((track) => {
        // console.log(track.id);
        return track.id === state.activeTrack.id;
      });

      if (allTrackList[tracksIndex + 1]) {
        state.activeTrack = allTrackList[tracksIndex + 1];
      }
    },
    getPrevTrack: (state) => {
      const allTrackList = state.isShuffledTrackList
        ? state.shuffledList
        : state.trackList;

      const tracksIndex = allTrackList.findIndex((track) => {
        // console.log(track.id);
        return track.id === state.activeTrack.id;
      });

      if (allTrackList[tracksIndex - 1]) {
        state.activeTrack = allTrackList[tracksIndex - 1];
      }
    },
    getTracksListShuffled: (state) => {
      state.isShuffledTrackList = !state.isShuffledTrackList;
    },
    setTrackListForFilter: (state, action) => {
      state.tracksForFilter = action.payload;
    },
  },
});

export const {
  getAllTrack,
  getPlayTrack,
  getPauseTrack,
  getNextTrack,
  getPrevTrack,
  getTracksListShuffled,
  setFilters,
  setTrackListForFilter,
  clearTheFilter,
  selectedFiltered,
  getSearchFavorite,
} = sliceTrackList.actions;
export default sliceTrackList.reducer;
