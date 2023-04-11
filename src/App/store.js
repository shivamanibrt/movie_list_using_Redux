import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../Features/moveSlice";


export const store = configureStore({
    reducer: {
        movieList: movieSlice
    }
});