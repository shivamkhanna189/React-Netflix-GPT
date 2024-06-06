import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
    name: "config",
    initialState: {
        language :"en"
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export default ConfigSlice.reducer;

export const {setLanguage} = ConfigSlice.actions