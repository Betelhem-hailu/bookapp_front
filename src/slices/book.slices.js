import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookService from "../services/book.services";


export const createBook = createAsyncThunk(
"book/create",
async (formData, thunkAPI) => {
try {
    const response = await bookService.create(formData);
    console.log(response);
    return response;
} catch (error) {
    return thunkAPI.rejectWithValue(error);
}
}
);

export const getBooks = createAsyncThunk(
"book/getBooks",
async (_, thunkAPI) => {
try {
    const response = await bookService.getBooks();
    return response;
} catch (error) {
    return thunkAPI.rejectWithValue(error);
}
}
) 
export const getCategories = createAsyncThunk(
    "book/getCategories",
    async (_, thunkAPI) => {
    try {
        const response = await bookService.getCategories();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
    }
)

const initialState = {
loading: false,
data: [],
categories: [],
error: null,
msg: null
};


const bookSlice = createSlice({
name: "book",
initialState,
reducers: {},
extraReducers: builder => {
    builder
    .addCase(createBook.fulfilled, (state, { payload }) => {
        state.msg = payload.data;
    })
    .addCase(createBook.rejected, (state, {payload}) => {
        state.error = payload;
    })
    .addCase(getBooks.pending, (state)=>{
        state.loading = true;
    })
    .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload.data;
        console.log(state.data);
    })
    .addCase(getBooks.rejected, (state, {payload}) => {
        state.error = payload;
    })
    .addCase(getCategories.pending, (state)=>{
        state.loading = true;
    })
    .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload.data;
        console.log(state.categories);
    })
    .addCase(getCategories.rejected, (state, {payload}) => {
        state.error = payload;
    });
}
});


export const { reducer } = bookSlice.actions;
export default bookSlice.reducer;