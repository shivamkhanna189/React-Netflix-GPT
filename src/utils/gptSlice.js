import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "gpt",
    initialState: {
        isGPTSearchClicked: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.isGPTSearchClicked = !state.isGPTSearchClicked
        },
        addGptMovies: (state, action)=>{
            const { movieNames, movieResults } = action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const { toggleGPTSearchView ,addGptMovies} = GPTSlice.actions;

export default GPTSlice.reducer