import { createSlice } from "@reduxjs/toolkit";

const track = createSlice({
    name: 'track',
    initialState: {
        track: [],
        sum: 0
    },
    reducers: {
        addToTrack(state, action) {
            state.track.push(action.payload);
        },
        deleteTrackLast(state) {
            if (state.track.length > 0) {
                state.track.pop()
            }
            return
        },
        clearTrack(state) {
            state.track = []
        },
    }
})

export const { addToTrack, deleteTrackLast, clearTrack } = track.actions;
export default track.reducer;