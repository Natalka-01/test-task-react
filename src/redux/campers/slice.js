import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: { items: [], favorites: [], loading: false, error: null, total: 0 },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(favId => favId !== id);
      } else {
        state.favorites.push(id);
      }
    },
    resetItems: (state) => {
      state.items = [];
      state.total = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => { state.loading = true; })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        // Важливо: додаємо лише унікальні елементи або замінюємо на 1-й сторінці
        if (action.meta.arg.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { toggleFavorite, resetItems } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;