import { createSlice } from '@reduxjs/toolkit';
import { articulos } from '../data/products';

const initialState = {
    products: articulos,
    selectedCategory: '',
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { selectCategory } = productsSlice.actions;
export default productsSlice.reducer;
