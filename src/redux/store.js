import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";

// importing api
import { shazamApi } from "./services/shazamCore";

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer, //
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware),
});
