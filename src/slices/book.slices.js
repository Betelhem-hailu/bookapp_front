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

export const getBookbyId = createAsyncThunk(
"book/getBookbyId",
async (id, thunkAPI) => {
try {
    const response = await bookService.getBookbyId(id);
    return response;
}
catch (error) {
    return thunkAPI.rejectWithValue(error);
}
}
)

export const getBookByCategory = createAsyncThunk(
    "book/getBookByCategory",
    async (categories, thunkAPI) => {
    try {
        const response = await bookService.getBookByCategory(categories);
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
    }
    )

    export const getBookBySearch = createAsyncThunk(
        "book/getBookBySearch",
        async (searchTerm, thunkAPI) => {
        try {
            const response = await bookService.searchBook(searchTerm);
            return response;
        }
        catch (error) {
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

export const updateBook = createAsyncThunk(
    "book/update",
    async (id, formData, thunkAPI) => {
    try {
        const response = await bookService.updateBook(id,formData);
        console.log(response);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
    }
    );

export const deleteBook = createAsyncThunk(
    "book/delete",
    async (id, thunkAPI) => {
        try {
            const response = await bookService.deleteBook(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const initialState = {
loading: false,
data: [],
book: {},
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
        state.loading = false;
    })
    .addCase(createBook.pending, (state, { payload }) => {
        state.loading = true;
    })
    .addCase(createBook.rejected, (state, {payload}) => {
        state.error = payload;
        state.loading = false;
    })
    .addCase(getBooks.pending, (state)=>{
        state.loading = true;
    })
    .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload.data;
    })
    .addCase(getBooks.rejected, (state, {payload}) => {
        state.error = payload;
        state.loading = false;
    })
    .addCase(getBookByCategory.pending, (state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(getBookByCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.data = payload.data;
    })
    .addCase(getBookByCategory.rejected, (state, {payload}) => {
        state.error = payload.message;
        state.loading = false;
        state.data = null;
    })
    .addCase(getBookBySearch.pending, (state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(getBookBySearch.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.data = payload.data;
    })
    .addCase(getBookBySearch.rejected, (state, {payload}) => {
        state.error = payload.message;
        state.loading = false;
        state.data = null;
    })
    .addCase(getBookbyId.pending, (state)=>{
        state.loading = true;
    })
    .addCase(getBookbyId.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.book = payload.data;
    })
    .addCase(getBookbyId.rejected, (state, {payload}) => {
        state.error = payload;
        state.data = null;
        state.loading = false;
    })
    .addCase(getCategories.pending, (state)=>{
        state.loading = true;
    })
    .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload.data;
    })
    .addCase(getCategories.rejected, (state, {payload}) => {
        state.error = payload;
        state.loading = false;
    })
    .addCase(updateBook.pending, (state) => {
        state.loading = true;
    })
    .addCase(updateBook.fulfilled, (state, { payload }) => {
        state.msg = payload.data;
    })
    .addCase(updateBook.rejected, (state, {payload}) => {
        state.error = payload;
        state.loading = false;
    })
    .addCase(deleteBook.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.msg = null;
    })
    .addCase(deleteBook.fulfilled, (state, { payload }) => {
        state.msg = payload;
        state.error = null;
        state.loading = false;
    })
    .addCase(deleteBook.rejected, (state, {payload}) => {
        state.error = payload;
        state.loading = false;
        state.msg = null;
    });
}
});


export const { reducer } = bookSlice.actions;
export default bookSlice.reducer;