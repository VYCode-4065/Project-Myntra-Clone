import { createSlice } from "@reduxjs/toolkit"

const bagSlice = createSlice({
    name: 'bagSlice',
    initialState: [],
    reducers: {
        addtoBag: (store, action) => {
            store.push(action.payload);
        },
        removefromBag: (store, action) => {
            return store.filter(item => item.id != action.payload);
        }
    }
})


export const bagSliceAction = bagSlice.actions;
export default bagSlice;