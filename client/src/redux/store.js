import { configureStore } from "@reduxjs/toolkit";
import cityReducer from './features/citySlice';
import otherReducer from './features/otherSlice';
import trackReducer from './features/trackSlice'

export const store = configureStore({
    reducer: {
      cityReducer,
      otherReducer,
      trackReducer,
    },
})