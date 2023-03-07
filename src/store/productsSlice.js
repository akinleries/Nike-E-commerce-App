import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
    products,
    selectedProduct: null,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSelectedProduct: ( state, { payload }) => {
            const productId = payload;
            state.selectedProduct = products.find(({id}) => id === productId);
        }
    }
});