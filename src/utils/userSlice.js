import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setUserInfo: (state, action) => {
            return action.payload;
        },
        removeUserInfo: (state, action) => {
            return null;
        }
    }
})

export const { setUserInfo  ,removeUserInfo} = UserSlice.actions;

export default UserSlice.reducer;