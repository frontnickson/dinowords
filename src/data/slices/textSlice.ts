import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    text: ""
}


const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        pushText(state, action: PayloadAction<string>) {
            state.text = action.payload
        }
    }
})

export const { pushText } = textSlice.actions;