import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        isDarkMode: false
    },
    reducers: {
        setDarkMode: (state, value) => {
            state.isDarkMode = value.payload;
        },
    },
})

export const { setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;