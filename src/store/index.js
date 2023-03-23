import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./themestore"

export default configureStore({
    reducer: {
        theme: themeReducer
    }
})