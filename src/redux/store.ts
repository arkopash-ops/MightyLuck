import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import bonusReducer from "./slices/bonusSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        bonus: bonusReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
