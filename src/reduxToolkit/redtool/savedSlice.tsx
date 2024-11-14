import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryType } from "../../components/CountryLIst";


interface SavedState {
  savedCountries: CountryType[];
}

const initialState: SavedState = {
  savedCountries: [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    toggleSave: (state, action: PayloadAction<CountryType>) => {
      const existingCountry = state.savedCountries.find(
        (country) => country.name === action.payload.name
      );
      if (existingCountry) {
        state.savedCountries = state.savedCountries.filter(
          (country) => country.name !== action.payload.name
        );
      } 
      else {
        state.savedCountries.push(action.payload);
      }
    },
  },
});

export const { toggleSave } = savedSlice.actions;
export default savedSlice.reducer;
