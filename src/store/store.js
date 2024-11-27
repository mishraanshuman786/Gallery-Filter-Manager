import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice.js";
import filterSlice from "./filterSlice.js";

 const store = configureStore({
    reducer: {
         products: productSlice,
        filters: filterSlice
    }
 });

export default store;