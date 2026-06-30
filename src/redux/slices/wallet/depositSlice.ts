import { DepositBonus } from "@/types/bonus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface bonusState {
    activeBonus: DepositBonus | null;
}

const initialState: bonusState = {
    activeBonus: null,
};

const depositSlice = createSlice({
    name: "deposit",
    initialState,
    reducers: {
        setActiveBonus(state, action: PayloadAction<DepositBonus>) {
            state.activeBonus = action.payload;
        },

        clearActiveBonus(state) {
            state.activeBonus = null;
        },
    },
});

export const { setActiveBonus, clearActiveBonus } = depositSlice.actions;
export default depositSlice.reducer;
