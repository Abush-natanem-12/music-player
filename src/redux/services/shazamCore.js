import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://genius-song-lyrics1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "b931f27379msh036e4c121c518c5p1dbe20jsnacc54fe56000"
      );
      headers.set("x-rapidapi-host", "genius-song-lyrics1.p.rapidapi.com"); // API host
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/chart/songs/" }),
    getSongDetails: builder.query({ query: (id) => `song/details?id=${id}` }),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery } = shazamApi;
