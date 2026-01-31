import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    form: "", 
    features: {
      AC: false,
      bathroom: false,
      kitchen: false,
      TV: false,
      radio: false,
      refrigerator: false,
      microwave: false,
      gas: false,
      water: false,
    },
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setForm(state, action) {
      state.form = state.form === action.payload ? "" : action.payload;
    },
    toggleFeature(state, action) {
      const feature = action.payload;
      state.features[feature] = !state.features[feature];
    },
  },
});

export const { setLocation, setForm, toggleFeature } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;