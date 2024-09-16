import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchingSlice from "./fetchingSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
    reducer: {
        item: itemSlice.reducer,
        fetching: fetchingSlice.reducer,
        bags: bagSlice.reducer,
    }
})

export default myntraStore;