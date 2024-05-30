import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: [],
        popularMovies :[],
        trailerId : null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
                state.popularMovies = action.payload
        },
        addTrailerVideoId: (state, action) => {
            state.trailerId= action.payload
        }
    }
})

export const { addNowPlayingMovies,addPopularMovies,addTrailerVideoId } = MovieSlice.actions;

export default MovieSlice.reducer;