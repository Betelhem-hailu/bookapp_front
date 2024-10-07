import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from "../services/cart.services";

export const getCart = createAsyncThunk(
    "cart/getCart",
    async (_, thunkAPI) => {
    try {
        const response = await cartService.getCart();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
    }
);

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async (bookId, thunkAPI) => {
    try {
        const response = await cartService.addToCart(bookId);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
    }
);

export const removeFromCart = createAsyncThunk(
    "cart/removeFromCart",
    async (bookId, thunkAPI) => {
    try {
        const response = await cartService.removeFromCart(bookId);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
    }
);

const initialState = {
    cart: [],
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getCart.pending, (state) => {
            state.loading = true;
        })
        .addCase(
    getCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            console.log(state.cart);
        })
        .addCase(getCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(addToCart.pending, (state) => {
            state.loading = true;
        })
        .addCase(addToCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            console.log(state.cart);
        })
        .addCase(addToCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(removeFromCart.pending, (state) => {
            state.loading = true;
        })
        .addCase(removeFromCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
        })
        .addCase(removeFromCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { reducer } = cartSlice.actions;
export default cartSlice.reducer;