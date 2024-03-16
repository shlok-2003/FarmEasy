import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/features/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});
