import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import dpositReducer from "./slices/wallet/depositSlice";
import bonusReducer from "./slices/wallet/bonusSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        deposit: dpositReducer,
        bonus: bonusReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
