import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name : "register",
    initialState : {
        email : "",
        password : ""
    },
    reducers : {
        setEmail : (state,action) => {
            state.email = action.payload;
        },
        setPassword : (state, action) => {
            state.password = action.payload;
        }
    }
})

export const {setEmail, setPassword} = registerSlice.actions;

export const selectEmail = (state) => state.register.email;
export const selectPassword = (state) => state.register.password;

export default registerSlice.reducer;