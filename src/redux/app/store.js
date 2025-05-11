import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/registerSlice";
import forgotReducer from "../features/forgotSlice";
import resetReducer from "../features/resetSlice";

const store = configureStore({
    reducer : {
        register : registerReducer,
        forgot : forgotReducer,
        reset : resetReducer
    }
})

export default store;