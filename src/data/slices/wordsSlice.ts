import { createSlice } from "@reduxjs/toolkit";
import { words } from "../constants/words";

interface WordState {
  id: number;
  word: string;
  translate: string;
  know: boolean;
}

interface Words {
  words: WordState[]
}

const initialState: Words = {
  words: words
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {},
});

export default wordsSlice.reducer;