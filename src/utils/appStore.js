import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import MovieSlice from "./movieSlice";
import GPTSlice from "./gptSlice"
import ConfigSlice from "./configSlice";

const AppStore = configureStore({
    reducer: {
        user: UserSlice,
        movie: MovieSlice,
        gpt: GPTSlice,
        config : ConfigSlice
    }
})

export default AppStore;