import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'itemSlice',
    initialState: [],
    reducers: {
        addItem: (store, action) => {
            store = action.payload.items;
            return store;
        },
        removeItem: (store, action) => {
            return store;
        }
    }
})

export const itemSliceAction = itemSlice.actions;
export default itemSlice;