import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { words } from "../constants/words";
import { WordState } from "./userSlice";

interface StateWords {
  words: WordState[];
  activeWords: boolean;
  wordsText: string;
}

const initialState: StateWords = {
  words: words,
  activeWords: false,
  wordsText: ''
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    setWordsText(state, action: PayloadAction<string>) {
      state.wordsText = action.payload;
    }
  },
});

export const { setWordsText } = wordsSlice.actions

export default wordsSlice.reducer;