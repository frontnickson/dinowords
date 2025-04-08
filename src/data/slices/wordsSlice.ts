import { createSlice } from "@reduxjs/toolkit";
import { words } from "../constants/words";
import { WordState } from "./userSlice";

interface StateWords {
  words: WordState[];
  activeWords: boolean;
}

const initialState: StateWords = {
  words: words,
  activeWords: false
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {},
});

// export const { editStatusWord } = wordsSlice.actions

export default wordsSlice.reducer;