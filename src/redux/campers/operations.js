import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, limit = 4, filters = {} }, thunkAPI) => {
    try {
      const params = new URLSearchParams({ page, limit });
      if (filters.location) params.append("location", filters.location);
      if (filters.form) params.append("form", filters.form);
      Object.keys(filters.features).forEach(key => {
        if (filters.features[key]) params.append(key, "true");
      });

      const { data } = await axios.get(`/campers?${params.toString()}`);
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);