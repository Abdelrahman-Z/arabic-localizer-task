import { configureStore } from "@reduxjs/toolkit";

import cardsSlice from "./Features/cardsSlice";

export const store = configureStore({
    reducer: {
        cards: cardsSlice
    }
})