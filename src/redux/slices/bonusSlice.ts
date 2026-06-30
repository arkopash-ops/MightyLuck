import { Bonus } from "@/types/bonus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface bonusState {
    activeBonus: Bonus | null;
}

const initialState: bonusState = {
    activeBonus: null,
};

const bonusSlice = createSlice({
    name: "bonus",
    initialState,
    reducers: {
        setActiveBonus(state, action: PayloadAction<Bonus>) {
            state.activeBonus = action.payload;
        },

        clearActiveBonus(state) {
            state.activeBonus = null;
        },
    },
});

export const { setActiveBonus, clearActiveBonus } = bonusSlice.actions;
export default bonusSlice.reducer;
