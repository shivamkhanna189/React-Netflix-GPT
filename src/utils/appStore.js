import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";


const AppStore = configureStore({
    reducer: {
        user : UserSlice
    }
})

export default AppStore;