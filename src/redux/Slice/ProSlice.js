import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    ProductDetails:[],
    AddToCart:[],
    SearchByProperty:[],
};

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setProduct:(state,action)=>{
            state.ProductDetails = action.payload;
        },
        SetAddToCart:(state,action)=>{
            state.AddToCart= action.payload;
        },
        SetSearchByProperty:(state,action)=>{
            state.SearchByProperty = action.payload;
        }

    },
});

export const {setProduct,SetAddToCart,SetSearchByProperty} = productSlice.actions;
export default productSlice.reducer;
