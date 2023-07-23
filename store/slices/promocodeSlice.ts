import { Promocode } from "@/app";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { appFetch } from "@/http";

export const fetchCheckPromocode = createAsyncThunk(
  "promocode/fetchCheckPromocode",
  async (code: string | undefined) => {
    if (!code) return;

    const response = appFetch.post("/promocode/check", {
      body: { code },
    });

    return response;
  }
);

interface promocodeState {
  promocode: Promocode | null;
  status: "loading" | "finished" | "error";
}

const initialState: promocodeState = {
  promocode: null,
  status: "finished",
};

const promocodeSlice = createSlice({
  name: "promocode",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCheckPromocode.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCheckPromocode.fulfilled, (state, { payload }) => {
        if (!payload.id) throw new Error("Неверный промокод");
        state.promocode = payload;
        state.status = "finished";
      })
      .addCase(fetchCheckPromocode.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const promocodeReducer = promocodeSlice.reducer;
