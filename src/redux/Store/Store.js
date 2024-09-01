import { configureStore } from "@reduxjs/toolkit";
import productSlice, { setProduct } from "../Slice/ProSlice";
import Datas from "../../Data.json";

const store = configureStore({
  reducer: {
    products: productSlice,
  }
});

store.dispatch(setProduct(Datas));

export default store;