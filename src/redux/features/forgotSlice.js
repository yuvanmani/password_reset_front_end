import { createSlice } from "@reduxjs/toolkit";

export const forgotSlice = createSlice({
    name : "forgot",
    initialState : {
        email : ""
    },
    reducers : {
        setEmail : (state, action) => {
            state.email = action.payload;
        }
    }
})

export const {setEmail} = forgotSlice.actions;

export const selectEmail = (state) => state.forgot.email;

export default forgotSlice.reducer;