import { createSlice } from "@reduxjs/toolkit";

export const theme = createSlice({
    name: "darkTheme",
    initialState: {
        dark: false
    },
    reducers: {
        setDarkMode: state => { state.dark = !state.dark }
    }
})

export const { setDarkMode } = theme.actions

export default theme.reducer