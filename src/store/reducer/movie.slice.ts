import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
});

const movieReducer = movieSlice.reducer;

export default movieReducer;
