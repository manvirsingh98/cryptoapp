import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi, CryptoApi } from "../services/cryptoApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
