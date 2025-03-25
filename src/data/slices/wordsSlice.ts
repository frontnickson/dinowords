import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateWord {
  id: number;
  word: string;
  translate: string;
}

const initialState: StateWord[] = [];

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {

    addWord: (state, action: PayloadAction<StateWord>) => {
      state.push(action.payload);
    },

    removeWord: (state, action: PayloadAction<number>) => {
      return state.filter(word => word.id !== action.payload);
    },
  },
});


export const { addWord, removeWord } = wordsSlice.actions;
export default wordsSlice.reducer;
