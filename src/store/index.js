import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth.slices";
import bookReducer from "../slices/book.slices";

const reducer = {
    auth: authReducer,
    book: bookReducer
};

const store = configureStore({
    reducer: reducer,
    devTools: true
});

export default store;