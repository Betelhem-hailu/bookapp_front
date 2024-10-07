import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth.slices";
import bookReducer from "../slices/book.slices";
import cartReducer from "../slices/cart.slices";

const reducer = {
    auth: authReducer,
    book: bookReducer,
    cart: cartReducer
};

const store = configureStore({
    reducer: reducer,
    devTools: true
});

export default store;