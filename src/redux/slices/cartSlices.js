import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemCart = state.data.find((item) => item.id === action.payload.id);
            if (itemCart) {
                itemCart.qty++;
            } else {
                state.data.push(action.payload);
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;