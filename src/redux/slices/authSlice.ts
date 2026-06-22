import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: User | null;
}

const SESSION_KEY = "ml_session";

function loadSession(): User | null {
    if (typeof window === "undefined") return null;
    const s = localStorage.getItem(SESSION_KEY);
    return s ? JSON.parse(s) : null;
}

const initialState: AuthState = {
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        initAuth(state) {
            state.user = loadSession();
        },

        loginSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload;
            localStorage.setItem(SESSION_KEY, JSON.stringify(action.payload));
        },

        logoutUser(state) {
            state.user = null;
            localStorage.removeItem(SESSION_KEY);
        },
    },
});

export const { initAuth, loginSuccess, logoutUser } = authSlice.actions;

export default authSlice.reducer;
