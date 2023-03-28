import { configureStore } from "@reduxjs/toolkit";
import bucketSlice from "./BucketSlice";
import toggleSlice from "./ToggleSlice.js";
import historySlice from "./HistorySlice";

const store = configureStore({
  reducer: {
    buckets: bucketSlice,
    toggle: toggleSlice,
    history: historySlice,
  },
});

export default store;
