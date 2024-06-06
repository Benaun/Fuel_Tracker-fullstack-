import { createSlice } from "@reduxjs/toolkit";

export const city = createSlice({
    name: 'city',
    initialState: {
        city: [],
    },
    reducers: {
        addToCity: (state, action) => {
            state.city.push(action.payload)
        },
        deleteCityLast: (state) => {
            if(state.city.length > 0) {
                state.city.pop()
            }
            return
        },
        clearCity: (state) => {
            state.city = []
        }
    }
})

export const { addToCity, deleteCityLast, clearCity } = city.actions;
export default city.reducer;