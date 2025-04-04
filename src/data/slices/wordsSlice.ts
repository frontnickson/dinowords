import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { words } from "../constants/words";
import { WordState } from "./userSlice";


const initialState = words;

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    editStatusWord: (state, action: PayloadAction<WordState>) => {
      return state.map(item => item.id === action.payload.id ? { ...item, know: true } : item)
    }
  },
});

export const { editStatusWord } = wordsSlice.actions

export default wordsSlice.reducer;