import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  text: ""
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    addText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
});

export const { addText } = wordsSlice.actions;
export default wordsSlice.reducer;