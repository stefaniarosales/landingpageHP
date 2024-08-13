import { createSlice } from "@reduxjs/toolkit";
import { articulos } from "../data/products";

const INITIAL_STATE = {
    products: articulos,
}

const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        addproduct: (state, action) => {
            state.products.push(action.payload)
        },
        removeproduct: (state, action) => {
            return state.filter(product=>product!==action.payload)
        }
    }
})

export const { addproduct, removeproduct} = productsSlice.actions
export default productsSlice.reducer