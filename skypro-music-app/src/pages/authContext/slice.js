import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackList: [],
  activeTrack: null,
  shuffledList: [],
  isShuffledTrackList: false,
  isPlaying: true,
  filteredTracks: [],
  tracksForFilter: [],
  filtredFavoriteTracks: [],
  tracksFavoriteForFilter: [],
  filterdCollectionsTracks: [],
  filterdCollectionsForFilter: [],
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
  },
};

export const sliceTrackList = createSlice({
  name: "music",
  initialState,
  reducers: {
    clearTheFilter: (state) => {
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
      if (
        !state.filters.genre.length > 0 &&
        !state.filters.author.length > 0 &&
        !state.filters.years &&
        !state.filters.search
      ) {
        state.isFiltred = false;
        return;
      }
      if (
        action.payload.nameFilter !== "years" &&
        action.payload.nameFilter !== "search"
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
      // state.filterdCollectionsTracks = state.filterdCollectionsForFilter;
      state.filtredFavoriteTracks = state.tracksFavoriteForFilter;

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
      if (state.filters.search) {
        state.filtredFavoriteTracks = state.filtredFavoriteTracks.filter(
          (track) => {
            return (
              track.name
                .toLowerCase()
                .includes(state.filters.search.toLowerCase()) ||
              track.author
                .toLowerCase()
                .includes(state.filters.search.toLowerCase())
            );
          }
        );
      }
      if (state.filters.search) {
        state.filterdCollectionsForFilter =
          state.filterdCollectionsForFilter.filter((track) => {
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

      // console.log((state.activeTrack = action.payload));
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
    setTrackListFavoriteFilter: (state, action) => {
      state.tracksFavoriteForFilter = action.payload;
    },
    setTrackListCollectionsFilter: (state, action) => {
      state.filterdCollectionsForFilter = action.payload;
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
  setTrackListFavoriteFilter,
  setTrackListCollectionsFilter,
} = sliceTrackList.actions;
export default sliceTrackList.reducer;
