import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "@/utils/consts";

export interface Product {
  id: number;
  title: string;
  img: string;
  foods: string;
  price: number;
  weight: number;
  categoryId: number;
}

export type ProductInCart = {
  count: number;
  product: Product;
};

export const fetchAllProductsInCart = createAsyncThunk(
  "cart/fetchAllProductsInCart",
  async () => {
    const { data } = await axios.get<Array<ProductInCart>>(API_URL + "/cart", {
      headers: { authorization: `${localStorage.getItem("token")}` },
    });
    return data;
  }
);

export const fetchAddToCart = createAsyncThunk(
  "cart/fetchAddToCart",
  async (id: number) => {
    const { data } = await axios.post<ProductInCart>(
      API_URL + "/cart",
      {
        id,
      },
      { headers: { authorization: `${localStorage.getItem("token")}` } }
    );
    return data;
  }
);

export const fetchDeleteFromCart = createAsyncThunk(
  "cart/fetchDeleteFromCart",
  async (id: number) => {
    const { data } = await axios.delete<ProductInCart>(API_URL + "/cart", {
      data: { id },
      headers: { authorization: `${localStorage.getItem("token")}` },
    });
    return data;
  }
);

type cartStateType = {
  data: Array<ProductInCart>;
  status: "loading" | "finished" | "error";
};
const initialState: cartStateType = {
  data: [],
  status: "loading",
};

const cartSlices = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsInCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsInCart.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.status = "finished";
      })
      .addCase(fetchAllProductsInCart.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchAddToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddToCart.fulfilled, (state, { payload }) => {
        const candidate = state.data.find(
          ({ product }) => product.id === payload.product.id
        );
        if (!!candidate?.count) {
          candidate.count += 1;
        } else {
          state.data.push(payload);
        }
        state.status = "finished";
      })
      .addCase(fetchAddToCart.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchDeleteFromCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDeleteFromCart.fulfilled, (state, { payload }) => {
        const candidate = state.data.find(
          ({ product }) => product?.id === payload.product.id
        );
        if (candidate?.count && candidate.count > 1) {
          candidate.count -= 1;
        } else {
          state.data = state.data.filter(
            ({ product }) => product.id !== payload.product.id
          );
        }
        state.status = "finished";
      })
      .addCase(fetchDeleteFromCart.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const cartReducer = cartSlices.reducer;
