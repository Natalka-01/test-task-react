import { createSlice } from "@reduxjs/toolkit"; // Це прибере ReferenceError
import { fetchCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: { items: [], favorites: [], loading: false, error: null, total: 0 },
  reducers: {
    // Це прибере помилку в CamperCard
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(favId => favId !== id);
      } else {
        state.favorites.push(id);
      }
    },
    // Це допоможе уникнути дублікатів ключів
    resetItems: (state) => {
      state.items = [];
      state.total = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.items];
        state.total = action.payload.total;
      });
  }
});

export const { toggleFavorite, resetItems } = campersSlice.actions;
export const campersReducer = campersSlice.reducer; // Це прибере помилку в store.js