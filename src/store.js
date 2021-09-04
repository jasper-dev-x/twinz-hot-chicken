import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./ReduxPie/MenuSlice";

export const store = configureStore({
    reducer: {
        menu: MenuSlice
    }
});