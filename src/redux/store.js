import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slice/User'

export default configureStore({
    reducer: {
        user: userReducer
    }
})