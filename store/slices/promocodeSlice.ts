import { Promocode } from "@/app";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { appFetch } from "@/http";

export const fetchCheckPromocode = createAsyncThunk(
  "promocode/fetchCheckPromocode",
  async (code: string | undefined) => {
    try {
      if (!code) return;

      const response = await appFetch.post("/promocode/check", {
        body: { code },
      });

      if (!response.id) {
        alert("Такого промокода не существует");
        throw new Error("Неверный промокод");
      }

      return response;
    } catch (error) {
      throw new Error("Ошибка при проверке промокода");
    }
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
        state.promocode = payload;
        state.status = "finished";
      })
      .addCase(fetchCheckPromocode.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const promocodeReducer = promocodeSlice.reducer;
