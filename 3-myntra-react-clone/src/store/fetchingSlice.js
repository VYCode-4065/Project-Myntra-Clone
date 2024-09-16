import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
    name: 'fetchingSlice',
    initialState: {
        fetchingInit: false,
        currentlyFetch: false,
        fetchingDn: false
    },
    reducers: {
        fetchingInitiate: (store) => {
            store.fetchingInit = true;

        },
        currentlyFetching: (store) => {
        },
        fetchingDone: (store) => {
            store.fetchingInit = false;
            store.fetchingDn = true;
        }
    }
})

export const fetchingSliceAction = fetchingSlice.actions;
export default fetchingSlice;