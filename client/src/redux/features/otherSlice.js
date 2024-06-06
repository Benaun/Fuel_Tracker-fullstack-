import { createSlice } from "@reduxjs/toolkit";

const other = createSlice({
    name: 'other',
    initialState: {
        other: [],
    },
    reducers: {
        addToOther(state, action) {
            state.other.push(action.payload)
        },
        deleteOtherLast(state) {
            if(state.other.length > 0) {
                state.other.pop()
            }
            return
        },
        clearOther(state) {
            state.other = []
        }
    }
})

export const { addToOther, deleteOtherLast, clearOther } = other.actions;
export default other.reducer;