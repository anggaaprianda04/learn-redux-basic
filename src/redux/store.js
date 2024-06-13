import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlices";
import darkModeReducer from "./slices/darkModeSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        darkMode: darkModeReducer,
    },
});
// console.log("oncreate store : ", store.getState());

// store.subscribe(() => {
//     console.log("STORE CHANGE : ", store.getState());
// });

export default store;