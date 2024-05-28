import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import MovieSlice from "./movieSlice";

const AppStore = configureStore({
    reducer: {
        user: UserSlice,
        movie : MovieSlice
    }
})

export default AppStore;