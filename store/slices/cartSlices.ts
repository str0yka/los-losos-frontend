import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSession } from "next-auth/react";

import { CartInteractionResponse, ProductInCart } from "@/app";
import { API_URL } from "@/utils/consts";

export const fetchAllProductsInCart = createAsyncThunk(
  "cart/fetchAllProductsInCart",
  async (accessToken?: string | undefined) => {
    const config = accessToken
      ? { headers: { authorization: `Bearer ${accessToken}` } }
      : { headers: { authorization: `${localStorage.getItem("CART_TOKEN")}` } };

    const { data } = await axios.get<Array<ProductInCart>>(
      API_URL + "/cart",
      config
    );

    return data;
  }
);

export const fetchAddToCart = createAsyncThunk(
  "cart/fetchAddToCart",
  async ({ id, accessToken }: { id: number; accessToken: string }) => {
    const { data } = await axios.post<CartInteractionResponse>(
      API_URL + "/cart",
      { id },
      { headers: { authorization: `Bearer ${accessToken}` } }
    );

    if (data.token) {
      localStorage.setItem("CART_TOKEN", data.token);
    }

    return data;
  }
);

export const fetchDeleteFromCart = createAsyncThunk(
  "cart/fetchDeleteFromCart",
  async ({ id, accessToken }: { id: number; accessToken: string }) => {
    const { data } = await axios.delete<CartInteractionResponse>(
      API_URL + "/cart",
      {
        data: { id },
        headers: { authorization: `Bearer ${accessToken}` },
      }
    );

    if (data.token) {
      localStorage.setItem("CART_TOKEN", data.token);
    }

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
        if (candidate?.count) {
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
