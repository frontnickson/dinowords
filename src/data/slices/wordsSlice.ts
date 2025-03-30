import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    addText: (state, action: PayloadAction<string>) => {
      
    },
  },
});


export const { addText } = wordsSlice.actions;
export default wordsSlice.reducer;
