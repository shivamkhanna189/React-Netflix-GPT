import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: [],
        trailerId : null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        addTrailerVideoId: (state, action) => {
            state.trailerId= action.payload
        }
    }
})

export const { addNowPlayingMovies,addTrailerVideoId } = MovieSlice.actions;

export default MovieSlice.reducer;