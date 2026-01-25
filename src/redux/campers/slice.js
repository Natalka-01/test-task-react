import { createSlice } from "@reduxjs/toolkit"; // Крок 1: Імпорт

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    favorites: [],
    loading: false,
    error: null,
    total: 0,
  },
  reducers: {
    // Крок 2: Додай toggleFavorite, на який свариться CamperCard.jsx
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
    }
  },
  extraReducers: (builder) => {
    // Твої builder.addCase для fetchCampers...
  }
});

// Крок 3: Експортуй екшени
export const { toggleFavorite, resetItems } = campersSlice.actions;

// Крок 4: Експортуй редюсер саме під цим ім'ям для store.js
export const campersReducer = campersSlice.reducer;