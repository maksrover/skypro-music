import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryrefresh = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  const auth = localStorage.getItem("refresh");
  if (!auth) {
    window.location.href = "/login";
  }
  const result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const refresh = await baseQuery(
      {
        url: "/user/token/refresh/",
        method: "POST",
        body: {
          refresh: localStorage.getItem("refresh"),
        },
      },
      api,
      extraOptions
    );
    if (!refresh.data.access) {
      window.location.href = "/login";
      return;
    }
    const retryResult = await baseQuery(args, api, extraOptions);
    return retryResult;
  }
  return result;
};

const urlTracks = "https://skypro-music-api.skyeng.tech";

export const apiMusic = createApi({
  reducerPath: "apiMusic",
  tagTypes: ["Track"],
  baseQuery: fetchBaseQuery({ baseUrl: urlTracks }),
  endpoints: (build) => ({
    allTracks: build.query({
      query: () => "/catalog/track/all/",
    }),

    myFavoriteTracks: build.query({
      query: ({ token }) => ({
        url: "/catalog/track/favorite/all/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Track", id })), "Track"]
          : ["Track"],
    }),
    getAllTracksId: build.query({
      query: ({ id }) => ({ url: `/catalog/track/${id}` }),
      providesTags: ["Track"],
    }),
    getSelectionCategory: build.query({
      query: ({ id }) => `/catalog/selection/${id}`,
      providesTags: ["Track"],
    }),
    addMyTracks: build.mutation({
      query: ({ token, id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: (arg) => [{ type: "Track", id: arg.id }],
    }),
    deleteMyTrack: build.mutation({
      query: ({ token, id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: (arg) => [{ type: "Track", id: arg.id }],
    }),
  }),
});

export const {
  useAllTracksQuery,
  useGetAllTracksIdQuery,
  useMyFavoriteTracksQuery,
  useAddMyTracksMutation,
  useDeleteMyTrackMutation,
  useGetSelectionCategoryQuery,
} = apiMusic;
