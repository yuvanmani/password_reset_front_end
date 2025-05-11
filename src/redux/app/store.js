import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/registerSlice";
import forgotReducer from "../features/forgotSlice";

const store = configureStore({
    reducer : {
        register : registerReducer,
        forgot : forgotReducer
    }
})

export default store;