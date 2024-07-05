import { createSlice } from "@reduxjs/toolkit";
import getFlights from "./../actions/index";
const initialState = { isLoading: false, isError: null, flights: [], path: [] };

const flightSlice = createSlice({
  name: "flightt",
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.path = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFlights.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.flights = action.payload;
    });
  },
});

export default flightSlice.reducer;

export const { setPath } = flightSlice.actions;
